class Jugador {
  constructor() {
    // Posición inicial del jugador
    this.x = 256;
    this.y = 256;

    // Velocidad vertical y estado de caída
    this.vy = 0;
    this.cayendo = true;

    // Dirección inicial ("izquierda" o "derecha")
    this.direccion = "izquierda";
  }

  // Método para dibujar al jugador en el canvas
  dibuja() {
    // Selecciona la porción de la imagen según la dirección del jugador
    const sourceX = this.direccion === "izquierda" ? 0 : 35;
    
    contexto.drawImage(
      imagenbueno,
      sourceX, 0, 35, 35,                  // Parte de la imagen a usar (x, y, ancho, alto)
      this.x - desfase_global_x, this.y,   // Posición en el canvas (x, y)
      35, 35                               // Tamaño del dibujo (ancho, alto)
    );
  }

  // Método para gestionar el movimiento del jugador
  mueve() {
    if (this.cayendo) {
      this.vy += gravedad;                 // Aumenta la velocidad por efecto de la gravedad
      this.y += this.vy;                   // Actualiza la posición vertical
    }

    this.muere();                          // Verifica si el jugador ha muerto
    this.colisionaPlataformas();           // Verifica colisiones con plataformas
  }

  // Método para manejar la muerte del jugador
  muere() {
    if (this.y > 512) {                    // Si cae por debajo del límite inferior
      window.location.reload();            // Reinicia la página para reiniciar el juego
    }
  }

  // Método para detectar colisión con plataformas
  colisionaPlataformas() {
    const pixel = contextoplataformas.getImageData(
      this.x - desfase_global_x,
      this.y + 35,
      1,
      1
    );

    // Si el valor alfa del píxel es mayor que 0, hay colisión
    this.cayendo = pixel.data[3] <= 0;
  }
}
