const reproductor = {
    cancion: '',

    reproducir: id => `Reproducir cancion numero ${id} `,

    pausar: () => `Pausar cancion`,

    crearLista: nombre => `Crearndo playlist ${nombre}`,

    reproducirLista: (idLista, nombre) => `Reproduciendo lista numero: ${idLista} con nombre ${nombre}`,

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Agregando ${cancion}`)
    },

    get obtenerCancion(){
        console.log(`Obteniendo cancion ${this.cancion}`)
    }

}

reproductor.nuevaCancion = 'Cancion 1';
reproductor.obtenerCancion;

console.log(reproductor.reproducir(23));
console.log(reproductor.reproducirLista(21, 'Playlist de la semana'));

