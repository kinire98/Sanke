/** 
 * @author kinire98
 */
function generarNumeroAleatorio (min,max) { //returns a random number, so the position of the new apple doesn't follow any pattern
    return Math.round(Math.random()*(max-min)+min)
}


function ponerMazana (posicion) { //thid function generates a new position for the apple. It only executes when the head of the snake goes over the apple
    //It also executes at the beginning of the game
    let x = generarNumeroAleatorio(0,ancho) //give random values for the coordinates of the apple, between 0 and the height or width  of the area of play
    let y = generarNumeroAleatorio(0,alto)
    for (let i = 0; i < posicion.length - 1; i++) {//This loop checks that the apple doesn't appears where the snake is
        //if the position of the apple is equal to some of the snake, it return the execution of the same function again so you can find a new adecuate position for the apple
        if ((x == posicion[i].ancho) && (y == posicion[i].alto)) {
            return ponerMazana (posicion);
        }
    }
    return [x,y] //If the position of the apple isn't equal to any of the snake, the coordinates of the apple are returned

}