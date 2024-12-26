/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, IsCreditCard } from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsCreditCard()
  cardNumber: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  expiryDate: string;

  @IsNotEmpty()
  @IsNumber()
  cvv: number;

  @IsNotEmpty()
  @IsString()
  shippingAddress: string;

  @IsNotEmpty()
  @IsString()
  productName: string;

  @IsNotEmpty()
  @IsNumber()
  productPrice: number;

  @IsNotEmpty()
  @IsNumber()
  baseFee: number;

  @IsNotEmpty()
  @IsNumber()
  shippingFee: number;

  @IsNotEmpty()
  @IsNumber()
  totalAmount: number;

  @IsNotEmpty()
  @IsString()
  cardType: string;
}
