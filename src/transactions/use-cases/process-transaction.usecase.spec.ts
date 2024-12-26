/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { ProcessTransactionUseCase } from './process-transaction.usecase';
import { Repository } from 'typeorm';
import { Transaction } from '../transactions.entity';
import { ProductEntity } from '../../products/product.entity';
import { Delivery } from '../../deliveries/deliveries.entity';
import { WompiService } from '../../wompi/wompi.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { CreateTransactionDto } from '../dto/create-transaction.dto';

jest.mock('bcrypt'); // Mock para bcrypt

describe('ProcessTransactionUseCase', () => {
  let useCase: ProcessTransactionUseCase;
  let transactionRepository: Repository<Transaction>;
  let productRepository: Repository<ProductEntity>;
  let deliveryRepository: Repository<Delivery>;
  let wompiService: WompiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProcessTransactionUseCase,
        {
          provide: getRepositoryToken(Transaction),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(ProductEntity),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Delivery),
          useClass: Repository,
        },
        {
          provide: WompiService,
          useValue: {
            createPaymentSession: jest.fn(),
          },
        },
      ],
    }).compile();

    useCase = module.get<ProcessTransactionUseCase>(ProcessTransactionUseCase);
    transactionRepository = module.get<Repository<Transaction>>(
      getRepositoryToken(Transaction),
    );
    productRepository = module.get<Repository<ProductEntity>>(
      getRepositoryToken(ProductEntity),
    );
    deliveryRepository = module.get<Repository<Delivery>>(
      getRepositoryToken(Delivery),
    );
    wompiService = module.get<WompiService>(WompiService);
  });

  it('debe procesar la transacción correctamente', async () => {
    const createTransactionDto: CreateTransactionDto = {
      cardNumber: '4111111111111111',
      name: 'John Doe',
      expiryDate: '12/25',
      cvv: 123,
      shippingAddress: '123 Main St',
      productName: 'Product A',
      productPrice: 50.0,
      baseFee: 5.0,
      shippingFee: 10.0,
      totalAmount: 65.0,
      cardType: 'VISA',
    };

    // Mock de bcrypt
    (bcrypt.hash as jest.Mock).mockResolvedValue('hashed_card_number');

    // Mock de repositorios
    const transaction: Transaction = {
      id: 1,
      cardNumber: 'hashed_card_number',
      expiryDate: '12/25',
      cvv: 123,
      shippingAddress: '123 Main St',
      productName: 'Product A',
      productPrice: 50.0,
      baseFee: 5.0,
      shippingFee: 10.0,
      totalAmount: 65.0,
      cardType: 'VISA',
      status: 'PENDING',
    };

    const product: ProductEntity = {
      id: 1,
      name: 'Product A',
      stock: 10,
      price: 50.0,
      description: 'Product',
    } as ProductEntity;

    const delivery: Delivery = {
      id: 1,
      address: '123 Main St',
      recipientName: 'John Doe',
      deliveryDate: new Date(),
      product: 'Product A',
      status: 'PENDING',
      transactionId: transaction.id, // Asegúrate de incluir esta propiedad
    } as Delivery;

    jest.spyOn(transactionRepository, 'create').mockReturnValue(transaction);
    jest.spyOn(transactionRepository, 'save').mockResolvedValue(transaction);

    jest.spyOn(productRepository, 'findOne').mockResolvedValue(product); // Simulando el método findOne
    jest.spyOn(productRepository, 'save').mockResolvedValue({
      ...product,
      stock: 9, // Asegúrate de que el stock se actualiza correctamente
    });

    jest.spyOn(deliveryRepository, 'create').mockReturnValue(delivery);
    jest.spyOn(deliveryRepository, 'save').mockResolvedValue(delivery);

    jest.spyOn(wompiService, 'createPaymentSession').mockResolvedValue({
      data: { status: 'PENDING' },
    });

    // Ejecución
    const result = await useCase.execute(createTransactionDto);

    // Verificaciones
    expect(bcrypt.hash).toHaveBeenCalledWith(
      createTransactionDto.cardNumber,
      10,
    );
    expect(transactionRepository.create).toHaveBeenCalledWith({
      ...createTransactionDto,
      cardNumber: 'hashed_card_number',
      status: 'PENDING',
    });
    expect(transactionRepository.save).toHaveBeenCalled();
    expect(productRepository.findOne).toHaveBeenCalledWith({
      where: { name: 'Product A' },
    });
    expect(productRepository.save).toHaveBeenCalledWith({
      ...product,
      stock: 9,
    });
    expect(deliveryRepository.save).toHaveBeenCalledWith(delivery);
    expect(wompiService.createPaymentSession).toHaveBeenCalledWith({
      cardNumber: '4111111111111111',
      name: 'John Doe',
      expiryDate: '12/25',
      cvv: 123,
      shippingAddress: '123 Main St',
      productName: 'Product A',
      productPrice: 50.0,
      baseFee: 5.0,
      shippingFee: 10.0,
      totalAmount: 65.0,
      cardType: 'VISA',
    });
    expect(result).toEqual(delivery);
  });

  it('debe lanzar un error si el producto no tiene suficiente stock', async () => {
    const createTransactionDto: CreateTransactionDto = {
      cardNumber: '4111111111111111',
      name: 'John Doe',
      expiryDate: '12/25',
      cvv: 123,
      shippingAddress: '123 Main St',
      productName: 'Product A',
      productPrice: 50.0,
      baseFee: 5.0,
      shippingFee: 10.0,
      totalAmount: 65.0,
      cardType: 'VISA',
    };

    const product: ProductEntity = {
      id: 1,
      name: 'Product A',
      stock: 0, // Producto sin stock
      price: 50.0,
      description: 'Product',
    } as ProductEntity;

    jest.spyOn(productRepository, 'findOne').mockResolvedValue(product);

    await expect(useCase.execute(createTransactionDto)).rejects.toThrowError(
      'Product out of stock',
    );
  });
});
