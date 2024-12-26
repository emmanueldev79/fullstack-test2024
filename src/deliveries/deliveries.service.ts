/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto/create-delivery.dto';

@Injectable()
export class DeliveriesService {
  private deliveries = []; // Aquí simula una base de datos

  create(createDeliveryDto: CreateDeliveryDto) {
    const newDelivery = {
      id: this.deliveries.length + 1,
      ...createDeliveryDto,
    };
    this.deliveries.push(newDelivery);
    return newDelivery;
  }
}
