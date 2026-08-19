// Como encontrar elementos por ID en el DOM (Documento Object Model)
document.addEventListener("DOMContentLoaded", () => {
    const textoDom = document.getElementById("js-dom-texto")
    console.log(textoDom.textContent);
});


// Ejemplo 39

const botonSeleccionar = document.getElementById("js-selector-boton");
const resultadoSeleccion = document.getElementById("js-selector-resultado");

botonSeleccionar.addEventListener("click", () => {

    const porId = document.getElementById("js-selector-lista");
    const porClase = document.getElementsByClassName("js-selector-item")
    const primero = document.querySelector("#js-selector-lista li");
    const todos = document.querySelectorAll("#js-selector-lista li");



});