/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { ProcessTransactionUseCase } from './use-cases/process-transaction.usecase';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(
    private readonly processTransactionUseCase: ProcessTransactionUseCase,
  ) {}

  @Post()
  async create(@Body() createTransactionDto: CreateTransactionDto) {
    try {
      const result =
        await this.processTransactionUseCase.execute(createTransactionDto);
      return result;
    } catch (error) {
      console.error('Error al procesar la transacción:', error.message);
      throw new Error('Error al procesar la transacción');
    }
  }
}
