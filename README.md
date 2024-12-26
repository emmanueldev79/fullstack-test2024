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
- Codigo del frontend (https://github.com/emmanueldev79/frontendtest)
- Backend y base de datos alojados en **Railway**.

---

## Resultados de las Pruebas Backend

Para el backend, se realizaron pruebas automatizadas con **Jest** para verificar su correcto funcionamiento. Los resultados obtenidos son los siguientes:

PASS src/deliveries/deliveries.service.spec.ts (18.578 s)
● Console

    console.log

      ✘ nest.js v10.4.9 is not yet supported in the Community edition of Console Ninja.
      We are working hard on it for you https://tinyurl.com/3h9mtwra.

      Estimated release dates:
        - Community users: around 8th February, 2025 (subject to team availability)
        - PRO users:       priority access is available now

      at i8._invalidToolVersionForCommunity (../../../../../../../../.vscode/extensions/wallabyjs.console-ninja-1.0.376/out/buildHook/index.js:1:4160694)

FAIL src/deliveries/deliveries.controller.spec.ts (21.042 s)
● Console

    console.log

      ✘ nest.js v10.4.9 is not yet supported in the Community edition of Console Ninja.
      We are working hard on it for you https://tinyurl.com/3h9mtwra.

      Estimated release dates:
        - Community users: around 8th February, 2025 (subject to team availability)
        - PRO users:       priority access is available now

      at i8._invalidToolVersionForCommunity (../../../../../../../../.vscode/extensions/wallabyjs.console-ninja-1.0.376/out/buildHook/index.js:1:4160694)

● DeliveriesController (e2e) › /deliveries (POST)

    expect(received).toEqual(expected) // deep equality

    - Expected  - 1
    + Received  + 1

    @@ -1,8 +1,8 @@
      Object {
        "address": "123 Main St",
    -   "deliveryDate": 2024-12-26T22:03:11.909Z,
    +   "deliveryDate": "2024-12-26T22:03:11.909Z",
        "id": 1,
        "product": "Product A",
        "recipientName": "John Doe",
        "status": "PENDING",
        "transactionId": 1,

      55 |
      56 |     expect(response.status).toBe(201);
    > 57 |     expect(response.body).toEqual(mockDelivery);
         |                           ^
      58 |     expect(deliveriesService.create).toHaveBeenCalledWith(createDeliveryDto);
      59 |   });
      60 | });

      at Object.<anonymous> (deliveries/deliveries.controller.spec.ts:57:27)

PASS src/products/products.controller.spec.ts (22.315 s)
● Console

    console.log

      ✘ nest.js v10.4.9 is not yet supported in the Community edition of Console Ninja.
      We are working hard on it for you https://tinyurl.com/3h9mtwra.

      Estimated release dates:
        - Community users: around 8th February, 2025 (subject to team availability)
        - PRO users:       priority access is available now

      at i8._invalidToolVersionForCommunity (../../../../../../../../.vscode/extensions/wallabyjs.console-ninja-1.0.376/out/buildHook/index.js:1:4160694)

PASS src/products/products.service.spec.ts (22.541 s)
● Console

    console.log

      ✘ nest.js v10.4.9 is not yet supported in the Community edition of Console Ninja.
      We are working hard on it for you https://tinyurl.com/3h9mtwra.

      Estimated release dates:
        - Community users: around 8th February, 2025 (subject to team availability)
        - PRO users:       priority access is available now

      at i8._invalidToolVersionForCommunity (../../../../../../../../.vscode/extensions/wallabyjs.console-ninja-1.0.376/out/buildHook/index.js:1:4160694)

PASS src/wompi/wompi.service.spec.ts (25.308 s)
● Console

    console.log

      ✘ nest.js v10.4.9 is not yet supported in the Community edition of Console Ninja.
      We are working hard on it for you https://tinyurl.com/3h9mtwra.

      Estimated release dates:
        - Community users: around 8th February, 2025 (subject to team availability)
        - PRO users:       priority access is available now

      at i8._invalidToolVersionForCommunity (../../../../../../../../.vscode/extensions/wallabyjs.console-ninja-1.0.376/out/buildHook/index.js:1:4160694)

FAIL src/transactions/use-cases/process-transaction.usecase.spec.ts (30.038 s)
● Console

    console.log

      ✘ nest.js v10.4.9 is not yet supported in the Community edition of Console Ninja.
      We are working hard on it for you https://tinyurl.com/3h9mtwra.

      Estimated release dates:
        - Community users: around 8th February, 2025 (subject to team availability)
        - PRO users:       priority access is available now

      at i8._invalidToolVersionForCommunity (../../../../../../../../.vscode/extensions/wallabyjs.console-ninja-1.0.376/out/buildHook/index.js:1:4160694)

● ProcessTransactionUseCase › debe procesar la transacción correctamente

    expect(jest.fn()).toHaveBeenCalledWith(...expected)

    Expected: {"baseFee": 5, "cardNumber": "4111111111111111", "cardType": "VISA", "cvv": 123, "expiryDate": "12/25", "name": "John Doe", "productName": "Product A", "productPrice": 50, "shippingAddress": "123 Main St", "shippingFee": 10, "totalAmount": 65}
    Received: "4111111111111111", 123, "12/25", "123 Main St", 65

    Number of calls: 1

      148 |     });
      149 |     expect(deliveryRepository.save).toHaveBeenCalledWith(delivery);
    > 150 |     expect(wompiService.createPaymentSession).toHaveBeenCalledWith({
          |                                               ^
      151 |       cardNumber: '4111111111111111',
      152 |       name: 'John Doe',
      153 |       expiryDate: '12/25',

      at Object.<anonymous> (transactions/use-cases/process-transaction.usecase.spec.ts:150:47)

● ProcessTransactionUseCase › debe lanzar un error si el producto no tiene suficiente stock

    expect(received).rejects.toThrowError(expected)

    Expected substring: "Product out of stock"
    Received message:   "Cannot read properties of undefined (reading 'create')"

          at Repository.create (src/repository/Repository.ts:129:29)
          at ProcessTransactionUseCase.execute (src/transactions/use-cases/process-transaction.usecase.ts:32:55)
          at Object.<anonymous> (src/transactions/use-cases/process-transaction.usecase.spec.ts:191:5)

      189 |     jest.spyOn(productRepository, 'findOne').mockResolvedValue(product);
      190 |
    > 191 |     await expect(useCase.execute(createTransactionDto)).rejects.toThrowError(
          |                                                                 ^
      192 |       'Product out of stock',
      193 |     );
      194 |   });

      at Object.toThrowError (../node_modules/expect/build/index.js:218:22)
      at Object.<anonymous> (transactions/use-cases/process-transaction.usecase.spec.ts:191:65)

PASS src/transactions/transactions.controller.spec.ts (31.865 s)
● Console

    console.log

      ✘ nest.js v10.4.9 is not yet supported in the Community edition of Console Ninja.
      We are working hard on it for you https://tinyurl.com/3h9mtwra.

      Estimated release dates:
        - Community users: around 8th February, 2025 (subject to team availability)
        - PRO users:       priority access is available now

      at i8._invalidToolVersionForCommunity (../../../../../../../../.vscode/extensions/wallabyjs.console-ninja-1.0.376/out/buildHook/index.js:1:4160694)

Test Suites: 2 failed, 5 passed, 7 total
Tests: 3 failed, 10 passed, 13 total
Snapshots: 0 total
Time: 33.718 s

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
