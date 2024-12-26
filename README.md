<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Test fullstack developer</p>
    <p align="center">

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descripcion

Se realizo la prueba usando al 100% la documentacion, se hizo el frontend con react y algo de redux, css nativo. Se implemento el backend con nestjs y postgre con un typeorm.
El frontend se desplego en netlify debido a inconenientes con mi cuenta de aws, por otro lado el backend y base de datos se desplegaron alli mismo. A continuacion dejo los links

link frontend (https://glistening-taiyaki-685840.netlify.app/)
<a href="https://glistening-taiyaki-685840.netlify.app/" target="_blank">Frontend</a>

link gitHub Backend (https://glistening-taiyaki-685840.netlify.app/)
<a href="https://github.com/emmanueldev79/fullstack-test2024/" target="_blank">Backend</a>

## Resultados pruebas backend con jest

PASS src/deliveries/deliveries.service.spec.ts (20.818 s)
● Console

    console.log

      ✘ nest.js v10.4.9 is not yet supported in the Community edition of Console Ninja.
      We are working hard on it for you https://tinyurl.com/3h9mtwra.

      Estimated release dates:
        - Community users: around 8th February, 2025 (subject to team availability)
        - PRO users:       priority access is available now

      at i8._invalidToolVersionForCommunity (../../../../../../../../.vscode/extensions/wallabyjs.console-ninja-1.0.376/out/buildHook/index.js:1:4160694)

FAIL src/deliveries/deliveries.controller.spec.ts (23.3 s)
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
    -   "deliveryDate": 2024-12-26T21:30:38.898Z,
    +   "deliveryDate": "2024-12-26T21:30:38.898Z",
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

PASS src/products/products.service.spec.ts (24.649 s)
● Console

    console.log

      ✘ nest.js v10.4.9 is not yet supported in the Community edition of Console Ninja.
      We are working hard on it for you https://tinyurl.com/3h9mtwra.

      Estimated release dates:
        - Community users: around 8th February, 2025 (subject to team availability)
        - PRO users:       priority access is available now

      at i8._invalidToolVersionForCommunity (../../../../../../../../.vscode/extensions/wallabyjs.console-ninja-1.0.376/out/buildHook/index.js:1:4160694)

PASS src/products/products.controller.spec.ts (24.659 s)
● Console

    console.log

      ✘ nest.js v10.4.9 is not yet supported in the Community edition of Console Ninja.
      We are working hard on it for you https://tinyurl.com/3h9mtwra.

      Estimated release dates:
        - Community users: around 8th February, 2025 (subject to team availability)
        - PRO users:       priority access is available now

      at i8._invalidToolVersionForCommunity (../../../../../../../../.vscode/extensions/wallabyjs.console-ninja-1.0.376/out/buildHook/index.js:1:4160694)

PASS src/wompi/wompi.service.spec.ts (26.308 s)
● Console

    console.log

      ✘ nest.js v10.4.9 is not yet supported in the Community edition of Console Ninja.
      We are working hard on it for you https://tinyurl.com/3h9mtwra.

      Estimated release dates:
        - Community users: around 8th February, 2025 (subject to team availability)
        - PRO users:       priority access is available now

      at i8._invalidToolVersionForCommunity (../../../../../../../../.vscode/extensions/wallabyjs.console-ninja-1.0.376/out/buildHook/index.js:1:4160694)

FAIL src/transactions/use-cases/process-transaction.usecase.spec.ts (28.794 s)
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

PASS src/transactions/transactions.controller.spec.ts (30.694 s)
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
Time: 33.488 s, estimated 37 s
Ran all test suites.

## Consideraciones

Use la api proporcionada, pero al tokenizar tarjetas en modo sandbox, solo me funcionaban las tarjetas de prueba y las use para poder llevar a cabo las transacciones

- Author - Emmanuel Montoya López
- Website - [https://nestjs.com](https://nestjs.com/)

## License

Test is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
