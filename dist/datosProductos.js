export const compras = [];
export const agregarProducto = (producto, cantidad) => {
    const existente = compras.find(compra => compra.producto.nombre === producto.nombre);
    if (existente) {
        existente.cantidad = existente.cantidad + cantidad;
    }
    else {
        const posicion = compras.length;
        compras[posicion] = {
            producto,
            cantidad
        };
    }
};
export const obtenerPrecios = () => {
    const precios = [];
    compras.forEach(compra => {
        for (let i = 0; i < compra.cantidad; i++) {
            const posicion = precios.length;
            precios[posicion] = compra.producto.precio;
        }
    });
    return precios;
};
//# sourceMappingURL=datosProductos.js.map