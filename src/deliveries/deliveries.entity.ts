/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  recipientName: string;

  @Column({ type: 'timestamp' }) // O 'date' según tus necesidades
  deliveryDate: Date;

  @Column()
  product: string;

  @Column()
  transactionId: number;

  @Column()
  status: string;
}
