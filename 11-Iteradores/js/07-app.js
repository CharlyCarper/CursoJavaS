// Arreglo 1

const pendientes = ['Tarea','Correr','Leer','Jugar','Comer','Est. JavaScript',]


// Arreglo 2

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 7500 },
    { nombre: 'Celular', precio: 10500 },
    { nombre: 'Nintendo 3DS', precio: 2500 },
    { nombre: 'Nintendo Switch', precio: 6500 },
    { nombre: 'Tablet', precio: 5500 },
    { nombre: 'Iphone', precio: 27500 },
    { nombre: 'RTX 3090', precio: 33500 },
];

for(let pendiente of pendientes){
console.log(`${pendiente}`)
}

for(let producto of carrito){
    console.log(`${producto.nombre} con un precio de: \$${producto.precio}`)
}