const nombre = "Hola";
const precio = 10;

const producto = {
    nombre: "Monitor 27 Pulgadas",
    precio: 500,
    disponible: true,
    mostrar: function(){
        console.log(`Tenemos a la venta: ${this.nombre} por un valor de ${this.precio} pesos`);

    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 3000,
    disponible: true,
    mostrar: function(){
        console.log(`Tenemos a la venta: ${this.nombre} por un valor de ${this.precio} pesos`);

    }
}

producto.mostrar();
producto2.mostrar();
