# Barberia API

API REST desarrollada con Node.js, Express y MongoDB para la gestión de una barbería.

## Descripción

Este proyecto permite administrar los principales procesos de una barbería mediante una API REST segura utilizando autenticación con JSON Web Token (JWT).

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- dotenv
- Cors

## Instalación

1. Clonar el repositorio.

```bash
git clone https://github.com/crisgon0624/Barberia-api.git
```

2. Instalar dependencias.

```bash
npm install
```

3. Configurar las variables de entorno.

Crear un archivo `.env` con la siguiente información:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/barberia
JWT_SECRET=tu_clave_secreta
```

4. Ejecutar el proyecto.

```bash
npm run dev
```

## Estructura del proyecto

```
barberia-api
│
├── config
├── controllers
├── middleware
├── models
├── routes
├── .env
├── app.js
├── server.js
├── package.json
└── README.md
```

## Funcionalidades implementadas

- Registro de usuarios
- Inicio de sesión
- Encriptación de contraseñas
- Generación de Token JWT

## Funcionalidades pendientes

- Protección de rutas
- CRUD de Clientes
- CRUD de Barberos
- CRUD de Servicios
- CRUD de Citas
- Pruebas finales

## Autor

Cristian Yanir González Banguero
Programa ADSO - SENA