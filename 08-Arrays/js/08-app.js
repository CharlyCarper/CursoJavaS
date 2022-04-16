const producto = {
    nombre: "Monitor 27 Pulgadas",
    precio: 500,
    disponible: true
}

// const nombre = producto.nombre;
// console.log(nombre)



// Destructuring
const { nombre } = producto;
console.log(nombre);


// Destructuring con objetos
const numeros = [10, 20, 30, 40, 50];

const [primero, segundo, tercero] = numeros;
console.log(primero);

const [ , , , ,quinto]= numeros;
console.log(quinto);
