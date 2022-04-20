// Operador mayor y menor que
const dinero = 200;
const totalAPagar = 500;
tarjeta = false;
const cheque = true;

if (dinero >= totalAPagar) {
    console.log('pago realizado');

} else if (tarjeta) {
    console.log('pagado con tarjeta');
} else if (cheque) {
    console.log('pagado con cheque');
} else {
    console.log('fondos insuficientes');
}