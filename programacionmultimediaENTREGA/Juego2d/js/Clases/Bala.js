class Bala {
  constructor() {
    // La posición inicial de la bala coincide con la del jugador
    this.x = jugador.x;
    this.y = jugador.y;

    // Velocidad horizontal fija de la bala
    this.vx = 10;

    // Dirección de la bala: 1 hacia la derecha, -1 hacia la izquierda
    this.direccion = jugador.direccion === "izquierda" ? -1 : 1;
  }

  // Método para actualizar la posición de la bala
  mueve() {
    this.x += this.direccion * this.vx; // Desplazamiento según la dirección y velocidad
  }

  // Método para dibujar la bala en el canvas
  dibuja() {
    contexto.beginPath(); // Inicia un nuevo trazo
    contexto.arc(
      this.x - desfase_global_x, // Ajuste de posición en x considerando el desfase global
      this.y,                    // Posición en y
      10,                        // Radio de la bala
      0,                         // Ángulo inicial
      Math.PI * 2                // Ángulo final (círculo completo)
    );
    contexto.fill();              // Rellena el círculo
  }
}
