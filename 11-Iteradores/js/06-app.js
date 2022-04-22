//forEach
const pendientes = ['Tarea','Correr','Leer','Jugar','Comer','Est. JavaScript',]

console.log('Lista de Pendientes:')

pendientes.forEach( (pendientes,i) => console.log(`${i+1}.- ${pendientes}`))


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 7500 },
    { nombre: 'Celular', precio: 10500 },
    { nombre: 'Nintendo 3DS', precio: 2500 },
    { nombre: 'Nintendo Switch', precio: 6500 },
    { nombre: 'Tablet', precio: 5500 },
    { nombre: 'Iphone', precio: 27500 },
    { nombre: 'RTX 3090', precio: 33500 },
];

carrito.forEach(p=>console.log(`${p.nombre} con un precion de  \$${p.precio}`)
)

const nuevoCarrito = carrito.map(p=>p.nombre) 
console.log(nuevoCarrito)