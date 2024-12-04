/*/////////////////////////////////// DECLARACIONES INICIALES //////////////////////////////////////*/

// Variables globales en uso a través del juego
var gravedad = 1;  // La variable de gravedad define la aceleración hacia abajo del personaje
var salto = -16;    // La velocidad inicial del salto

var desfase_global_x = 0;  // Inicializa el desfase horizontal a 0

// Instancia del jugador humano
var jugador = new Jugador();

// Array para almacenar los NPCs y las balas
var misnpcs = [];
var balas = [];

// Definición del número de NPCs que aparecerán en el juego
var numeronpc = 12;

// Creación de las instancias de los NPCs en un bucle
for (let i = 0; i < numeronpc; i++) {
  misnpcs[i] = new Npc();  // Agrega una nueva instancia de Npc al array misnpcs
}

/*/////////////////////////////////// DECLARACIONES INICIALES //////////////////////////////////////*/
