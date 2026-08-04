# Diseño: especificidad, display y modelo de caja

## Objetivo

Ampliar el bloque CSS de la guía con tres lecciones introductorias y
progresivas sobre especificidad, comportamiento inline/block y modelo de caja.
La explicación, los ejemplos reales, las reglas activas y el efecto visible
deben coincidir.

## Alcance

- Modificar únicamente `index.html` y `styles.css` durante la implementación.
- Agregar las secciones 26, 27 y 28 dentro del bloque CSS existente.
- Agregar sus tres enlaces a la navegación de contenido CSS.
- Incluir exactamente un ejemplo real con un atributo `style` para demostrar
  un estilo inline.
- No agregar JavaScript ni nuevas dependencias.
- No reestructurar las lecciones 1 a 25.

## Sección 26: especificidad

La lección explicará que la especificidad ayuda al navegador a elegir entre
reglas que coinciden con el mismo elemento. Presentará esta jerarquía de mayor a
menor prioridad:

1. estilo inline: `1-0-0-0`;
2. selector por ID: `0-1-0-0`;
3. clase, pseudo-clase o atributo: `0-0-1-0`;
4. elemento o pseudo-elemento: `0-0-0-1`.

El ejemplo real tendrá un elemento con nombre de etiqueta, atributo, clase, ID
y `style=""`. Las reglas correspondientes estarán activas y acotadas al ejemplo.
El texto explicará que el estilo inline gana en esa demostración, pero que en un
proyecto se recomienda mantener los estilos generales en la hoja CSS.

También se explicará que cada aparición suma dentro de su nivel y que, cuando
dos reglas tienen la misma especificidad, normalmente gana la que aparece más
tarde. `!important`, capas de cascada y casos avanzados quedan fuera del alcance.

## Sección 27: elementos inline y block

La lección usará elementos reales para comparar los dos comportamientos:

- un elemento block comienza en una línea nueva y ocupa el ancho disponible;
- un elemento inline permanece en la línea y ocupa el espacio necesario para
  su contenido.

Se usarán clases demostrativas específicas para que las reglas no cambien otros
`div` o `span` de la guía. El ejemplo mostrará bordes y fondos que permitan
observar el espacio ocupado por cada elemento. La sección incluirá el HTML
objetivo, las reglas CSS activas y una instrucción “Qué observar”.

## Sección 28: modelo de caja

La lección mostrará dos demostraciones con las mismas medidas declaradas:

- `box-sizing: content-box`, comportamiento inicial de CSS;
- `box-sizing: border-box`.

Cada dibujo identificará `content`, `padding`, `border` y `margin`. El espacio de
margen se representará mediante un contenedor de apoyo y se aclarará que el
margen es transparente: el color visible pertenece al área que está detrás.

La comparación incluirá el cálculo numérico del ancho:

- en `content-box`, el ancho declarado corresponde al contenido; padding y
  border se suman hacia afuera;
- en `border-box`, el ancho declarado incluye content, padding y border;
- el margin queda fuera del ancho declarado en ambos casos.

Las cajas aparecerán lado a lado cuando exista espacio suficiente y se apilarán
en pantallas angostas. No deberán producir desplazamiento horizontal a 390 px.

## Integración visual

Las secciones conservarán `.paso` y permanecerán dentro de `.bloque-css`. Los
colores de las capas del modelo de caja tendrán contraste suficiente y etiquetas
textuales, de modo que la explicación no dependa solo del color.

Los nuevos selectores se limitarán a clases e identificadores demostrativos.
Solo el ejemplo autorizado de especificidad utilizará `style=""`.

## Criterios de aceptación

- La navegación conduce a las secciones 26, 27 y 28.
- Existen 28 secciones `.paso` y todos sus IDs son únicos.
- El ejemplo de especificidad muestra y explica todos los niveles solicitados.
- Existe exactamente un atributo `style` y pertenece al ejemplo inline.
- Las demostraciones inline y block reflejan correctamente su comportamiento.
- Las dos cajas identifican content, padding, border y margin.
- Los cálculos de `content-box` y `border-box` coinciden con las medidas activas.
- Los bloques CSS mostrados coinciden con las reglas activas de `styles.css`.
- HTML y CSS pasan los validadores W3C.
- No existen enlaces internos rotos, errores de consola ni JavaScript.
- La página no presenta desbordamiento horizontal a 390 px.
- `git diff --check` termina sin errores.
