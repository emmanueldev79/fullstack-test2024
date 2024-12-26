/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './transactions.entity';
import { ProductEntity } from '../products/product.entity';
import { Delivery } from '../deliveries/deliveries.entity';
import { WompiService } from '../wompi/wompi.service';
import { TransactionsController } from './transactions.controller';
import { ProcessTransactionUseCase } from './use-cases/process-transaction.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction, ProductEntity, Delivery])],
  controllers: [TransactionsController],
  providers: [ProcessTransactionUseCase, WompiService],
})
export class TransactionsModule {}
