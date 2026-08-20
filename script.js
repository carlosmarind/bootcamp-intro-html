// Como encontrar elementos por ID en el DOM (Documento Object Model)
document.addEventListener("DOMContentLoaded", () => {
    const textoDom = document.getElementById("js-dom-texto")
    console.log(textoDom.textContent);
});


// Ejemplo 39
// asi se crea un listener
// elemento.addEventListener("evento", function(){ /* aqui lo que yo quiero hacer*/ });
// y esta funcion es llamada por el evento del elemento html mediante onclick
function meApretaron() {
    alert("alguien me presiono!!")
}

const botonSeleccionar = document.getElementById("js-selector-boton");
const resultadoSeleccion = document.getElementById("js-selector-resultado");

botonSeleccionar.addEventListener("click", () => {

    // va a encontrar solo un elemento por ID
    const porId = document.getElementById("js-selector-lista");
    // va a encontrar TODOS (quizas mas de uno) los que hagan match con la clase js-selector-item
    const porClase = document.getElementsByClassName("js-selector-item")
    // va a encontrar solo un elemento por ID y su primer li
    const primero = document.querySelector("#js-selector-lista li");
    // va a encontrar TODOS (quizas mas de uno) los que hagan match con la clase js-selector-lista y sus li's
    const todos = document.querySelectorAll("#js-selector-lista li");

    resultadoSeleccion.textContent =
        `ID: ${porId.id}; clase: ${porClase.length}; primero: ${primero.textContent}; todos: ${todos.length}`

    todos.forEach((cualquiernombre) => {
        cualquiernombre.classList.toggle("js-destacado")
    });

    for (let indice = 0; indice < todos.length; indice++) {
        console.log(todos[indice].textContent)
    }

});

// Lección 38: cargar JavaScript con defer
const estadoCarga = document.getElementById('js-carga-estado');
estadoCarga.textContent = 'JavaScript cargado: el DOM está disponible.';
estadoCarga.classList.add('js-resultado-exito');



// Ejemplo 40
const botonModificar = document.getElementById("js-modificar-boton");
const textoModificar = document.getElementById("js-modificar-texto");
const resultadoModificar = document.getElementById("js-modificar-resultado");

botonModificar.addEventListener("click", () => {
    textoModificar.textContent = "Texto modificado desde javascript"
    textoModificar.setAttribute('title', 'Atributo agregado desde javascript')
    textoModificar.classList.toggle('js-destacado');
    resultadoModificar.textContent = "Se modificaron textos, atributos y clases"
});
