const productos = {
    nombre: "Monitor 27 Pulgadas",
    precio: 500,
    disponible: true
    }


productos.disponible = false;
console.log(productos);

delete productos.disponible;

console.log(productos);