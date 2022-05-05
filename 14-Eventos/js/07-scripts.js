const carddiv = document.querySelector('.card');
carddiv.addEventListener('click',(e)=>{
    if(e.target.classList.contains('titulo')){
        console.log('Diste click en Titulo')
    }else if (e.target.classList.contains('precio')){
        console.log('Diste click en Precio')
    }else if (e.target.classList.contains('card')){
        console.log('Diste click en Card')
    }
})















// const win = window.addEventListener('click', punteroloc)

// function punteroloc(e){
// console.log(e.target.classList)
// }