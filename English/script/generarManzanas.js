/** 
 * @author kinire98
 */
function generarNumeroAleatorio (min,max) { //Devuelve un número aleatoria, así la posición de la manzana no sigue ningún patrón
    return Math.round(Math.random()*(max-min)+min)
}


function ponerMazana (posicion) { //Esta función genera una nueva posición para la manzana. Se ejecuta cuando la cabeza de la serpiente pasa por encima de la manzana.
    //También se ejecuta solo al principio del juego
    let x = generarNumeroAleatorio(0,ancho) // proporciona valores aleatorios para las coordenadas de la manzana, entre 0 y el ancho o el alto del área de juego
    let y = generarNumeroAleatorio(0,alto)
    for (let i = 0; i < posicion.length - 1; i++) { // Este bucle comprueba que la manzana no aparezca en dónde está en ese momento la serpiente
        //si la posicion de la manzana es  igual a una de la serpiente, se devuelve la ejecución de la misma función de nuevo para que se pueda volver a hallar la posición de la manzana
        if ((x == posicion[i].ancho) && (y == posicion[i].alto)) {
               return ponerMazana (posicion);
        }
    }
    return [x,y] //Si no es igual se devuelven las coordenadas de las manzana

}
function ponerMazanaTP (posicion,manzana) { //Esta función genera una nueva posición para la manzana. Se ejecuta cuando la cabeza de la serpiente pasa por encima de la manzana.
    //También se ejecuta solo al principio del juego
    let x = generarNumeroAleatorio(0,ancho) // proporciona valores aleatorios para las coordenadas de la manzana, entre 0 y el ancho o el alto del área de juego
    let y = generarNumeroAleatorio(0,alto)
    for (let i = 0; i < posicion.length - 1; i++) { // Este bucle comprueba que la manzana no aparezca en dónde está en ese momento la serpiente
        //si la posicion de la manzana es  igual a una de la serpiente, se devuelve la ejecución de la misma función de nuevo para que se pueda volver a hallar la posición de la manzana
        if ((x == posicion[i].ancho) && (y == posicion[i].alto)) {
               return ponerMazanaTP (posicion,manzana);
        }
    }
    if ((x == manzana[0])&& (y == manzana [1])) {
        return ponerMazanaTP (posicion,manzana)
    }
    return [x,y] //Si no es igual se devuelven las coordenadas de las manzana

}