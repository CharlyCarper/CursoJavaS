const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

// Enlista tambien los elementos en blanco, es decir los espacios tambien
console.log(navegacion.childNodes[1].nodeName);
// Solo enlista los nodos reales
console.log(navegacion.children[1].nodeType);




console.table('');//separador




console.log(navegacion.firstElementChild)
console.log(navegacion.lastElementChild)




console.table('');//separador





const card = document.querySelector('.card')

console.log(card.children[1].children[1])

card.children[1].children[1].textContent= 'Nuevo heading desde traversing the dom'

card.children[0].src='https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2021/11/spider-man-3-harry-osborn-como-duende-verde-2537167.jpg?itok=HG7ZnO8N'

// Traversing the dom, del hijo al padre
console.log(card.parentElement.parentElement.parentElement)

console.log(card.nextElementSibling.children[0])

const ultimoCard= document.querySelector('.card:nth-child(4)')
console.log(ultimoCard.previousElementSibling)
// card.nextElementSibling.children[0].src='https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/02/Marvel-Quien-es-Superior-Iron-Man-el-heroe-al-que-Tom-Cruise-podria-interpretar-en-Doctor-Strange-2-2.jpg?resize=1280%2C1474&quality=80&ssl=1';






