let venta = document.getElementById('result')
let boton = document.querySelectorAll(".btn");
let divCine = document.getElementById("divCine");


// Se crea la clase cine con un constructor
class Cine{
    constructor(pelicula, precio, lugares){
        this.pelicula = pelicula;
        this.precio = Number(precio);
        this.lugares = Number(lugares);
    }
}

// crea un array para agregar con las peliculas
const peliculas = [];
// creamos las diferentes variantes de peliculas
peliculas.push(new Cine("Thor: Love and Thunder", 900, 10));
peliculas.push(new Cine("Dragon Ball Super: Super Hero",980, 5));
peliculas.push(new Cine("The Black Phone", 800,20))
peliculas.push(new Cine("Jurassic World",850, 15))
console.log(peliculas)


// forEach para que agregue por cada elemento un boton
peliculas.forEach(pelis => {

    divCine.innerHTML += `<div class="PeliInfo">
                        <h3 class="nameProduct">${pelis.pelicula}</h3>
                        <h3 class="pricePRoduct">$${pelis.precio}</h3>
                        <button onclick="aviso()" class="btn">Comprar</button>
                        
                         </div>`
    
});


function aviso(){
    venta.innerHTML = `Se compro boleto con exito`
    // alert(`Entrada comprada con exito !!!`)
    
};




