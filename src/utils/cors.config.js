export const corsConfig = { // Configuración personalizada para CORS
  origin: "*",
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  exposedHeaders: ["Content-Length"],
  credentials: true,
  maxAge: 600,
  optionsSuccessStatus: 200,
};