const producto = {
    nombre: "Monitor 27 Pulgadas",
    precio: 500,
    disponible: true
}
const medidas = {
    ancho: "30",
    alto: "40",
}

console.log(producto);
console.log(medidas);


// Unir 2 ojetos
const resultado = Object.assign(producto,medidas);

console.log(resultado);

// spread operator o rest operator
const resultado2 = {...producto,...medidas};
console.log(resultado2);
