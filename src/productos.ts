export interface Producto {
    nombre: string;
    precio: number;
}

export interface Compra {
    producto: Producto;
    cantidad: number;
}


export const dorito: Producto = {
    nombre: "Dorito",
    precio: 5
};

export const cereal: Producto = {
    nombre: "Cereal",
    precio: 25
};

export const cocaCola: Producto = {
    nombre: "Coca Cola 3 Litros",
    precio: 20
};