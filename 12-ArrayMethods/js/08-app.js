const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// spread operator
const meses2 = [...meses, 'Agosto']
console.table(meses2)
console.table(meses)

const producto={
    nombre: 'Disco duro',
    precio: 300,
}

const carrito2 =[...carrito, producto]
console.table(carrito2);


