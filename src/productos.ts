// Define la estructura base de un producto
// Contiene nombre y precio unitario
export interface Producto {
    nombre: string;
    precio: number;
}

// Representa una compra dentro del carrito
// Relaciona un producto con su cantidad seleccionada
export interface Compra {
    producto: Producto;
    cantidad: number;
}

// Definición de productos disponibles en el sistema

// Producto: Dorito con precio fijo
export const dorito: Producto = {
    nombre: "Dorito",
    precio: 5
};

// Producto: Cereal con precio fijo
export const cereal: Producto = {
    nombre: "Cereal",
    precio: 25
};

// Producto: Coca Cola 3 litros con precio fijo
export const cocaCola: Producto = {
    nombre: "Coca Cola 3 Litros",
    precio: 20
};