/*////////////////////////////// IMÁGENES //////////////////////////////*/

// Carga de la imagen del jugador (bueno)
var imagenbueno = new Image(); // Creación del objeto imagen
imagenbueno.src = "./img/spritesheetbueno.png"; // Ruta de la imagen del jugador

// Carga de la imagen del NPC (malo)
var imagenmalo = new Image();
imagenmalo.src = "./img/malo.png"; // Ruta de la imagen del NPC

// Carga del fondo
var imagenfondo = new Image();
imagenfondo.src = "./img/fondo.jpg"; // Ruta de la imagen de fondo
imagenfondo.onload = function() { 
  contextofondo.drawImage(imagenfondo, 0, 0); // Dibuja la imagen en el lienzo de fondo
};

// Carga de la imagen del nivel (plataformas)
var imagennivel = new Image();
imagennivel.src = "./img/nivel1.png"; // Ruta de la imagen del nivel
imagennivel.onload = function() {
  contextoplataformas.imageSmoothingEnabled = false; // Desactiva el suavizado para pixel art
  console.log("Imagen del nivel cargada correctamente");
  contextoplataformas.drawImage(imagennivel, 0, 0, 2048, 512); // Dibuja la imagen del nivel
};

/*////////////////////////////// IMÁGENES //////////////////////////////*/
