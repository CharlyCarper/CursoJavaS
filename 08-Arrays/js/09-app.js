const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 7500 },
    { nombre: 'Celular', precio: 10500 },
    { nombre: 'Nintendo 3DS', precio: 2500 },
    { nombre: 'Nintendo Switch', precio: 6500 },
    { nombre: 'Tablet', precio: 5500 },
    { nombre: 'Iphone', precio: 27500 },
    { nombre: 'RTX 3090', precio: 33500 },
];




for(let i=0; i<carrito.length; i++){
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

// Metodos de array

carrito.forEach( function (producto){
console.log(`${producto.nombre} - Precio: ${producto.precio}`)
});

