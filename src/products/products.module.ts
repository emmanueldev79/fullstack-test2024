import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductEntity } from './product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])], // Asegúrate de que la entidad esté aquí
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
