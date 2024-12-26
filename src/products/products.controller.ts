/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductEntity } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // Ruta para obtener todos los productos
  @Get()
  async findAll(): Promise<ProductEntity[]> {
    return this.productsService.findAll();
  }
}
