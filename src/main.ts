/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Permitir cualquier cliente
    methods: 'GET,POST,PUT,DELETE',
    credentials: false, // Cambiar a true si necesitas enviar cookies o encabezados de autenticación
  });
  await app.listen(3000);
}
bootstrap();
