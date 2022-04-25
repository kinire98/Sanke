const ls = localStorage;
function recordNormal (puntuacion) {
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