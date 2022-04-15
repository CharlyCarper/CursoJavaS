const producto = "       Monitor de 30\"         ";
console.log(producto);
console.log(`La longitude del string es de: ${producto.length}`);
// eliminar de iniciop 
console.log(producto.trimStart());
// eliminar de final
console.log(producto.trimEnd());
console.log(producto.trim().trimEnd());
console.log(`La longitud del string cortado es de: ${producto.trim().length}`);