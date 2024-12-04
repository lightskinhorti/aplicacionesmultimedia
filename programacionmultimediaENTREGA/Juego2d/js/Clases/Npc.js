class Npc {
  constructor() {
    // Posición aleatoria inicial en los ejes x e y
    this.x = Math.random() * 2048;
    this.y = Math.random() * 512;

    // Ángulo de movimiento aleatorio entre 0 y 2π radianes
    this.angulo = Math.random() * Math.PI * 2;
    
    // Velocidad vertical inicial (no usada en este ejemplo, pero lista para futuros cambios)
    this.vy = 0;
  }

  // Método que detecta colisiones con los bordes y ajusta el ángulo para rebotar
  rebota() {
    // Colisión con el borde izquierdo
    if (this.x < 0) {
      this.x = 10;
      this.angulo += Math.PI;
    }
    
    // Colisión con el borde derecho
    if (this.x > 512) {
      this.x = 502;
      this.angulo += Math.PI;
    }
    
    // Colisión con el borde superior
    if (this.y < 0) {
      this.y = 0;
      this.angulo += Math.PI;
    }
    
    // Colisión con el borde inferior
    if (this.y > 512) {
      this.y = 502;
      this.angulo += Math.PI;
    }
  }

  // Método que gestiona el movimiento del NPC según su ángulo
  mueve() {
    this.x += Math.cos(this.angulo); // Movimiento horizontal
    this.y += Math.sin(this.angulo); // Movimiento vertical
  }

  // Método para dibujar el NPC en el canvas
  dibuja() {
    contexto.drawImage(imagenmalo, this.x - desfase_global_x, this.y);
  }
}
