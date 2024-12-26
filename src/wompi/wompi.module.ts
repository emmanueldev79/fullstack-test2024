import { Module } from '@nestjs/common';
// import { WompiController } from './wompi.controller';
import { WompiService } from './wompi.service';
import { Axios } from 'axios';

@Module({
  imports: [Axios], // Importa el módulo Http para realizar solicitudes HTTP
  // controllers: [WompiController],
  providers: [WompiService],
})
export class WompiModule {}
