const metodoDePago = 'tarjeta';

switch (metodoDePago) {
    case 'efectivo':
        console.log('Pago con efectivo');
        break;

    case 'tarjeta':
        console.log('Pago con tarjeta');
        break;

    case 'cheque':
        console.log('Pago con cheque');
        break;

    default:
        console.log('Metodo de pago no soportado');
        break;
}