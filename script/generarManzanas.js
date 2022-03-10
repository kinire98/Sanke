function generarNumeroAleatorio (min,max) {
    return Math.round(Math.random()*((max-min)+min))
}


function ponerMazana (ancho,alto,posicion) {
    let x = generarNumeroAleatorio(0,ancho)
    let y = generarNumeroAleatorio(0,alto)
    if ((x == posicion[posicion.length -1] [0])&&(y == posicion[posicion.length -1] [1])) {
        return ponerMazana (ancho,alto,posicion);
    } else {
        for (let i = 0; i < posicion.length - 1; i++) {
            if ((x == posicion[i].ancho) || (y == posicion[i].alto)) {
                return ponerMazana (ancho,alto,posicion);
            }
        }
        return [x,y]
    }
}