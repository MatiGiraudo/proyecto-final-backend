import * as productsService from "../services/products.services.js"; // Importa todas las funciones del servicio de productos

export const getAllProductsController = async (req, res) => { // Controlador para obtener todos los productos
  try {
    const products = await productsService.getAllProducts(); // Llama al servicio para obtener todos los productos
    res.status(200).json({ status: "Exitoso", data: products }); // Responde con la lista de productos
  } catch (error) {
    res.status(500).json({ status: "Error", message: error.message }); // Manejo de errores en la obtención de productos
  }
};

export const getProductByIdController = async (req, res) => { // Controlador para obtener un producto por ID
  try {
    const { id } = req.params;
    const product = await productsService.getProductById(id); // Llama al servicio para obtener el producto por ID
    res.status(200).json({ status: "Exitoso", data: product }); // Responde con el producto
  } catch (error) {
    res.status(404).json({ status: "Error", message: error.message }); // Manejo de errores si el producto no se encuentra
  }
};

export const createProductController = async (req, res) => { // Controlador para crear un nuevo producto
  try {
    const { body } = req; // Obtener el cuerpo de la solicitud
    const newProduct = await productsService.createProduct(body); // Llama al servicio para crear un nuevo producto
    res.status(201).json({ status: "Exitoso", data: newProduct }); // Responde con el nuevo producto creado
  } catch (error) {
    res.status(500).json({ status: "Error", message: error.message }); // Manejo de errores en la creación de producto
  }
};

export const deleteProductController = async (req, res) => { // Controlador para eliminar un producto por ID
  try {
    const { id } = req.params; // Obtener el ID del producto a eliminar
    await productsService.deleteProduct(id); // Llama al servicio para eliminar el producto
    res.status(200).json({ status: "Exitoso", message: "Producto eliminado: " + id }); // Responde con confirmación de eliminación
  } catch (error) {
    res.status(500).json({ status: "Error", message: error.message }); // Manejo de errores en la eliminación de producto
  }
};
