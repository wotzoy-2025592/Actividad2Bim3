export const calcularSubTotal = (obtenerPrecios: number[]): number => {

    let subTotal = 0;
    
    obtenerPrecios.forEach(precios => {subTotal = subTotal + precios;});

    return subTotal;
};
