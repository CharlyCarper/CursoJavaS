const navegacion = document.querySelector('.navegacion');
const backG = document.querySelector('.hero');
console.log(backG)
//Registrar un evento

navegacion.addEventListener('click', () => {
    console.log('Click en nav');

})

navegacion.addEventListener('mouseenter', () => {
    console.log('Mouse sobre nav');
    navegacion.style.backgroundColor = 'transparent';
})

navegacion.addEventListener('mouseout', () => {
    console.log('Saliendo del nav');
    navegacion.style.backgroundColor = 'white';
})

