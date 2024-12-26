/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductEntity } from './product.entity';

describe('ProductsController', () => {
  let controller: ProductsController;
  let service: ProductsService;

  const mockProducts: ProductEntity[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      stock: 10,
      description: 'Description of Product 1',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      stock: 5,
      description: 'Description of Product 2',
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(mockProducts),
          },
        },
      ],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all products', async () => {
    const result = await controller.findAll();
    expect(result).toEqual(mockProducts);
    expect(service.findAll).toHaveBeenCalled();
  });
});
