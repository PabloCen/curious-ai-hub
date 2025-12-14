# Autenticación Curioso AI Hub

Este repositorio contiene la implementación completa del sistema de autenticación para Curioso AI Hub, utilizando el stack MERN (MongoDB, Express, React, Node.js).

## Backend Setup

El backend se encuentra en la carpeta `/server`.

### 1. Instalación

```bash
cd server
npm install
```

### 2. Dependencias

El backend utiliza las siguientes librerías principales:
- **express**: Framework web para Node.js.
- **mongoose**: ODM para MongoDB.
- **bcryptjs**: Para hashear contraseñas de forma segura.
- **jsonwebtoken (JWT)**: Para manejo de sesiones stateless.
- **cookie-parser**: Para leer la cookie httpOnly que contiene el JWT.
- **cors**: Para permitir peticiones desde el frontend (puerto 3000).
- **dotenv**: Para variables de entorno.

### 3. Base de Datos (MongoDB)

Para correr el proyecto localmente, necesitas una instancia de MongoDB.

**Opción A: MongoDB Local**
Instala MongoDB Community Server y asegúrate de que esté corriendo en el puerto 27017.
URI: `mongodb://localhost:27017/curioso-ai-hub`

**Opción B: MongoDB Atlas (Nube)**
1. Crea una cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Crea un Cluster gratuito.
3. En "Network Access", permite acceso desde cualquier IP (`0.0.0.0/0`) o tu IP actual.
4. Obtén la Connection String y pégala en `server/.env`.

### 4. Variables de Entorno

Crea un archivo `.env` en la carpeta `/server` con el siguiente contenido:

```env
MONGO_URI=mongodb://localhost:27017/curioso-ai-hub
JWT_SECRET=tu_secreto_super_seguro
PORT=5000
CLIENT_URL=http://localhost:3000
NODE_ENV=development
```

### 5. Correr el servidor

```bash
npm run dev
# El servidor correrá en http://localhost:5000
```

## API Endpoints

| Método | Endpoint | Descripción | Acceso |
|--------|----------|-------------|--------|
| POST | `/api/auth/register` | Crea un nuevo usuario. Recibe JSON con `nombre, apellido, username, email, password`. | Público |
| POST | `/api/auth/login` | Inicia sesión. Recibe `emailOrUsername, password`. Devuelve usuario y setea cookie JWT. | Público |
| POST | `/api/auth/logout` | Cierra sesión. Limpia la cookie JWT. | Público |
| GET | `/api/auth/verify` | Verifica si el usuario está logueado leyendo la cookie. Devuelve info del usuario. | Privado (Cookie) |

## Testing

Puedes probar el flujo completo utilizando Postman o directamente desde el Frontend una vez integrado.

**Prueba con Postman:**
1. **Register**: POST a `/api/auth/register` con body JSON.
2. **Login**: POST a `/api/auth/login`. Verifica que la respuesta tenga status 200 y set-cookie header.
3. **Verify**: GET a `/api/auth/verify`. Asegúrate de que Postman envíe cookies automáticamente.
