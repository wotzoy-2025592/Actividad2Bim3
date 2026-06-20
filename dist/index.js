import * as readline from 'readline';
// Importación de los modulos de las funciones de la aplicación.
import { calcularSubTotal } from './calculoSubTotal.js';
import { calcularIVA } from './calculoIVA.js';
import { calcularTotal } from './calculoTotal.js';
import { dorito, cereal, cocaCola } from './productos.js';
import { agregarProducto, obtenerPrecios, limpiarCompras } from './datosProductos.js';
// Creación de interfaz de entrada/salida por consola
// Permite capturar datos del usuario de forma interactiva
const readL = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Wrapper de readline.question para convertirlo en Promise
// Esto permite usar async/await en lugar de callbacks
const pregunta = (pregunta) => {
    return new Promise((resolve) => readL.question(pregunta, resolve));
};
// Función principal del sistema de ventas
// Maneja el menú, interacción del usuario y flujo de compra
async function menuPrincipal() {
    // Presentación del sistema
    console.log("Aplicación de Ventas:");
    console.log("\n|WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW|");
    console.log("\n|          Productos Disponibles:               |");
    console.log("\n|             1. Dorito                         |");
    console.log("\n|             2. Cereal                         |");
    console.log("\n|             3. Coca Cola 3 Litros             |");
    console.log("\n|             4. Calcular C. Productos          |");
    console.log("\n|             5. Salir.                         |");
    console.log("\n|WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW|");
    console.log("");
    // Captura de opción seleccionada por el usuario
    const opcion = await pregunta("Selecciona una opción (1-5): ");
    switch (opcion.trim()) {
        // ===================== PRODUCTO 1 =====================
        case '1':
            console.log("Dorito - Q5");
            // Solicita cantidad de producto al usuario
            const cantidadDoritos = parseInt(await pregunta("Ingrese la cantidad de Doritos que desea: "));
            // Registra el producto en el carrito
            agregarProducto(dorito, cantidadDoritos);
            console.log("\nDoritos agregados.");
            await pregunta("\nPresiona ENTER para continuar...");
            break;
        // ===================== PRODUCTO 2 =====================
        case '2':
            console.log("Cereal - Q25");
            const cantidadCereal = parseInt(await pregunta("Ingrese la cantidad que desea llevar: "));
            agregarProducto(cereal, cantidadCereal);
            console.log("\nCereales agregados.");
            await pregunta("\nPresiona ENTER para continuar...");
            break;
        // ===================== PRODUCTO 3 =====================
        case '3':
            console.log("Coca Cola 3L - Q20");
            const cantidadCoca = parseInt(await pregunta("Ingrese la cantidad que desea llevar: "));
            agregarProducto(cocaCola, cantidadCoca);
            console.log("\nCoca Colas agregados.");
            await pregunta("\nPresiona ENTER para continuar...");
            break;
        // ===================== CÁLCULO DE COMPRA =====================
        case '4':
            console.log("Calcular subTotal y total con IVA de la compra de sus productos.");
            // Obtiene lista expandida de precios según cantidades en carrito
            const precios = obtenerPrecios();
            // Calcula subtotal sumando todos los precios
            const subTotal = calcularSubTotal(precios);
            // Calcula impuesto (IVA 12%)
            const valorIVA = calcularIVA(subTotal);
            // Calcula total final incluyendo IVA
            const total = calcularTotal(subTotal, valorIVA);
            console.log("\nCalcular precios de la Compra:");
            console.log("--------------------------------");
            console.log("Subtotal: Q" + subTotal);
            console.log("IVA: Q" + valorIVA);
            console.log("Total: Q" + total);
            console.log("--------------------------------");
            // Confirmación de cierre de compra
            const finalizar = await pregunta("¿Desea finalizar la compra? (si/no): ");
            if (finalizar.trim().toLowerCase() === "si") {
                // Limpia el carrito de compras
                limpiarCompras();
                console.log("Compra finalizada. Carrito reiniciado.");
            }
            else {
                console.log("Compra continúa activa.");
            }
            await pregunta("\nPresiona ENTER para continuar...");
            break;
        // ===================== SALIDA =====================
        case '5':
            console.log("Gracias por usar la app! ¡Vuelva pronto!");
            console.log("\n-- Esta app lo hizo William Otzoy");
            // Cierra la interfaz de lectura
            readL.close();
            return;
        // ===================== VALIDACIÓN =====================
        default:
            console.log("Esa opción no esta disponible");
            break;
    }
    // Recursividad para mantener el menú activo
    await menuPrincipal();
}
// Inicialización del programa
menuPrincipal();
//# sourceMappingURL=index.js.map