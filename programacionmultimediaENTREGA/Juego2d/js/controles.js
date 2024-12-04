// Manejo de controles para mover al jugador con las teclas del teclado
document.onkeydown = function(e) {
  console.log(e.key); // Muestra la tecla presionada en la consola para depuración

  // Movimiento hacia arriba (salto) solo si no está cayendo
  if (e.key === "ArrowUp" && !jugador.cayendo) {
    jugador.y -= 5; // Ajuste de la posición vertical para iniciar el salto
    jugador.vy = salto; // Asigna la velocidad de salto
  }

  // Movimiento hacia abajo (si se requiere)
  if (e.key === "ArrowDown") {
    jugador.y += 5; // Desciende al jugador
  }

  // Movimiento hacia la izquierda
  if (e.key === "ArrowLeft") {
    jugador.x -= 5; // Desplaza al jugador a la izquierda
    jugador.direccion = "izquierda"; // Cambia la dirección del jugador
  }

  // Movimiento hacia la derecha
  if (e.key === "ArrowRight") {
    jugador.x += 5; // Desplaza al jugador a la derecha
    jugador.direccion = "derecha"; // Cambia la dirección del jugador
  }

  // Disparo al presionar la barra espaciadora
  if (e.keyCode === 32) {
    console.log("Disparo ejecutado");
    balas.push(new Bala()); // Agrega una nueva instancia de bala al array de balas
  }
};
