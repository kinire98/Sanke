/** 
 * @author kinire98
 */
function generarNumeroAleatorio (min,max) { //returns a random number
    return Math.round(Math.random()*(max-min)+min)
}


function ponerMazana (posicion) { //generates a new position for the apple
    let x = generarNumeroAleatorio(0,ancho) 
    let y = generarNumeroAleatorio(0,alto)
    for (let i = 0; i < posicion.length - 1; i++) { //If the position of the apple is the same as one of the snake position, it generates another apple
        if ((x == posicion[i].ancho) && (y == posicion[i].alto)) {
               return ponerMazana (posicion);
        }
    }
    return [x,y] //if not it returns the coordinates for the apple

}
function ponerMazanaTP (posicion,manzana) { //the same as the previous function but for the TP mode. Checks if the apple isn´t in the same position as the other apple
    let x = generarNumeroAleatorio(0,ancho)
    let y = generarNumeroAleatorio(0,alto)
    for (let i = 0; i < posicion.length - 1; i++) {
        if ((x == posicion[i].ancho) && (y == posicion[i].alto)) {
               return ponerMazanaTP (posicion,manzana);
        }
    }
    if ((x == manzana[0])&& (y == manzana [1])) {
        return ponerMazanaTP (posicion,manzana)
    }
    return [x,y] 

}