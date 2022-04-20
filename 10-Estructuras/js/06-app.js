const usuario = false;
const puedePagar = false;

// Operador y
if (usuario && puedePagar) {
    console.log('Puedes comprar');

} else if (!usuario && !puedePagar) {
    console.log('No puedes comprar');
} else if (!usuario) {
    console.log('Registrate o ingresa a tu cuenta');
} else if (!puedePagar) {
    console.log('Revisa el estado de tu cuenta');
} 
