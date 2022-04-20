const autenticado = true;

if (autenticado) {
    console.log('Acceso permitido');
}




// Mala estructura de AbortController, ya que jamas entrara a la segunda condicion
const puntaje = 500;

if (puntaje > 300) {
    console.log('buen puntaje');
} else if (puntaje > 400) {
    console.log('puntaje exelente');
}

// Correcta estructura
if (puntaje >= 400) {
    console.log('puntaje exelente');
} else if (puntaje >= 300) {
    console.log('buen puntaje');
} else {
    console.log('Es mejor que lo intentes de nuevo');
}

// Usando return evitas que se ejecute el codigo de abajo
function revisarPuntaje()  {
    if (puntaje >= 400) {
        console.log('puntaje exelente');
        return
    }
    if (puntaje >= 300) {
        console.log('buen puntaje');
        return
    }
}

revisarPuntaje();

