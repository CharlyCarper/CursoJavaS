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

// Agregar producto al carrito
carrito.push(producto);
carrito.push(producto2);

// Agregar el producto al inicio del Array
carrito.unshift(producto3);


console.table(carrito);