# Diseño: lección de pseudo-clases y pseudo-elementos

## Objetivo

Ampliar la guía acumulativa de HTML y CSS con contenido introductorio, útil y
práctico sobre pseudo-clases y pseudo-elementos. La ampliación debe mantener la
misma dificultad, estructura visual y forma de enseñanza del contenido actual.

## Alcance

- Modificar únicamente `index.html` y `styles.css` durante la implementación.
- Reorganizar las reglas de pseudo-selectores agregadas localmente al final de
  `styles.css`.
- Conservar el campo de apellido deshabilitado como ejemplo real de
  `:disabled`.
- Agregar la navegación y las secciones nuevas después del contenido CSS
  existente.
- No agregar JavaScript ni estilos inline.

## Estructura pedagógica

Las secciones continuarán la numeración después de la sección 17 y avanzarán
desde la idea general hacia ejemplos concretos:

1. Diferencia entre pseudo-clases (`:`) y pseudo-elementos (`::`).
2. Interacción con `:hover` y `:focus`.
3. Estados de formularios con `:disabled`, `:not(:disabled)` y `:checked`.
4. Posición de elementos con `:first-child`, `:last-child` y `:nth-child()`.
5. Exclusión de elementos mediante `:not()`.
6. Partes de un elemento con `::first-letter`, `::placeholder` y `::marker`.
7. Contenido generado con `::before` y `::after`, explicando la necesidad de
   la propiedad `content`.
8. Resumen y ejercicios breves de aplicación.

Cada concepto tendrá cuatro piezas coherentes:

- una explicación breve en lenguaje sencillo;
- un elemento HTML real con el cual interactuar;
- la regla CSS exacta que está activa en `styles.css`;
- una indicación concreta de qué debe observar el estudiante.

## Integración HTML

La navegación “Contenido CSS” incorporará enlaces internos a las nuevas
secciones. Los ejemplos usarán clases dedicadas, con nombres descriptivos, para
que el estudiante pueda relacionar el HTML con su selector CSS.

Los ejemplos interactivos incluirán enlaces, campos de formulario, una casilla
de verificación, listas y párrafos. No dependerán de JavaScript. Todos los `id`
serán únicos y cada `label` estará asociado con su control.

## Integración CSS

Las reglas actuales que actúan globalmente sobre todos los enlaces, títulos,
campos y listas serán reemplazadas por selectores limitados a los ejemplos de la
lección. Esto evitará que una demostración altere contenido anterior y permitirá
identificar con precisión el efecto de cada selector.

Los colores conservarán contraste legible y el foco seguirá siendo visible. Los
cambios de interacción no producirán saltos fuertes de tamaño ni movimiento del
contenido. Los pseudo-elementos `::before` y `::after` usarán `content` y su
contenido generado será decorativo, no información indispensable.

## Criterios de aceptación

- La navegación conduce a todas las secciones nuevas.
- Cada explicación, ejemplo HTML, regla mostrada y efecto visible coinciden.
- Los estilos nuevos solo afectan las demostraciones correspondientes.
- La página funciona sin JavaScript y sin errores de consola.
- El HTML y el CSS pasan validación formal.
- No existen identificadores duplicados ni enlaces internos rotos.
- La página no presenta desbordamiento horizontal en un viewport de 390 px.
- `git diff --check` no informa errores de espacios ni finales de línea.

## Fuera de alcance

- Pseudo-clases avanzadas como `:has()`, `:is()` o `:where()`.
- Animaciones, transiciones complejas o comportamiento con JavaScript.
- Reestructurar las lecciones anteriores que no estén relacionadas con estos
  ejemplos.
