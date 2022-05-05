// Vriables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
const limpiarCarritoBtn = document.querySelector('#limpiar-carrito');
let articulosCarrito = [];

// Agregar eventos
agregarEventListener();
function agregarEventListener() {
    listaCursos.addEventListener('click', agregarCurso)

}


// Funciones
function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const productoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(productoSeleccionado);
    }
}

function leerDatosCurso(producto) {

    const ifObjeto = {
        imagen: producto.querySelector('img').src,
        nombreCurso: producto.querySelector('h4').textContent,
        precio: producto.querySelector('p span').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    // Agregar cursos al carrito
    articulosCarrito = [...articulosCarrito, ifObjeto];
    console.log(articulosCarrito);
    CarritoHTML();
}

// Agregar HTML al carrito
function CarritoHTML() {

    limpiarCarrito();

    articulosCarrito.forEach(cursos => {
        console.log(cursos.imagen);
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>
                <img src = ${cursos.imagen} width = "100"></img>
            </td>
            <td>
              ${cursos.nombreCurso}
            </td>
    
    `;
        contenedorCarrito.appendChild(row);

    })


}

// limpiar el carrito
function limpiarCarrito() {
    // Forma lenta
    // contenedorCarrito.innerHTML= '';


    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }

}