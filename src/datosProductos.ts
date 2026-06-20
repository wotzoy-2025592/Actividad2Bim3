import type { Compra, Producto } from "./productos.js";

export const compras: Compra[] = [];

export const agregarProducto = (producto: Producto, cantidad: number): void => {

    const existente = compras.find(
        compra => compra.producto.nombre === producto.nombre
    );

    if (existente) {
        existente.cantidad = existente.cantidad + cantidad;
    } else {
        const posicion = compras.length;

        compras[posicion] = {
            producto,
            cantidad
        };
    }
};

export const obtenerPrecios = (): number[] => {

    const precios: number[] = [];

    compras.forEach(compra => {

        for (let i = 0; i < compra.cantidad; i++) {
            const posicion = precios.length;
            precios[posicion] = compra.producto.precio;
        }
    });

    return precios;
};