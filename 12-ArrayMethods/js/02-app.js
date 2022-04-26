const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes, inx) => {
    if (mes == 'Abril') {
        console.log(`ID de Abreil es: ${inx}`)
    }

    // console.log(`El index del mes: ${mes} es: ${inx}`)

})


//Encontrar indice 
const index = meses.findIndex(mes=>mes == 'Diciembre'//Si no se encuentra nada devielve -1 
)
console.log(index)
// Mensaje para verificar si encontro el index en el arreglo
if (index>0){
    console.log(`Se encontro el idex con posición: ${index}`)
}else{
    console.log(`No se encontro`)
}

const index2 = carrito.findIndex(nombre => nombre.nombre === 'Tablet');

console.log(index2)