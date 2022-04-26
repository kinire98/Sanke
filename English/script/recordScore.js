const ls = localStorage;//Checks if the record was beaten
function recordNormal (puntuacion) { // if the variable exists in localStorage it changes if the score is bigger than the value socred. If it doesn't exist it simply stores de value there
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