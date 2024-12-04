<?php

require 'vendor/autoload.php';

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;
use Ratchet\App;

class WebSocketServer implements MessageComponentInterface {
    protected $clients;

    public function __construct() {
        $this->clients = new \SplObjectStorage; // Almacena las conexiones de los clientes
    }

    public function onOpen(ConnectionInterface $conn) {
        echo "Nuevo cliente conectado: {$conn->resourceId}\n";
        // Al conectar un cliente, se agrega a la lista de clientes
        $this->clients->attach($conn);
    }

    public function onMessage(ConnectionInterface $from, $msg) {
        echo "Mensaje recibido: $msg\n";

        // Enviar el mensaje a todos los demás clientes
        foreach ($this->clients as $client) {
            // Evita enviar el mensaje al cliente que lo envió
            if ($from != $client) {
                $client->send($msg); // Envía las coordenadas del jugador
            }
        }
    }

    public function onClose(ConnectionInterface $conn) {
        echo "Cliente desconectado: {$conn->resourceId}\n";
        $this->clients->detach($conn); // Elimina al cliente de la lista al desconectar
    }

    public function onError(ConnectionInterface $conn, \Exception $e) {
        echo "Error: {$e->getMessage()}\n";
        $conn->close();
    }
}

$app = new App('localhost', 3000);
$app->route('/chat', new WebSocketServer, array('*'));
$app->run();
