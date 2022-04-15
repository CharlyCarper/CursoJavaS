"use strict"; // Habilita el modo estricto de javascript


const producto = {
    nombre: "Monitor 27 Pulgadas",
    precio: 500,
    disponible: true
}
// Evita que el objeto sea modificado
Object.freeze(producto);

// El codigo dara error porque el objeto fue congelado
// producto.disponible = false;
// producto.imagen = "imagen.jpg";


console.log(producto);

// metodo para saber si un objeto esta congelado o no
console.log(Object.isFrozen(producto));