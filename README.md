# API de Gestión de Productos - Proyecto Final

API RESTful desarrollada con Node.js y Express para la gestión de productos con autenticación JWT y almacenamiento en Firebase Firestore.

## 📋 Descripción

Esta API proporciona endpoints para realizar operaciones CRUD sobre productos y cuenta con un sistema de autenticación basado en JWT para proteger las rutas sensibles.

## 🚀 Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución
- **Express** - Framework web
- **Firebase Firestore** - Base de datos NoSQL en la nube
- **JWT (jsonwebtoken)** - Autenticación y autorización
- **CORS** - Manejo de peticiones de origen cruzado
- **Body-parser** - Procesamiento de datos JSON
- **dotenv** - Gestión de variables de entorno

## 📁 Estructura del Proyecto

```
proyecto-final/
├── src/
│   ├── controllers/      # Controladores de las rutas
│   │   ├── auth.controller.js
│   │   └── products.controller.js
│   ├── services/         # Lógica de negocio
│   │   ├── auth.service.js
│   │   └── products.services.js
│   ├── models/          # Modelos de datos
│   │   ├── product.model.js
│   │   └── user.model.js
│   ├── routes/          # Definición de rutas
│   │   ├── auth.routes.js
│   │   └── products.routes.js
│   └── utils/           # Utilidades y configuraciones
│       ├── cors.config.js
│       ├── firebase.config.js
│       └── jwt.js
├── .env                 # Variables de entorno
├── .gitignore
├── index.js            # Punto de entrada de la aplicación
├── package.json
└── README.md
```

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd proyecto-final
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno creando un archivo `.env`:
```env
PORT=3000
ORIGIN=http://localhost:3000

JWT_SECRET=tu_clave_secreta_para_jwt

FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_auth_domain
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_STORAGE_BUCKET=tu_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
FIREBASE_APP_ID=tu_app_id
```

4. Inicia el servidor:
```bash
npm start
```

El servidor estará corriendo en `http://localhost:3000`

## 📡 Endpoints de la API

### Autenticación

#### Registro de Usuario
```http
POST /auth/register
Content-Type: application/json

{
  "email": "usuario@example.com",
  "password": "contraseña",
  "name": "Nombre Usuario",
  "role": "user"
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "usuario@example.com",
  "password": "contraseña"
}
```

**Respuesta:**
```json
{
  "status": "Exitoso",
  "message": "Login exitoso",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### Productos

#### Obtener Todos los Productos
```http
GET /api/products
```

#### Obtener Producto por ID
```http
GET /api/products/:id
```

#### Crear Producto (Requiere autenticación)
```http
POST /api/products/create
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Producto",
  "description": "Descripción del producto",
  "price": 99.99,
  "stock": 10
}
```

#### Eliminar Producto (Requiere autenticación)
```http
DELETE /api/products/:id
Authorization: Bearer <token>
```

## 🔐 Autenticación

Las rutas protegidas requieren un token JWT en el header de autorización:

```
Authorization: Bearer <tu_token_jwt>
```

Para obtener un token, primero debes hacer login con credenciales válidas.

### Usuario de Prueba

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

## 🛡️ Rutas Protegidas

Las siguientes rutas requieren autenticación:
- `POST /api/products/create` - Crear producto
- `DELETE /api/products/:id` - Eliminar producto

## 📦 Base de Datos

El proyecto utiliza **Firebase Firestore** como base de datos NoSQL. Asegúrate de:

1. Crear un proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Habilitar Firestore Database
3. Crear una colección llamada `products`
4. Configurar las reglas de seguridad de Firestore según tus necesidades

## ⚙️ Variables de Entorno

| Variable | Descripción |
|----------|-------------|
| `PORT` | Puerto del servidor (default: 3000) |
| `ORIGIN` | Origen permitido para CORS |
| `JWT_SECRET` | Clave secreta para firmar tokens JWT |
| `FIREBASE_API_KEY` | API Key de Firebase |
| `FIREBASE_AUTH_DOMAIN` | Auth Domain de Firebase |
| `FIREBASE_PROJECT_ID` | ID del proyecto Firebase |
| `FIREBASE_STORAGE_BUCKET` | Storage Bucket de Firebase |
| `FIREBASE_MESSAGING_SENDER_ID` | Sender ID de Firebase |
| `FIREBASE_APP_ID` | App ID de Firebase |

## 🚦 Estados de Respuesta

- `200` - OK
- `201` - Creado
- `401` - No autorizado
- `403` - Token inválido
- `404` - No encontrado
- `500` - Error del servidor

## 📝 Formato de Respuestas

Todas las respuestas siguen el siguiente formato:

```json
{
  "status": "Exitoso | Error",
  "message": "Mensaje descriptivo",
  "data": { ... }
}
```

## 📄 Licencia

ISC

## ✨ Autor
Giraudo Matías
Proyecto Final - Backend - TalentoTech 2025
