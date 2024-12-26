<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
  </a>
</p>

<h1 align="center">Prueba para Fullstack Developer</h1>

---

## Descripción del Proyecto

Este proyecto consiste en una solución Fullstack desarrollada como parte de una prueba técnica. Combina un frontend moderno con un backend robusto para ofrecer funcionalidades completas, destacándose el uso de herramientas de última generación.

### Tecnologías Utilizadas

- **Frontend**: React, Redux, y CSS nativo.
- **Backend**: NestJS, PostgreSQL, y TypeORM.

### Despliegue

El proyecto está completamente desplegado en las siguientes plataformas:

- [Frontend en Netlify](https://glistening-taiyaki-685840.netlify.app/)
- Backend y base de datos alojados en **Railway**.

---

## Resultados de las Pruebas Backend

Para el backend, se realizaron pruebas automatizadas con **Jest** para verificar su correcto funcionamiento. Los resultados obtenidos son los siguientes:

### Servicios Probados

- **deliveries.service.spec.ts**: ✅ Pasó.
- **products.service.spec.ts**: ✅ Pasó.
- **wompi.service.spec.ts**: ✅ Pasó.

### Controladores Probados

- **deliveries.controller.spec.ts**: ❌ Falló.
- **products.controller.spec.ts**: ✅ Pasó.
- **transactions.controller.spec.ts**: ✅ Pasó.

### Casos de Uso Probados

- **process-transaction.usecase.spec.ts**: ❌ Falló.

### Principales Problemas Identificados

1. **Errores de Formato**: Discrepancias entre los valores esperados y los recibidos.
2. **Simulación de Sesiones de Pago**: Inconsistencias en los datos enviados durante las simulaciones.
3. **Manejo de Productos sin Stock**: Fallos en la lógica para gestionar inventarios agotados.

Se continuará trabajando para resolver estos problemas y garantizar una cobertura completa de pruebas.

---

## Resultados de las Pruebas Frontend

Por motivos de tiempo, no se realizaron pruebas en la UI/UX.

---

## Consideraciones

1. La API de pagos fue configurada en **modo sandbox**, permitiendo únicamente transacciones con tarjetas de prueba.
2. Debido a limitaciones con mi cuenta de AWS, el **frontend** fue desplegado en **Netlify** y el **backend** en **Railway**.
3. Datos para consumir el endpoint de transacciones:

### Endpoint de Transacciones

**URL:** `https://fullstack-test2024-production.up.railway.app/transactions`  
**Método:** `POST`  
**Headers:**

```json
{
  "Content-Type": "application/json"
}
{
  "cardNumber": "4111111111111111",
  "name": "John Doe",
  "expiryDate": "12/26",
  "cvv": 123,
  "shippingAddress": "123 Main St, Springfield",
  "productName": "Laptop",
  "productPrice": 1000.00,
  "baseFee": 50.00,
  "shippingFee": 25.00,
  "totalAmount": 1075.00,
  "cardType": "Visa"
}
```
