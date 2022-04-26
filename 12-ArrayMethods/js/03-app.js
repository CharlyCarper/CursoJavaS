const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
let total = 0;

carrito.forEach(p => total += p.precio)

console.log(total);




//El codigo es mas largo que el forEach pero es la manera mas moderna de hacerlo
let resultado = carrito.reduce((total, producto) => total += producto.precio,0)

console.log(resultado)