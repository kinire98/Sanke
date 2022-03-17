function generarNumeroAleatorio (min,max) {
    return Math.round(Math.random()*((max-min)+min))
}


function ponerMazana (posicion) {
    let x = generarNumeroAleatorio(0,ancho)
    let y = generarNumeroAleatorio(0,alto)
    if ((x == posicion[0].ancho)&&(y == posicion[0].alto)) {
        return ponerMazana (posicion);
         
    } else {
            for (let i = 0; i < posicion.length - 1; i++) {
                if ((x == posicion[i].ancho) || (y == posicion[i].alto)) {
                    return ponerMazana (posicion);
                }
            }
            return [x,y]
    }
}