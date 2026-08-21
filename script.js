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


// ejemplo 41
const botonContador = document.getElementById('js-eventos-boton');
const resultadoContador = document.getElementById('js-eventos-contador');

let cantidadClicks = 0;
botonContador.addEventListener('click', () => {
    cantidadClicks += 1;
    resultadoContador.textContent = `Clics registrados: ${cantidadClicks}`;

});

//ejemplo 42
const formulario = document.getElementById('js-validacion-formulario')
const nombreValidacion = document.getElementById('js-validacion-nombre')
const mensajeValidacion = document.getElementById('js-validacion-mensaje')

formulario.addEventListener('submit', (evento) => {

    evento.preventDefault();
    let nombre = nombreValidacion.value.trim();

    if (nombre.length < 2) {
        mensajeValidacion.textContent = 'Escribe al menos 2 caracteres en el nombre';
        nombreValidacion.focus();
        return;
    }
    mensajeValidacion.textContent = `El formulario es valido, bienvenido ${nombre}`;
})

//ejemplo 43

const entradaStorage = document.getElementById('js-storage-nombre')
const botonGuardar = document.getElementById('js-storage-guardar')
const botonBorrar = document.getElementById('js-storage-borrar')
const resultadoStorage = document.getElementById('js-storage-resultado')
const resultadoSession = document.getElementById('js-session-resultado')

botonGuardar.addEventListener('click', () => {

    const nombre = entradaStorage.value.trim()

    if (!nombre) {
        resultadoStorage.textContent = "Escribe un nombre antes de guardar"
        entradaStorage.focus();
        return;
    }

    //asi guardo algo en el localstorage (llave,valor), ambos string
    localStorage.setItem('js-storage-nombre', nombre)
    resultadoStorage.textContent = `Nombre guardado ${nombre}`
});

botonBorrar.addEventListener('click', () => {
    localStorage.removeItem('js-storage-nombre');
    entradaStorage.value = '';
    resultadoStorage.textContent = `El nombre fue eliminado del localStorage`
});