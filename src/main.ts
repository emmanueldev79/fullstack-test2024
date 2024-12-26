/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://reliable-pudding-fd454a.netlify.app/', // Cambia esto al puerto o dominio de tu frontend
    methods: 'GET,POST,PUT,DELETE',
    credentials: true, // Si necesitas enviar cookies o encabezados de autenticación
  });
  await app.listen(3000);
}
bootstrap();
