// Función que calcula la distancia entre dos puntos utilizando la fórmula de Pitágoras
function calculateDistance(x1, y1, x2, y2) {
    // Calcula las diferencias en las coordenadas x y y
    let dx = x2 - x1;
    let dy = y2 - y1;

    // Aplica la fórmula de Pitágoras para obtener la distancia entre los puntos
    let distance = Math.sqrt(dx * dx + dy * dy);

    return distance;  // Retorna la distancia calculada
}
