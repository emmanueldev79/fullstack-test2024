/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { DeliveriesService } from './deliveries.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto/create-delivery.dto';

describe('DeliveriesService', () => {
  let service: DeliveriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliveriesService],
    }).compile();

    service = module.get<DeliveriesService>(DeliveriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new delivery', () => {
    const createDeliveryDto: CreateDeliveryDto = {
      address: '123 Main St',
      recipientName: 'John Doe',
      deliveryDate: new Date(),
      // product: 'Product A',
      // transactionId: 1,
      status: 'PENDING',
    };

    const newDelivery = service.create(createDeliveryDto);

    expect(newDelivery).toBeDefined();
    expect(newDelivery.id).toBe(1); // Primer ítem debe tener id = 1
    expect(newDelivery.address).toBe(createDeliveryDto.address);
    expect(newDelivery.recipientName).toBe(createDeliveryDto.recipientName);
    expect(newDelivery.deliveryDate).toBe(createDeliveryDto.deliveryDate);
    // expect(newDelivery.product).toBe(createDeliveryDto.product);
    // expect(newDelivery.transactionId).toBe(createDeliveryDto.transactionId);
    expect(newDelivery.status).toBe(createDeliveryDto.status);
  });

  it('should create multiple deliveries', () => {
    const createDeliveryDto1: CreateDeliveryDto = {
      address: '123 Main St',
      recipientName: 'John Doe',
      deliveryDate: new Date(),
      // product: 'Product A',
      // transactionId: 1,
      status: 'PENDING',
    };

    const createDeliveryDto2: CreateDeliveryDto = {
      address: '456 Elm St',
      recipientName: 'Jane Doe',
      deliveryDate: new Date(),
      // product: 'Product B',
      // transactionId: 2,
      status: 'PENDING',
    };

    const newDelivery1 = service.create(createDeliveryDto1);
    const newDelivery2 = service.create(createDeliveryDto2);

    expect(newDelivery1.id).toBe(1);
    expect(newDelivery2.id).toBe(2);
    expect(newDelivery1.address).toBe(createDeliveryDto1.address);
    expect(newDelivery2.address).toBe(createDeliveryDto2.address);
  });

  it('should increment the delivery id automatically', () => {
    const createDeliveryDto1: CreateDeliveryDto = {
      address: '123 Main St',
      recipientName: 'John Doe',
      deliveryDate: new Date(),
      // product: 'Product A',
      // transactionId: 1,
      status: 'PENDING',
    };

    const createDeliveryDto2: CreateDeliveryDto = {
      address: '456 Elm St',
      recipientName: 'Jane Doe',
      deliveryDate: new Date(),
      // product: 'Product B',
      // transactionId: 2,
      status: 'PENDING',
    };

    service.create(createDeliveryDto1);
    service.create(createDeliveryDto2);

    expect(service['deliveries'].length).toBe(2); // Debe haber dos entregas
    expect(service['deliveries'][1].id).toBe(2); // La segunda entrega debe tener id = 2
  });
});
