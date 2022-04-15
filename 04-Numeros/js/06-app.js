const numero1 = "20";
const numero2 = "20.2";
const numero3 = "uno";
const numero4 = 20;


// conversion de string a entero
console.log(typeof numero1);
console.log(numero1);
console.log(Number.parseInt(numero1));
console.log(typeof Number.parseInt(numero1));
console.log(Number.parseInt(numero3));

// conversion de string a float
console.log(typeof numero2);
console.log(numero2);
console.log(Number.parseFloat(numero2))
console.log(typeof Number.parseFloat(numero2))

// Revisar si un numero es entero o no
console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero3));

