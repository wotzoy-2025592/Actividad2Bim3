import * as readline from 'readline';
import { calcularSubTotal } from './calculoSubTotal.js';
import { calcularIVA} from './calculoIVA.js';
import { calcularTotal } from './calculoTotal.js';
import { dorito, cereal, cocaCola } from './productos.js';
import { agregarProducto, obtenerPrecios } from './datosProductos.js';

const readL = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pregunta = (pregunta: string): Promise<string> => {
    return new Promise((resolve) => readL.question(pregunta, resolve));
}

async function menuPrincipal(){
    console.log("Aplicación de Ventas:  ");
    console.log("\n|WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW|");
    console.log("\n|          Productos Disponibles:               |");
    console.log("\n|             1. Dorito                         |");
    console.log("\n|             2. Cereal                         |");
    console.log("\n|             3. Coca Cola 3 Litros             |");
    console.log("\n|             4. Calcular C. Productos          |");
    console.log("\n|             5. Salir.                         |");
    console.log("\n|WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW|");
    console.log("");

    const opcion = await pregunta("Selecciona una opción (1-5): ");
    switch(opcion.trim()) {

        case '1':
            console.log("Dorito - Q5");
            const cantidadDoritos = parseInt(await pregunta("Ingrese la cantidad de Doritos que desea: "));

            agregarProducto(dorito, cantidadDoritos);

            console.log("\nDoritos agregados.");
            await pregunta("\nPresiona ENTER para continuar...");
            break;

        case '2':
            console.log("Cereal - Q25");
            const cantidadCereal = parseInt(await pregunta("Ingrese la cantidad que desea llevar: "));            

            agregarProducto(cereal, cantidadCereal);
                
            console.log("\nCereales agregados.");
            await pregunta("\nPresiona ENTER para continuar...");
            break;

        case '3':
            console.log("Coca Cola 3L - Q20");
            const cantidadCoca = parseInt(await pregunta("Ingrese la cantidad que desea llevar: "));

            agregarProducto(cocaCola, cantidadCoca);

            console.log("\nCoca Colas agregados.");
            await pregunta("\nPresiona ENTER para continuar...");
            break;

        case '4': 
            console.log("Calcular subTotal y total con IVA de la compra de sus productos.");

            const precios = obtenerPrecios();

            const subTotal = calcularSubTotal(precios);
            const valorIVA = calcularIVA(subTotal);
            const total = calcularTotal(subTotal, valorIVA);

            console.log("\n Calcular precios de la Compra: ");
            console.log("--------------------------------");
            console.log("Subtotal: Q" + subTotal);
            console.log("IVA: Q" + valorIVA);
            console.log("Total: Q" + total);
            console.log("--------------------------------");

            const finalizar = await pregunta("¿Desea finalizar la compra? (si/no): ");

            if (finalizar.trim().toLowerCase() === "si") {
                const { limpiarCompras } = await import('./datosProductos.js');
                limpiarCompras();
                console.log("Compra finalizada. Carrito reiniciado.");
            } else {
                console.log("Compra continúa activa.");
            }

            await pregunta("\nPresiona ENTER para continuar...");
            break;

        case '5':
            console.log("Gracias por usar la app! ¡Vuelva pronto!");
            console.log("\n-- Esta app lo hizo William Otzoy");
            readL.close();
            return;
            break; 

        default:
            console.log("Esa opción no esta disponible");
            break;
    }
    
    await menuPrincipal();
}

menuPrincipal();