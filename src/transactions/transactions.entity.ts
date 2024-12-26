/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cardNumber: string;

  @Column()
  expiryDate: string;

  @Column()
  cvv: number;

  @Column()
  shippingAddress: string;

  @Column()
  productName: string;

  @Column('decimal', { precision: 10, scale: 2 })
  productPrice: number;

  @Column('decimal', { precision: 10, scale: 2 })
  baseFee: number;

  @Column('decimal', { precision: 10, scale: 2 })
  shippingFee: number;

  @Column('decimal', { precision: 10, scale: 2 })
  totalAmount: number;

  @Column()
  cardType: string;

  @Column()
  status: string;
}
