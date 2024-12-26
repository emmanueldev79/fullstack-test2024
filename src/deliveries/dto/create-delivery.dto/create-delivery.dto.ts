/* eslint-disable prettier/prettier */
export class CreateDeliveryDto {
  readonly address: string;
  readonly deliveryDate: Date;
  readonly recipientName: string;
  readonly status: string; // Ejemplo: 'pending', 'in transit', 'delivered'
}
