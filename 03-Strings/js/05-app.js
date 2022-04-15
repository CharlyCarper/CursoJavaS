const producto = "Monitor de 30 Pulgadas";

// .replace para remplazar
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

// .slice para cortar
console.log(producto.slice(0, 10));
console.log(producto.slice(0, 15));
console.log(producto.slice(0, 20));

// alternativa a slice, si a este inviertes los numeros de inicio y fin, te devuelve el string invertido
console.log(producto.substring(0, 15));
console.log(producto.substring(15, 0));
// para colocar la letra en el circulo de la cuenta de google
console.log(producto.substring(0, 1));
console.log(producto.charAt(0));
console.log(producto.slice(0, 1));