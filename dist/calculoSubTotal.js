// Calcula el subtotal sumando todos los precios individuales
// Obtiene un valor númerico de un arreglo y devuelve valor en número.
export const calcularSubTotal = (obtenerPrecios) => {
    let subTotal = 0;
    // Acumulación iterativa de valores del arreglo
    obtenerPrecios.forEach(precio => {
        // Almacena nuevamente el valor obtenido del subtotal + precio.
        subTotal = subTotal + precio;
    });
    return subTotal;
};
//# sourceMappingURL=calculoSubTotal.js.map