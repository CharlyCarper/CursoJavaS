const carrito = [];


// Definir producto

const producto = {
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

let resultado;
resultado = [...carrito,producto]
resultado = [...resultado,producto2]
// Agregar el producto en primera posición del array
resultado = [producto3,...resultado]



console.table(resultado);