const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo canción numero ${id}`);
    },
    pausa: function () {
        console.log('Pausando canción');
    },
    crearPlaylist: function (nombre = 'Playlist') {
        console.log(`Creando playlist ${nombre}`)
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo playlist: ${nombre}`)
        reproductor.reproducir(1);
    }



}
reproductor.crearPlaylist('Playlist de la semana');
reproductor.reproducirPlaylist('Playlist de la semana');
reproductor.reproducir(30);
reproductor.reproducir(40);
reproductor.pausa();


reproductor.borrar = function (id) {
    console.log(`Borrando canción ${id}`);
}

reproductor.borrar(30);