const btnflotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnflotante.addEventListener('click', mostrarOcultarFooter)

function mostrarOcultarFooter() {
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        btnflotante.classList.remove('activo');
        btnflotante.textContent='Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        btnflotante.classList.add('activo');
        btnflotante.textContent='CERRAR';
    }
}
