import { db } from "../utils/firebase.config.js"; // Importa la instancia de Firestore
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore"; // Importa funciones de Firestore para operaciones CRUD
import { P_COLLECTION, cleanProduct } from "../models/product.model.js"; // Importa constantes y funciones del modelo de producto

export const getAllProducts = async () => { // Servicio para obtener todos los productos
  const productsCol = collection(db, P_COLLECTION); // Referencia a la colección de productos
  const productsSnap = await getDocs(productsCol); // Obtiene todos los documentos de la colección
  const productsList = productsSnap.docs.map((doc) => ({ // Mapea los documentos a un arreglo de productos
    id: doc.id,
    ...doc.data(),
  })); 
  return productsList;
};

export const getProductById = async (id) => { // Servicio para obtener un producto por ID
  const productDoc = doc(db, P_COLLECTION, id); // Referencia al documento del producto
  const productSnap = await getDoc(productDoc); // Obtiene el documento del producto
  if (productSnap.exists()) { // Verifica si el documento existe
    return { id: productSnap.id, ...productSnap.data() }; // Retorna el producto con su ID
  } else {
    throw new Error("No existe producto con id:" + id); // Lanza un error si no existe el producto
  } 
};

export const createProduct = async (productData) => { // Servicio para crear un nuevo producto
  const cleanedData = cleanProduct(productData); // Limpia y valida los datos del producto
  const productsCol = collection(db, P_COLLECTION); // Referencia a la colección de productos
  const docRef = await addDoc(productsCol, cleanedData); // Agrega un nuevo documento a la colección
  return { id: docRef.id, ...cleanedData };
};

export const deleteProduct = async (id) => { // Servicio para eliminar un producto por ID
  const productDoc = doc(db, P_COLLECTION, id); // Referencia al documento del producto
  await deleteDoc(productDoc); // Elimina el documento del producto
  return true;
};
