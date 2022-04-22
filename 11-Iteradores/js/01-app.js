// for (let i = 0; i < 10; i+=2) {
// console.log(`Numero: ${i}`)
// }

// for (let i = 1; i < 25; i++) {
//     if (i % 2 !== 0) {
//         console.log(`El Numero: ${i} es IMPAR`)
//     } else {
//         console.log(`El numero: ${i} es PAR`)
//     }
// }

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 7500 },
    { nombre: 'Celular', precio: 10500 },
    { nombre: 'Nintendo 3DS', precio: 2500 },
    { nombre: 'Nintendo Switch', precio: 6500 },
    { nombre: 'Tablet', precio: 5500 },
    { nombre: 'Iphone', precio: 27500 },
    { nombre: 'RTX 3090', precio: 33500 },
]

for (let i = 0; i < carrito.length; i++) {
console.table(carrito[i].nombre)
}



carrito.forEach(function (p) {
    console.table(`${p.nombre} con precio de: \$${p.precio}`)
}
)



