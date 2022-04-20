const puntaje = 100;

if (puntaje != 100) {
    console.log('el puntaje no es 100');

} else {
    console.log('el puntaje es 100');
}
// Al doble igual no se comparara el tipo de dato
if (puntaje == "100") {
    console.log('el puntaje es 100');

} else {
    console.log('el puntaje no es 100');
}
// El triple igual es una comparacion estricta por lo cual tambien compara tipo de datos
if (puntaje === "100") {
    console.log('el puntaje es 100');

} else {
    console.log('el puntaje no es 100');
}
// Operador ternario
if (puntaje !== "100") {
    console.log('el puntaje no es 100');

} else {
    console.log('el puntaje es 100');
}

console.log(typeof puntaje);
