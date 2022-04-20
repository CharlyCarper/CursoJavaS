function iniciarApp (){
    console.log("Iniciar App...");
    segundaFuncion();
}
iniciarApp

function segundaFuncion () {
    console.log('Desde la segunda funcion');
    usuarioAutenticado('Juan');
}
iniciarApp();

function usuarioAutenticado (usuario) {
    console.log('Autenticando Usuario...')
    console.log(`Bienvenido ${usuario}`);
}