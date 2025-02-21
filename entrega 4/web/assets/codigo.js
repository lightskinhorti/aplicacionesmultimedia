function revela(identificador){
    console.log("Enviando solicitud a:", "http://localhost/dame.php?opcion=" + identificador);
    
    fetch("http://localhost/dame.php?opcion=" + identificador)
    .then(function(result) {
        return result.json();
    })
    .then(function(datos){
        console.log("Datos recibidos:", datos);

        document.querySelector("#a .estadisticas").textContent = datos.a + "%";
        document.querySelector("#b .estadisticas").textContent = datos.b + "%";
    })
    .catch(function(error) {
        console.error("Error en fetch:", error);
    });
}
