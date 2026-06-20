# Sistema de Gestión de Ventas

Este proyecto esta hecho con TypeScript y Node.
js para gestionar las ventas de una aplicación básica 
por medio de consola.

## Tecnologías utilizadas:

* **Visual Studio Code:** 1.124.2
* **Node.js:** 22<=24  - 24.15.0
* **TypeScript**
* **GitHub CLI**
* **GitHub**

## Requisitos para crear una aplicación similar a esta.
* Para que el usuario pueda compilar la aplicación 
y ejecutarla debe de configurar su entorno de desarrollo:

    * Verificar que tenga la versión más reciente de Visual Studio Code.
    * Instalar npm install -g pnpm para mayor comodidad.
    * Iniciar el proyecto con "pnpm init" sirviendo para obtener el paquete json.
    * Agregar typescript: pnpm add -D typescript @types/node
    * Agregar el archivo de configuración de typescript con: pnpm tsc --init

* Luego de agregar lo anterior, modifique los archivos de: configuración typescript y configuración de aplicación.

    * **package.json:** en scripts dentro de las llaves abajo de test agregar: "build": "tsc",
    "start": "node dist/index.js"
    * **tsconfig.json:** borrar el comentado de: "rootDir": "./src",
    "outDir": "./dist",

        * Modificar target y colocar: "es2020"
        * Modificar types para pasar a ser:     "types": ["node"],

* Una vez modificadas las instalaciones y configuraciones anteriores, ya se puede trabajar y crear una aplicación similar a la que se tiene actualmente en este proyecto.


## Pasos para Ejecutar la aplicación
* Para que el usuario pueda compilar la aplicación 
y ejecutarla debe de configurar su entorno de desarrollo:

    * Verificar que tenga la versión más reciente de Visual Studio Code.
    * Instalar npm install -g pnpm para mayor comodidad.

* Al tener los pasos anteriores, compile la aplicación usando: **pnpm tsc**

* Luego para poder verlo en consola ejecute el siguiente comando: **node dist/index.js**

* Finalmente puede ver la aplicación.

## Usuario
* Puede ver un menú con las opciones de producto y calculo de precios por producto.

* Puede agregar los productos del menú ingresando cantidad.
    * Puede agregar uno o más productos.

* Puede calcular el precio automáticamente de:
    * SubTotal.
    * IVA (En Guatemala tiene un 12% aplicado a las compras).
    * Total con IVA incluido.

* Tiene opciones para escoger si:
    * Desea finalizar compra.
    * Desea continuar con la compra.

* Puede salir de la aplicación en cualquier momento (sale de consola).


## Ejecución de la aplicación:
* Cuando el usuario ingresa, puede ver un menú con 5
opciones disponibles, (1-3) le permiten escoger el 
producto, 4 le permite calcular el precio de cada 
producto que quiso llevar (cantidad) y 5 que le 
permite salir de la aplicación en consola.

* Si el usuario escoge ingresar a la opción 1, le 
mostrara el nombre del producto y el precio que 
tiene individualmente, si escoge ingresar alguna 
cantidad de producto, esa se almacena en un arreglo 
que pide nombre y la cantidad.  

    * La función del array list de agregar funciona
    verificando que el producto ya existe o no dentro
    del arreglo, si existe, entonces suma la cantidad
    encontrada con la nueva entrante, si no 
    existiese, agrega el producto a la lista.
    (Funciona igual que un arreglo, si encuentra datos, va agregandolos a su contador.).

* Cuando el producto ingresa correctamente a la lista
se le indica al usuario que su producto fue agregado, sacandolo de la opción y mandandolo de nuevo al menú.

* Si el usuario elige 2 o 3, pasaría lo mismo que la función de 1 ya que tienen la misma lógica.

* Si el usuario escoge 4, se le muestra un mensaje 
indicando donde se encuentra y se le muestran los 
datos calculados de su compra, mostrando subTotal, 
IVA, Total. Luego le pregunta si desea continuar con 
la compra o la desea terminar. 

    * Si escoge que desea continuar (si), entonces lo 
    devolvera al menú con los mismos datos del 
    arreglo que tenía cuando vio los datos 
    calculados de su compra y seguira aumentando la lista.
    * Si escoge que desea terminarla (no), entonces 
    lo retorna al menú y reinicia los datos del 
    arreglo para que ya no almacene ningún dato y le
    permita al usuario crear otra compra.

* La funcionalidad de la opción 4 se basa en hacer 
que el arreglo almacene los productos en el arreglo y
se guarden ahí mismo, luego obtener los precios del
arreglo e irlos sumando y por último tener una 
función que permita borrar o regresar al inicio de 
la lista para borrar los datos que tenía anteriormente.
    
    * Los datos de ese arreglo se almacenan en 
    "obtenerPrecios" y para hacer que los otros 
    modulos funcionen con los datos que piden, 
    unicamente se le pasan los datos que ya tiene
    el arreglo unicamente con el nombre del método
    y se llama al método de la función que permite 
    calcular todo lo que tiene una factura, pasando
    por cada una y sumando o multiplicando valores.

* Opción 5: Si el usuario la elige, inmediatamente 
sale de la aplicación en consola y termina su uso.
