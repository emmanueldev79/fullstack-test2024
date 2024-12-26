<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  <strong>Prueba para Fullstack Developer</strong>
</p>

---

## Descripción del Proyecto

Esta prueba técnica implementa una solución completa Fullstack con las siguientes tecnologías:

- **Frontend**: React, Redux, y CSS nativo.
- **Backend**: NestJS, PostgreSQL, y TypeORM.

### Despliegue:

- El **Frontend** se desplegó en [Netlify](https://glistening-taiyaki-685840.netlify.app/).
- El **Backend** y la base de datos se desplegaron en **Railway**.

A continuación, puedes encontrar los enlaces relevantes para este proyecto:

- [Frontend desplegado](https://glistening-taiyaki-685840.netlify.app/)
- [Repositorio del Backend](https://github.com/tu-usuario/nombre-repositorio)

---

## Resultados de las Pruebas Backend

Se utilizaron pruebas automatizadas con Jest para garantizar la funcionalidad del backend. A continuación, se presentan los resultados:

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

### Fallos Destacados:

1. Problemas de formato en los valores esperados y recibidos.
2. Falla al simular la creación de sesiones de pago debido a inconsistencias en los datos enviados.
3. Error al manejar correctamente productos sin stock.

Se seguirá trabajando en estos casos para garantizar un 100% de cobertura y funcionalidad.

---

## Consideraciones

1. La API de pagos fue utilizada en modo sandbox, lo que permitió realizar transacciones únicamente con tarjetas de prueba.
2. Debido a inconvenientes con mi cuenta de AWS, decidí desplegar el frontend en **Netlify** y el backend en **Railway**.

---

## Autor

- **Nombre**: Emmanuel Montoya López
- **LinkedIn**: [Perfil](https://www.linkedin.com/in/emmanuel-montoya/)
- **Website**: [NestJS](https://nestjs.com/)

---

## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).
