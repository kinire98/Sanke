function generarNumeroAleatorio (min,max) {
    return Math.round(Math.random()*((max-min)+min))
}


function ponerMazana (ancho,alto,posicion) {
    let x = generarNumeroAleatorio(0,ancho)
    let y = generarNumeroAleatorio(0,alto)
    if ((x == posicion[posicion.length -1] [0])&&(y == posicion[posicion.length -1] [1])) {
        return ponerMazana (ancho,alto,posicion);
    } else {
        return [x,y]
    }
}