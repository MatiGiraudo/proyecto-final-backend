import { Router } from "express";
import * as productsController from "../controllers/products.controller.js"; // Importa todos los controladores de productos
import { authToken } from "../utils/jwt.js"; // Middleware para verificar el token JWT

export const productsRouter = Router(); // Router para las rutas de productos

productsRouter.get("/", productsController.getAllProductsController); // Ruta para obtener todos los productos

productsRouter.get("/:id", productsController.getProductByIdController); // Ruta para obtener un producto por ID

productsRouter.post("/create", authToken, productsController.createProductController); // Ruta para crear un nuevo producto (requiere autenticación)
productsRouter.delete("/:id", authToken, productsController.deleteProductController); // Ruta para eliminar un producto por ID (requiere autenticación)