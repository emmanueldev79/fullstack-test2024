/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { ProductEntity } from './product.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('ProductsService', () => {
  let service: ProductsService;
  let repository: Repository<ProductEntity>;

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
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(ProductEntity),
          useValue: {
            find: jest.fn().mockResolvedValue(mockProducts),
          },
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    repository = module.get<Repository<ProductEntity>>(
      getRepositoryToken(ProductEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all products', async () => {
    const result = await service.findAll();
    expect(result).toEqual(mockProducts);
    expect(repository.find).toHaveBeenCalled();
  });
});
