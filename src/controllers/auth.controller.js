import * as authService from "../services/auth.service.js"; // Importar los servicios de autenticación

export const registerController = async (req, res) => {
  // Controlador para registrar usuario
  try {
    const { body } = req; // Obtener el cuerpo de la solicitud
    const newUser = await authService.registerUser(body); // Llamar al servicio para registrar usuario
    res.status(201).json({ status: "Exitoso", data: newUser }); // Responder con el nuevo usuario
  } catch (error) {
    res.status(500).json({ status: "Error", message: error.message }); // Manejo de errores
  }
};

export const loginController = async (req, res) => {
  // Controlador para login de usuario
  try {
    const { email, password } = req.body; // Obtener email y contraseña del cuerpo
    const token = await authService.loginUser(email, password); // Llamar al servicio para login
    res.status(200).json({
      status: "Exitoso",
      message: "Login exitoso",
      data: { token },
    }); // Responder con el token JWT
  } catch (error) {
    res.status(401).json({ status: "Error", message: error.message }); // Manejo de errores de autenticación
  }
};
