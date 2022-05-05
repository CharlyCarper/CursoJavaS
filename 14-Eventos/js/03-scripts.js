    const busqueda= document.querySelector('.busqueda');
    // busqueda.addEventListener('keydown',()=>{
    //     console.log('Escribiendo')
    // })


    // busqueda.addEventListener('keyup',()=>{
    //     console.log('Soltando tecla')
    // })

  


    busqueda.addEventListener('input',(e)=>{
        console.log(e.target.value)
    })