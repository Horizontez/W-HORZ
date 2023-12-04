/* styles.css */

/* Fuente para el encabezado */
@font-face {
    font-family: 'Become';
    src: url('fonts/become.otf') format('opentype');
    /* Puedes agregar más formatos aquí para mejor compatibilidad */
}

/* Fuentes para el resto del texto (puedes cambiar estas fuentes según tus preferencias) */
body {
    font-family: 'Arial', sans-serif;
    /* Resto de tus estilos */
}

header {
    font-family: 'Become', sans-serif;
    padding: 20px;
    text-align: center;
}

/* Estilo específico para el logo dentro del encabezado */
header img {
    max-width: 100%;
    height: auto;
    width: 150px; /* Ajusta el tamaño según tus preferencias */
    margin: 0; /* Elimina cualquier margen predeterminado del logo */
}

nav {
    background-color: black;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
}

nav li {
    display: inline;
}

nav a {
    display: inline-block;
    padding: 14px 20px;
    color: white;
    text-decoration: none;
}

nav a:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
}

section {
    padding: 40px;
}

.contact-info {
    margin-top: 40px;
}

footer {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    text-align: center;
}

.section-content {
    max-width: 800px;
    margin: 0 auto;
}

img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
}

/* Cambios específicos para las secciones */

/* Cambios para la sección de "Inicio" */
section:nth-child(2) {
    text-align: center;
}

/* Cambios para la sección de "Créditos Hipotecarios" */
section:nth-child(3) {
    text-align: center;
    font-family: 'Oswald', sans-serif; /* Cambia la fuente según tus preferencias */
}

/* Agrega un estilo específico para el nuevo párrafo */
section:nth-child(3) p:last-child {
    font-style: italic;
}

/* Puedes agregar más estilos específicos para otras secciones según sea necesario */ 
