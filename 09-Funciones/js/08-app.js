function sumar (a,b){
    return (a+b);
}
const resultado = sumar(4,2);
console.log(resultado);

// Ejemplo mas avanzado

let total = 0;
function agregarCarrito (precio){
return total+=precio;

}

function calcularIva(total){
    return total*1.16;
}

total = agregarCarrito(300);
total = agregarCarrito(300);
total = agregarCarrito(300);
const totalPagar = calcularIva(total);



console.log(totalPagar);
console.log(total);