const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
// Ejemplo del forEach

let arreglo = '';
 carrito.forEach((p, index) => {
    if (p.nombre === 'Tablet') {
        arreglo = carrito[index]
    }
})
console.table(arreglo);

//Con .find
//Solo encuentra el primer valor que cumpla la condicion
const arreglo2 = carrito.find(p=> p.nombre==='Tablet')
console.table(arreglo2)
