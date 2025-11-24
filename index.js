import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {productsRouter} from "./src/routes/products.routes.js"; // Rutas de productos
import { corsConfig } from "./src/utils/cors.config.js"; // Configuración personalizada para CORS
import { authRouter } from "./src/routes/auth.routes.js"; // Rutas de autenticación

const app = express(); // Crea una instancia de la aplicación Express
const PORT = process.env.PORT || 3000; // Puerto en el que se ejecuta el servidor

app.use(cors(corsConfig)); // Middleware para habilitar CORS con configuración personalizada

app.use(bodyParser.json()); // Middleware para parsear JSON


app.use("/auth", authRouter); // Rutas de autenticación

app.use("/api/products", productsRouter); // Rutas de productos


app.use((req, res, next) => { // Middleware para manejar rutas no encontradas
  res.status(404).json ({
    status: "Error",
    message: "Ruta no encontrada"
  });
});

app.listen(PORT, () => {
  console.log(`Server corriendo en puerto ${PORT}`);
});
