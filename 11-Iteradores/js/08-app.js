// const pendientes = ['Tarea', 'Correr', 'Leer', 'Jugar', 'Comer', 'Est. JavaScript',]


// for (let pendiente of pendientes) {
//     console.log(`${pendiente}`)
// }

const autos = {
    Nombre: 'Camaro',
    year: 2023,
    color: 'Amarillo'
}

// Este for itera en los index de los objetos
// for(let index in autos){
//     console.log(`${autos[index]}`)
// }

for (let [llave, valor] of Object.entries(autos)) {
    console.log(llave);
    console.log(valor);
}
