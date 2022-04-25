const ls = localStorage;// Se encarga de guardar las puntuaciones más altas
function recordNormal (puntuacion) { //Crea una variable de localstorage, a la que le da el valor de 0, cuando la puntuacion del final de la partida sea mayor que la variable de localstorage guardada se cambia
    if (puntuacion === null) ls.setItem('record',0)
    if (puntuacion > ls.getItem('record')) ls.setItem('record',puntuacion)
}
function recordPac (puntuacion) {
    if (puntuacion === null) ls.setItem('recordPaz',0)
    if (puntuacion > ls.getItem('recordPaz')) ls.setItem('recordPaz',puntuacion);
}

function recordTp (puntuacion) {
    if (puntuacion === null) ls.setItem('recordTP',0)
    if (puntuacion > ls.getItem('recordTP')) ls.setItem('recordTP',puntuacion)
}