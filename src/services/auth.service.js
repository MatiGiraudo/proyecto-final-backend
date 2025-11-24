import { generateToken } from "../utils/jwt.js"; // Importar la función para generar tokens JWT
import { cleanUser } from "../models/user.model.js"; // Importar el modelo de usuario

const usersDB = [ // Simulación de base de datos en memoria
  {
    user_id: "1",
    email: "admin@admin.com",
    password: "password123",
    name: "Admin",
    role: "admin",
  },
];

export const registerUser = async (userData) => { // Simulación de registro de usuario
  const existingUser = usersDB.find((user) => user.email === userData.email);
  if (existingUser) {
    throw new Error("El usuario ya existe");
  }
  const newUser = cleanUser(userData); // Recibir los datos limpios del usuario
  newUser.user_id = (usersDB.length + 1).toString();// Asignar un ID simple
  newUser.password = userData.password; // En un caso real, la contraseña debería ser almacenada de forma segura
  usersDB.push(newUser); // Guardar en la "base de datos"
  return newUser;
};

export const loginUser = async (email, password) => { // Simulación de login de usuario
  const user = usersDB.find( 
    (user) => user.email === email && user.password === password // Verificación simple de credenciales
  );
  if (!user) {
    throw new Error("Credenciales inválidas"); // Error si no se encuentra el usuario
  }
  const token = generateToken({ // Generar token JWT
    user_id: user.user_id,
    email: user.email,
    role: user.role,
  });
  return token;
};
