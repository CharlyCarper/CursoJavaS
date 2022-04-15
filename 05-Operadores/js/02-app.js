const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// revisar si dos numeros son iguales
console.log(numero1 == numero2);



// comparador estricto
console.log(numero1 === numero2);
console.log(typeof numero1);
console.log(typeof numero2);

// convertir para que sean iguales
console.log(numero1 === Number.parseInt(numero2));

// Diferente
const password1 = "admin";
const password2 = "Admin";
console.log("Diferente de...")


console.log(password1 != password2);
// Diferente de, mas estricto
console.log(numero1 !== numero2);

// convertimos a entero el string para que sean ENTEROS
console.log(numero1 !== Number.parseInt(numero2));