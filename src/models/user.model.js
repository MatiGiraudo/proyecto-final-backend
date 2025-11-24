//Este es el modelo de usuario que vamos a solicitar en la capa de servicios

export const cleanUser = (userData) => {
    return {
        user_id: userData.user_id || "",
        email: userData.email || "",
        name: userData.name || "Usuario sin nombre",
        role: userData.role || "user",
    }
}