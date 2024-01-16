# Prototipo de Entregable Sistemas de Información
Este repositorio contiene la estructura fundamental para el modelaje y revisión del projecto final de la materia "Sistemas de Información" en la UNIMET, concerniente al [enunciado asignado](https://docs.google.com/document/d/1wGTyvOcMcAoVtbzkRbeYFlt2oV6tGNMp/edit?usp=sharing&ouid=113985957908146870222&rtpof=true&sd=true).

# Estructura de Trabajo
Este proyecto será desarrollado en la mayor medida posible en ReactJS y CSS; sin embargo de ser necesario implementar bases de datos SQL u otros, es válido. Los framework adicionales se instalarán a medida que sean requeridos (Tailwind, Bootstrap, etc.). Para este repositorio se han dividido las carpetas del siguiente modo: Fuente y Recursos.

## Fuente
Contendrá todo lo que concierne a código para el desarrollo de la página web. El archivo "main.jsx" será el archivo principal del programa, y todos los componentes de la página serán encapsulados en sus propias carpetas, que pueden contener sus propios sub-componentes, así como los archivos de estilo de CSS que requieran. Idealmente todo componente será autosuficiente, y recibirá instrucciones de su "superior" (es decir, el componente que lo importa) de modo que se pueda debuggear por si solo.

## Recursos
Corresponde a todos los recursos adicionales que requiera el proyecto, principalmente recursos gráficos. Los recursos importados directamente (ej: imágenes jpg, png, gif, etc.) corresponden a **Recursos Privados**; mientras que aquellos que dependen de una versión web y se acceden mediante un enlace (ej: archivos de Drive, anexos de Discord, etc.) corresponden a **Recursos Públicos**.