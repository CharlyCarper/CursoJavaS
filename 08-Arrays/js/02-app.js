const numeros = [10,20,30,40,50,[60,70,80,90]];

console.log(numeros);
console.table(numeros);
console.log(numeros[2]);

// undefined al tratar de acceder a una posicion que no existe
console.log(numeros[100]);

// Subposiciones
console.log(numeros[5][2]);

console.log(Number.isInteger(numeros[5][2]));

