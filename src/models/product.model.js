export const P_COLLECTION = "products"; // Nombre de la colección de productos en Firestore

export const cleanProduct = (productData) => { // Este es el modelo de datos para un producto
    return {
        product_id: productData.product_id || "",
        name: productData.name || "Producto sin nombre",
        description: productData.description || "Producto sin descripción",
        price: typeof productData.price === "number" ? productData.price : 0,
        inStock: typeof productData.inStock === "boolean" ? productData.inStock : true,
    }
}