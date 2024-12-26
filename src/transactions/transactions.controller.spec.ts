/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TransactionsController } from './transactions.controller';
import { ProcessTransactionUseCase } from './use-cases/process-transaction.usecase';

describe('TransactionsController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsController],
      providers: [
        {
          provide: ProcessTransactionUseCase,
          useValue: {
            execute: jest.fn().mockResolvedValue({
              id: 1,
              status: 'PENDING',
              shippingAddress: '123 Main St',
              totalAmount: 100.0,
            }),
          },
        },
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/transactions (POST)', async () => {
    const dto = {
      cardNumber: '4111111111111111',
      namePerson: 'John Doe',
      expiryDate: '12/25',
      cvv: 123,
      shippingAddress: '123 Main St',
      productName: 'Product A',
      productPrice: 50.0,
      baseFee: 10.0,
      shippingFee: 40.0,
      totalAmount: 100.0,
      cardType: 'VISA',
    };

    const response = await request(app.getHttpServer())
      .post('/transactions')
      .send(dto);

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      id: 1,
      status: 'PENDING',
      shippingAddress: '123 Main St',
      totalAmount: 100.0,
    });
  });
});
