window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion)
    if (ubicacion.top > 100) {
        console.log('Aun falta mas scroll...')
    } else if (ubicacion.top < -850) {
        console.log('Nos pasamos...regresa')
    }else if(ubicacion.top<=100&&ubicacion.top>=-850){
        console.log('Ya estamos aqui')
    }
})