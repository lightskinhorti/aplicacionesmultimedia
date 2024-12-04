var temporizador = setTimeout(bucle, 1000);

function bucle() {
  // Control del desplazamiento horizontal según la posición del jugador
  if (jugador.x + desfase_global_x > 400) { 
    desfase_global_x += 2; // Desplazamiento hacia la izquierda
  }
  if (jugador.x + desfase_global_x < 120) { 
    desfase_global_x -= 2; // Desplazamiento hacia la derecha
  }

  // Limpieza de los lienzos antes de redibujar
  contexto.clearRect(0, 0, 512, 512);
  contexto2.clearRect(0, 0, 512, 512);
  contextoplataformas.clearRect(0, 0, 512, 512);

  // Redibuja las plataformas con el desplazamiento actualizado
  contextoplataformas.drawImage(imagennivel, 0 - desfase_global_x, 0, 2048, 512);

  // Mover, rebotar y dibujar todos los NPCs
  misnpcs.forEach(npc => {
    npc.mueve();
    npc.rebota();
    npc.dibuja();
  });

  // Mover y dibujar todas las balas
  balas.forEach(bala => {
    bala.mueve();
    bala.dibuja();
  });

  // Comprobar colisiones entre balas y NPCs
  for (let i = 0; i < balas.length; i++) {
    for (let j = 0; j < misnpcs.length; j++) {
      if (calculateDistance(balas[i].x, balas[i].y, misnpcs[j].x, misnpcs[j].y) < 20) {
        misnpcs.splice(j, 1); // Elimina el NPC si hay colisión
      }
    }
  }

  // Mover y dibujar al jugador
  jugador.mueve();
  jugador.dibuja();

  // Verificar si el jugador ha perdido (colisión con zona peligrosa)
  var datos = contexto.getImageData(jugador.x, jugador.y, 1, 1).data;
  if (datos[3] === 255) { // Comprobación del canal alpha
    window.location.reload(); // Recarga la página si pierde
  }

  // Reiniciar el temporizador para el siguiente bucle
  clearTimeout(temporizador);
  temporizador = setTimeout(bucle, 30);
}
