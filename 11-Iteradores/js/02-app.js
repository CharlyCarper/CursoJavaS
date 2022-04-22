// Rompe el ejecucion

for (let i = 0; i <= 10; i++) {

    if (i === 5) {
        console.log('Cinco')
        break;
    }

    console.log(`Numero: ${i}`)
}


console.table('');


//Rompe lo que queda del ciclo
for (let i = 0; i <= 10; i++) {

    if (i === 5) {
        console.log('Cinco')
        continue;
    }

    console.log(`Numero: ${i}`)
}
console.table('');

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 7500 },
    { nombre: 'Celular', precio: 10500, descuento: true },
    { nombre: 'Nintendo 3DS', precio: 2500 },
    { nombre: 'Nintendo Switch', precio: 6500 },
    { nombre: 'Tablet', precio: 5500, descuento: true },
    { nombre: 'Iphone', precio: 27500 },
    { nombre: 'RTX 3090', precio: 33500 },]

for (let i = 0; i < carrito.length; i++) {

    if (carrito[i].descuento) {
        console.log(`${carrito[i].nombre} tiene un DESCUENTO!!! \$$$$$`)
        continue;
    }
    console.log(`${carrito[i].nombre}`);
}