const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 7500 },
    { nombre: 'Celular', precio: 10500 },
    { nombre: 'Nintendo 3DS', precio: 2500 },
    { nombre: 'Nintendo Switch', precio: 6500 },
    { nombre: 'Tablet', precio: 5500 },
    { nombre: 'Iphone', precio: 27500 },
    { nombre: 'RTX 3090', precio: 33500 },
];

carrito.forEach( (p) => console.log(`${p.nombre} - Precio: \$${p.precio}`) );
// Son similares, pero map crea un nuevo arreglo
const nuevoArreglo = carrito.map( (p) => console.log(`${p.nombre} - Precio: \$${p.precio}`));
