const carrito = [];


// Definir producto

const producto1 = {
    nombre: 'Monitor 27 pulgadas',
    precio: 6500,
    disponible: true
}

const producto2 = {
    nombre: 'Televisión',
    precio: 1500,
    disponible: true
}

const producto3 = {
    nombre: 'Celular',
    precio: 1500,
    disponible: true
}

const producto4 = {
    nombre: 'Nintendo Switch Oled',
    precio: 6500,
    disponible: true
}
// Agregar producto al carrito
carrito.push(producto2);
carrito.push(producto1);
carrito.push(producto4);

// Agregar el producto al inicio del Array
carrito.unshift(producto3);
console.table(carrito);

// Eliminar ultimo elemento del array
// carrito.pop();
// console.table(carrito);


// Eliminar el primer elemento del array
// carrito.shift();
// console.table(carrito);


// Eliminar el elemento en la posición especificada
carrito.splice(1,1);
console.table(carrito);