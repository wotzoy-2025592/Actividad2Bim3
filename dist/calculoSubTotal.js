export const calcularSubTotal = (obtenerPrecios) => {
    let subTotal = 0;
    obtenerPrecios.forEach(precios => { subTotal = subTotal + precios; });
    return subTotal;
};
//# sourceMappingURL=calculoSubTotal.js.map