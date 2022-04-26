const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]



//todos los objetos deben de cumplir la condicion para devolver true
const resultado = carrito.every(p => p.precio < 1000)

console.log(resultado)


//some revisa que al menos uno cumpla la condicion
let arreglo = [];
const resultado2 = carrito.some((p, index) => {
    if (p.precio < 500 && p.precio > 200) {

        arreglo.push(carrito[index])
    }
})
console.log(resultado2);
console.table(arreglo);