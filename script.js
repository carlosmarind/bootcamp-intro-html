// Lección 37: HTML, JavaScript y DOM
const textoDom = document.getElementById('js-dom-texto');
console.log('Elemento representado en el DOM:', textoDom);

// Lección 38: cargar JavaScript con defer
const estadoCarga = document.getElementById('js-carga-estado');
estadoCarga.textContent = 'JavaScript cargado: el DOM está disponible.';
estadoCarga.classList.add('js-resultado-exito');

// Lección 39: seleccionar elementos del DOM
const botonSeleccionar = document.getElementById('js-selector-boton');
const resultadoSeleccion = document.getElementById('js-selector-resultado');
botonSeleccionar.addEventListener('click', () => {
    const porId = document.getElementById('js-selector-lista');
    const porClase = document.getElementsByClassName('js-selector-item');
    const primero = document.querySelector('#js-selector-lista li');
    const todos = document.querySelectorAll('#js-selector-lista li');
    todos.forEach((elemento) => elemento.classList.toggle('js-destacado'));
    resultadoSeleccion.textContent =
        `ID: ${porId.id}; clase: ${porClase.length}; primero: ${primero.textContent}; todos: ${todos.length}.`;
});

// Lección 40: modificar contenido, atributos y clases
const botonModificar = document.getElementById('js-modificar-boton');
const textoModificar = document.getElementById('js-modificar-texto');
const resultadoModificar = document.getElementById('js-modificar-resultado');
botonModificar.addEventListener('click', () => {
    textoModificar.textContent = 'Texto modificado con JavaScript';
    textoModificar.setAttribute('title', 'Atributo agregado con setAttribute');
    textoModificar.classList.toggle('js-destacado');
    resultadoModificar.textContent = 'Se modificaron texto, atributo y clase.';
});

// Lección 41: eventos con addEventListener
const botonContador = document.getElementById('js-eventos-boton');
const resultadoContador = document.getElementById('js-eventos-contador');
let cantidadClics = 0;
botonContador.addEventListener('click', () => {
    cantidadClics += 1;
    resultadoContador.textContent = `Clics registrados: ${cantidadClics}`;
});

// Lección 42: validación de formularios
const formulario = document.getElementById('js-validacion-formulario');
const nombreValidacion = document.getElementById('js-validacion-nombre');
const mensajeValidacion = document.getElementById('js-validacion-mensaje');
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombreLimpio = nombreValidacion.value.trim();
    if (nombreLimpio.length < 2) {
        mensajeValidacion.textContent = 'Escribe al menos 2 caracteres que no sean espacios.';
        nombreValidacion.focus();
        return;
    }
    mensajeValidacion.textContent = `Formulario válido. Hola, ${nombreLimpio}.`;
});

// Lección 43: localStorage y sessionStorage
const entradaStorage = document.getElementById('js-storage-nombre');
const botonGuardar = document.getElementById('js-storage-guardar');
const botonBorrar = document.getElementById('js-storage-borrar');
const resultadoStorage = document.getElementById('js-storage-resultado');
const resultadoSession = document.getElementById('js-session-resultado');
const recargas = Number(sessionStorage.getItem('curso-js-recargas') ?? '0') + 1;
sessionStorage.setItem('curso-js-recargas', String(recargas));
resultadoSession.textContent = `Cargas en esta pestaña: ${recargas}`;
const nombreGuardado = localStorage.getItem('curso-js-nombre');
resultadoStorage.textContent = nombreGuardado
    ? `Nombre guardado: ${nombreGuardado}`
    : 'No hay un nombre guardado.';
botonGuardar.addEventListener('click', () => {
    const nombre = entradaStorage.value.trim();
    if (!nombre) {
        resultadoStorage.textContent = 'Escribe un nombre antes de guardar.';
        entradaStorage.focus();
        return;
    }
    localStorage.setItem('curso-js-nombre', nombre);
    resultadoStorage.textContent = `Nombre guardado: ${nombre}`;
});
botonBorrar.addEventListener('click', () => {
    localStorage.removeItem('curso-js-nombre');
    entradaStorage.value = '';
    resultadoStorage.textContent = 'Nombre eliminado de localStorage.';
});

// Lección 44: crear y eliminar elementos
const formularioCrear = document.getElementById('js-crear-formulario');
const entradaCrear = document.getElementById('js-crear-texto');
const listaCrear = document.getElementById('js-crear-lista');
formularioCrear.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const texto = entradaCrear.value.trim();
    if (!texto) {
        entradaCrear.focus();
        return;
    }
    const elemento = document.createElement('li');
    const contenido = document.createElement('span');
    const botonEliminar = document.createElement('button');
    contenido.textContent = texto;
    botonEliminar.type = 'button';
    botonEliminar.className = 'js-elemento-eliminar';
    botonEliminar.textContent = 'Eliminar';
    elemento.append(contenido, botonEliminar);
    listaCrear.append(elemento);
    entradaCrear.value = '';
    entradaCrear.focus();
});
listaCrear.addEventListener('click', (evento) => {
    const botonEliminar = evento.target.closest('.js-elemento-eliminar');
    if (!botonEliminar) return;
    botonEliminar.closest('li').remove();
});

// Lección 45: clonar y reordenar elementos
const contenedorTarjetas = document.getElementById('js-tarjetas-contenedor');
const botonReordenar = document.getElementById('js-tarjeta-reordenar');
const resultadoTarjetas = document.getElementById('js-tarjeta-resultado');
let numeroTarjeta = 1;
contenedorTarjetas.addEventListener('click', (evento) => {
    const botonClonar = evento.target.closest('.js-tarjeta-clonar');
    if (!botonClonar) return;
    const original = botonClonar.closest('.js-tarjeta');
    const clon = original.cloneNode(true);
    numeroTarjeta += 1;
    clon.querySelector('h3').textContent = `Tarjeta ${numeroTarjeta}`;
    contenedorTarjetas.append(clon);
    resultadoTarjetas.textContent = `Se creó la tarjeta ${numeroTarjeta}.`;
});
botonReordenar.addEventListener('click', () => {
    const tarjetas = contenedorTarjetas.querySelectorAll('.js-tarjeta');
    if (tarjetas.length < 2) {
        resultadoTarjetas.textContent = 'Clona una tarjeta antes de reordenar.';
        return;
    }
    tarjetas[0].before(tarjetas[tarjetas.length - 1]);
    resultadoTarjetas.textContent = 'La última tarjeta se movió antes de la primera.';
});
