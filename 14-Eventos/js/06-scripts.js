//Event bubbling
const carddiv = document.querySelector('.card');
const info2 = document.querySelector('.info');
const titilo = document.querySelector('.titulo');

carddiv.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('click en card')
})


info2.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('click en info')
    
})


titilo.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('click en titulo')
})