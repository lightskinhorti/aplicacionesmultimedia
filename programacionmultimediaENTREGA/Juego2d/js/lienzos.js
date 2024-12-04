/*/////////////////////////////////// LIENZOS //////////////////////////////////////////*/

// Selecciona el primer lienzo (canvas) y configura su contexto para dibujar en 2D
const lienzo = document.querySelector("#lienzo1");
const contexto = lienzo.getContext("2d");
lienzo.width = 512;  // Establece la anchura del lienzo
lienzo.height = 512; // Establece la altura del lienzo

// Configura el segundo lienzo y su contexto
const lienzo2 = document.querySelector("#lienzo2");
const contexto2 = lienzo2.getContext("2d");
lienzo2.width = 512;
lienzo2.height = 512;
contexto2.fillStyle = "green";  // Define el color de relleno por defecto

// Configura el lienzo de plataformas y su contexto
const lienzoplataformas = document.querySelector("#lienzoplataformas");
const contextoplataformas = lienzoplataformas.getContext("2d");
contextoplataformas.imageSmoothingEnabled = false; // Desactiva el suavizado de imágenes
lienzoplataformas.width = 512;
lienzoplataformas.height = 512;
lienzoplataformas.fillStyle = "green";  // Establece el color de relleno de las plataformas

// Configura el lienzo de fondo y su contexto
const lienzofondo = document.querySelector("#lienzofondo");
const contextofondo = lienzofondo.getContext("2d");
lienzofondo.width = 512;
lienzofondo.height = 512;
lienzofondo.fillStyle = "green";  // Establece el color de relleno para el fondo

/*/////////////////////////////////// LIENZOS //////////////////////////////////////////*/
