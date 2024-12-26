/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { Transaction } from '../transactions.entity';
import { ProductEntity } from '../../products/product.entity';
import { WompiService } from '../../wompi/wompi.service';
import { Delivery } from '../../deliveries/deliveries.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ProcessTransactionUseCase {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    @InjectRepository(Delivery)
    private readonly deliveryRepository: Repository<Delivery>,
    private readonly wompiService: WompiService,
  ) {}

  async execute(createTransactionDto: CreateTransactionDto): Promise<Delivery> {
    // 1. Hashear el número de tarjeta
    const hashedCardNumber = await bcrypt.hash(
      createTransactionDto.cardNumber,
      10,
    );

    // 2. Crear la transacción inicial
    const newTransaction = this.transactionRepository.create({
      ...createTransactionDto,
      cardNumber: hashedCardNumber,
      status: 'PENDING',
    });

    const savedTransaction =
      await this.transactionRepository.save(newTransaction);

    // 3. Procesar el pago con Wompi
    const paymentSession = await this.wompiService.createPaymentSession(
      createTransactionDto.cardNumber,
      createTransactionDto.cvv,
      createTransactionDto.expiryDate,
      createTransactionDto.shippingAddress,
      createTransactionDto.totalAmount,
    );

    // 4. Actualizar el estado de la transacción
    savedTransaction.status =
      paymentSession?.data?.status === 'PENDING' ? 'COMPLETED' : 'FAILED';

    // 5. Actualizar el stock del producto
    const product = await this.productRepository.findOne({
      where: { name: createTransactionDto.productName },
    });

    if (product) {
      product.stock -= 1;
      await this.productRepository.save(product);
    }

    // 6. Crear una entrega
    const newDelivery = this.deliveryRepository.create({
      transactionId: savedTransaction.id,
      address: savedTransaction.shippingAddress,
      recipientName: 'name', // Personalizar según necesidad
      deliveryDate: new Date().toISOString(),
      product: savedTransaction.productName,
      status: 'PENDING',
    });

    await this.deliveryRepository.save(newDelivery);
    await this.transactionRepository.save(savedTransaction);

    return newDelivery;
  }
}
