/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module'; // Importa el módulo de productos
import { ProductEntity } from './products/product.entity'; // Importa la entidad de productos
import { TransactionsModule } from './transactions/transactions.module';
import { WompiModule } from './wompi/wompi.module';
import { Transaction } from './transactions/transactions.entity';
import { DeliveriesModule } from './deliveries/deliveries.module';
import { Delivery } from './deliveries/deliveries.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database-1.c3m6s8m6qwul.us-east-2.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'Emmanuel242006*',
      database: 'database-1',
      entities: [ProductEntity, Transaction, Delivery], // Asegúrate de pasar la entidad correcta aquí
      // synchronize: true, // Esto hará que se sincronicen las entidades con la base de datos
    }),
    ProductsModule,
    TransactionsModule,
    WompiModule,
    DeliveriesModule, // Asegúrate de que ProductsModule esté importado aquí
  ],
})
export class AppModule {}
