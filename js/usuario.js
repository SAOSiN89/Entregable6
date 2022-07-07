let nombre = document.getElementById("nombreIn");
let email = document.getElementById("emailIN");
let btn_registro = document.getElementById("datosIN");
let listaRegistro = [];


class Usuario {
    constructor(nombre,email) {
        this.nombre = nombre;
        this.email = email;
    }
}


btn_registro.addEventListener("click", ()=> {

    localStorage.getItem("listaUsuario");
    listaRegistro.push(new Usuario(nombre.value, email.value));

    nombre.value = "";
    email.value = "";

    localStorage.setItem("listaUsuarios", JSON.stringify(listaRegistro))

})