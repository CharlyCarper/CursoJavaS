const producto = {
    nombre: "Monitor 27 Pulgadas",
    precio: 500,
    disponible: true
}

// const nombre = producto.nombre;
// console.log(nombre)



// Destructuring
const{nombre, disponible} = producto;
const {precio} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);