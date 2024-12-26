/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as crypto from 'crypto'; // Usamos el módulo 'crypto' de Node.js para generar el hash
import { v4 as uuidv4 } from 'uuid'; // Asegúrate de instalar 'uuid'

@Injectable()
export class WompiService {
  private readonly WOMPI_API_URL = 'https://api-sandbox.co.uat.wompi.dev/v1/';
  private readonly PUBLIC_KEY = 'pub_stagtest_g2u0HQd3ZMh05hsSgTS2lUV8t3s4mOt7'; // Usar variables de entorno
  private readonly PRIVATE_KEY = process.env.WOMPI_PRIVATE_KEY; // Usar variables de entorno
  private readonly FIRMA_KEY =
    'stagtest_integrity_nAIBuqayW70XpUqJS4qf4STYiISd89Fp';

  // Método para manejar errores
  private handleAxiosError(error: any, message: string): void {
    const errorMessage =
      error.response?.data?.error?.message ||
      error.response?.data ||
      error.message;
    console.error(`${message}:`, errorMessage);
    throw new Error(`${message}: ${errorMessage}`);
  }

  // Método para crear un token de tarjeta
  async createTokenTransaction(): Promise<any> {
    try {
      const body = {
        number: '4242424242424242',
        cvc: '123',
        exp_month: '08',
        exp_year: '28',
        card_holder: 'José Pérez',
      };

      const response = await axios.post(
        `${this.WOMPI_API_URL}tokens/cards`,
        body,
        {
          headers: {
            Authorization: `Bearer ${this.PUBLIC_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      );

      return response.data;
    } catch (error) {
      this.handleAxiosError(error, 'Error al crear el token de tarjeta');
    }
  }

  // Método para obtener el token de aceptación
  async createTokenAcceptance(): Promise<any> {
    try {
      const response = await axios.get(
        `${this.WOMPI_API_URL}merchants/${this.PUBLIC_KEY}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      return response.data;
    } catch (error) {
      this.handleAxiosError(error, 'Error al traer el token de aceptación');
    }
  }

  // Método para crear una sesión de pago
  async createPaymentSession(
    cardNumber: string,
    cvv: number,
    expiryDate: string,
    shippingAddress: string,
    totalAmount: number,
  ): Promise<any> {
    try {
      const tokenResponse = await this.createTokenTransaction();
      const token = tokenResponse?.data?.id;

      const acceptanceTokenResponse = await this.createTokenAcceptance();
      const acceptanceToken =
        acceptanceTokenResponse?.data?.presigned_acceptance?.acceptance_token;
      const accept_personal_auth =
        acceptanceTokenResponse?.data?.presigned_personal_data_auth
          ?.acceptance_token;

      if (!token || !acceptanceToken) {
        throw new Error('No se pudieron obtener los tokens necesarios');
      }

      // Generar una referencia única usando UUID
      const uniqueReference = `REF-${uuidv4()}`;

      const signature = await this.generateHash(
        `${uniqueReference}${totalAmount * 1000}COP${this.FIRMA_KEY}`,
      );

      const body = {
        amount_in_cents: totalAmount * 1000, // Monto en centavos
        reference: uniqueReference, // Referencia de la transacción
        currency: 'COP',
        customer_email: 'emman@gmail.com',
        payment_method: {
          type: 'CARD',
          phone_number: cardNumber,
          installments: '10',
          token: token,
        },
        acceptance_token: acceptanceToken,
        accept_personal_auth: accept_personal_auth,
        signature,
      };

      const response = await axios.post(
        `${this.WOMPI_API_URL}transactions`,
        body,
        {
          headers: {
            Authorization: `Bearer ${this.PUBLIC_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      );

      return response.data;
    } catch (error) {
      this.handleAxiosError(error, 'Error al crear la sesión de pago');
    }
  }

  // Método para generar hash (SHA-256)
  async generateHash(cadena: string): Promise<string> {
    try {
      const hash = crypto.createHash('sha256');
      hash.update(cadena);
      return hash.digest('hex');
    } catch (error) {
      console.error('Error al generar el hash:', error.message);
      throw new Error('Error al generar el hash');
    }
  }
}
