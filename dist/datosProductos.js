// Arreglo global que almacena el carrito de compras
// Cada elemento representa un producto con su cantidad
export const compras = [];
// Agrega un producto al carrito o incrementa su cantidad si ya existe
export const agregarProducto = (producto, cantidad) => {
    // Busca si el producto ya existe en el carrito
    const existente = compras.find(compra => compra.producto.nombre === producto.nombre);
    if (existente) {
        // Si existe, incrementa la cantidad acumulada
        existente.cantidad = existente.cantidad + cantidad;
    }
    else {
        // Si no existe, lo inserta como nuevo registro
        compras[compras.length] = {
            producto,
            cantidad
        };
    }
};
// Convierte el carrito en una lista plana de precios unitarios
// Expande cada producto según su cantidad
export const obtenerPrecios = () => {
    const precios = [];
    // Recorre cada compra registrada
    compras.forEach(compra => {
        // Repite el precio según la cantidad del producto
        for (let i = 0; i < compra.cantidad; i++) {
            precios[precios.length] = compra.producto.precio;
        }
    });
    return precios;
};
// Limpia completamente el carrito de compras
// Reinicia el estado del sistema de ventas
export const limpiarCompras = () => {
    compras.length = 0;
};
//# sourceMappingURL=datosProductos.js.map