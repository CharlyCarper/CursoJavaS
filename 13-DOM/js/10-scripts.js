const enlace = document.createElement('a');

// Agregando texto
enlace.textContent = 'Nuevo';

// Agregando href
enlace.href = '/nuevo-enlace';


enlace.target = '_blank';



// Agregando el elemento
const navegacion = document.querySelector('.navegacion')
// console.log(navegacion.children)

// navegacion.appendChild(enlace)

// navegacion.insertBefore(enlace, navegacion.children[2])

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Categoria';
parrafo1.classList.add('categoria', 'concierto')




const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Titulo';
parrafo2.classList.add('titulo');




const parrafo3 = document.createElement('p');
parrafo3.textContent = 'Precio';
parrafo3.classList.add('precio');


// console.log(parrafo1);
// console.log(parrafo2);
// console.log(parrafo3);

const info = document.createElement('div');
info.classList.add('info')

// console.log(info);
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)


// Crear Imagen
const img = document.createElement('img')
img.src = '../13-DOM/img/arriba.jpg';


// Crear div card
const card = document.createElement('div')
card.classList.add('card');

card.appendChild(img);
card.appendChild(info);


//traer el contenedor cards
const contenedorCards= document.querySelector('.contenedor-cards');
contenedorCards.append(card);
