
// Object literal
const producto = {
    nombre: "Monitor 27 Pulgadas",
    precio: 500,
    disponible: true,
    
}

// Object constructor
function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;

}
const producto2 = new Producto("Monitor 27 Pulgadas", 500, true);

console.log(producto2);


const producto3 = new Producto("Tablet", 3000, true); // Object constructor 
console.log(producto3);