import express from 'express';
import { loginController, registerController } from '../controllers/auth.controller.js'; // Importar los controladores de autenticación

const authRouter = express.Router(); // Router para autenticación

authRouter.post('/login', loginController); // Ruta para login
authRouter.post('/register', registerController); // Ruta para registro

export { authRouter };