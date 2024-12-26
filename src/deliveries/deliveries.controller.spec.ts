/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { DeliveriesController } from './deliveries.controller';
import { DeliveriesService } from './deliveries.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto/create-delivery.dto';
import { Delivery } from './deliveries.entity';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

describe('DeliveriesController (e2e)', () => {
  let app: INestApplication;
  let deliveriesService: DeliveriesService;

  const mockDelivery: Delivery = {
    id: 1,
    address: '123 Main St',
    recipientName: 'John Doe',
    deliveryDate: new Date(),
    product: 'Product A',
    transactionId: 1,
    status: 'PENDING',
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [DeliveriesController],
      providers: [
        {
          provide: DeliveriesService,
          useValue: {
            create: jest.fn().mockResolvedValue(mockDelivery),
          },
        },
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    deliveriesService = moduleFixture.get<DeliveriesService>(DeliveriesService);
  });

  it('/deliveries (POST)', async () => {
    const createDeliveryDto: CreateDeliveryDto = {
      address: '123 Main St',
      recipientName: 'John Doe',
      deliveryDate: new Date(),
      // product: 'Product A',
      // transactionId: 1,
      status: 'PENDING',
    };

    const response = await request(app.getHttpServer())
      .post('/deliveries')
      .send(createDeliveryDto);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(mockDelivery);
    expect(deliveriesService.create).toHaveBeenCalledWith(createDeliveryDto);
  });
});
