const efectivo = 125555000;
const credito = 4553423421000;
const disponible = efectivo + credito;
const totalAPagar = 2000;

if (efectivo >= totalAPagar || credito >= totalAPagar || disponible >= totalAPagar) {
    console.log('Pago realizado');
} else {
    console.log('Fondos insuficientes');
}