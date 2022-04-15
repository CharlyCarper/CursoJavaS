"use strict"

const producto = {
    nombre: "Monitor 27 Pulgadas",
    precio: 500,
    disponible: true
}
// Te deja modificar el objeto pero no puedes eliminar ni agregar propiedades
Object.seal(producto);

producto.cantidad = 10;

// Esto si esta permitido
producto.precio=300;

// console.log(producto.precio);



// Para saber si un objeto esta sellado o no
console.log(Object.isSealed(producto));

