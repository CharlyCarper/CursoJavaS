const producto = {
    nombre: "Monitor 27 Pulgadas",
    precio: 500,
    disponible: true,
    
    fichaTecnica : {
        caducidad: "2021",
        color: "rojo",
        peso: "2kg",
        
        medidas:{
            alto: "30cm",
            ancho: "40cm",
        },
        fabricante:{
            nombre: "LG",
            pais: "España",
        }
    }
}

const {nombre, fichaTecnica, fichaTecnica:{medidas:{alto}}} = producto;
console.log(fichaTecnica);
console.log(nombre);
console.log(alto);
