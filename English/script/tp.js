/** 
 * @author kinire98
 */
let posicionTP,
    manzanaTP,
    manzana2;
function tp () {
    posicionTP = [{ancho:Math.trunc(ancho/2),alto:Math.trunc(alto/2)}]; //Crea un arregla para la posición de la serpiente. Empieza en el medio
    manzanaTP = ponerMazana(posicionTP); //devueve la posición de la manzanaTP
    manzana2 = ponerMazanaTP(posicionTP,manzanaTP);
    seAcabo = 0;//Para acabar los bucles de render de la serpiente y que no se acumulen los mensajes de error en la consola
    document.getElementById('puntuacion').value = `${posicionTP.length - 1} pts.`//Establece el marccador en la longitud de la serpiente -1, es decir 0
    if (!localStorage.getItem('recordTP')) { //Comprueba el record en LocalStorage
        document.getElementById('puntuacion_alta').value = `${0} pts`
    } else {
        document.getElementById('puntuacion_alta').value = `${localStorage.getItem('recordTP')}  pts`
    } 
}
function bucleTP () {
    var movement = setInterval(() => {//Función pricipal del  modo de juego
        if (pausa === 0) {
            seAcabo = 0;
            let primerElemento = posicionTP[0]; //Variable para añadir un nuevo valor de la serpitente en caso de que esta aumente de tamaño al comer una manzanaTP. 
            //Se utiliza  para evitar introducir un referencia en el arreglo y duplicar posiciones 
            if (posicionTP.length == (ancho * alto) - 1) { //Comprueba si el jugador ha ganado, como son impares, para evitar un bucle infinito al final se quita la condición de victoria es un punto media
                pantallaVictoria() 
                clearInterval(movement)
                recordTp(posicionTP.length - 1); //Cuando se gana se comprueba si el resultado es mayor al record guardado
            }
            if (posicionTP.length > 1) { //Cuando la longitud de la serpiente sea mayor que 1, cada paoscion pasa a la anterior, borrando la última
                setTimeout(() => {
                    for (let i = posicionTP.length - 2; i >= 0; i--) {
                        posicionTP[i + 1].ancho = posicionTP[i].ancho;
                        posicionTP[i + 1].alto = posicionTP[i].alto;
                    }
                }, 0);
            } 
            
            if (direccion == 'arriba') {//Comprueba en que dirección tiene que avanzar la serpitente y cambia la coordenada correspondiente solo para la cabeza
                posicionTP[0].alto--; //Cuando va hacia arriba resta de la posición alto porque como la tabla se genera de arriba a abajo, hacia arriba están los valores más pequeños
            } else if (direccion == 'abajo') {
                posicionTP[0].alto++;
            } else if (direccion == 'izquierda') {
                posicionTP[0].ancho--;
            } else if (direccion == 'derecha'){
                posicionTP[0].ancho++;
            }
            
            if ((posicionTP[0].ancho == manzanaTP[0]) && (posicionTP[0].alto == manzanaTP[1])) { //Comprueba que la posición de la cabbeza es igual a la de una de las manzanas
                posicionTP[0].ancho = manzana2[0]; //Cambia la posición de la cabeza por la de la manzanaTP que no se ha comido
                posicionTP[0].alto = manzana2[1];
                posicionTP.unshift({ancho:primerElemento.ancho, alto:primerElemento.alto})//Duplica la cabeza de la serpiente
                manzanaTP = ponerMazana(posicionTP);//Vuelve a generar otras dos manzanas...
                manzana2 = ponerMazanaTP(posicionTP,manzanaTP);
                document.getElementById('puntuacion').value = `${posicionTP.length - 1} pts.` //...y cambia el marcador 
            } else if ((posicionTP[0].ancho == manzana2[0]) && (posicionTP[0].alto == manzana2[1])) { //lo mismo pero con la otra manzanaTP
                posicionTP[0].ancho = manzanaTP[0];
                posicionTP[0].alto = manzanaTP[1];
                posicionTP.unshift({ancho:primerElemento.ancho, alto:primerElemento.alto})
                manzanaTP = ponerMazana(posicionTP);
                manzana2 = ponerMazana(posicionTP);
                document.getElementById('puntuacion').value = `${posicionTP.length - 1} pts.` ;
            } else if(!document.getElementById(`${posicionTP[0].ancho}  ${posicionTP[0].alto}`)){ //Si no pasa por dónde la manzanaTP, comprueba si se ha salido del contenedor.  Si sale entonces no coincide con ninguna id, por lo tanto da nulo
                pantallaGameOver();
                clearInterval(movement);
                seAcabo = 1;
                recordTp(posicionTP.length - 1); //Cuando se pierde se comprueba si se ha superado el record
            } else { //Comprueba si la baeza de la serpiente se ha chocado con su cuerpo
               for (let i = 0; i <= posicionTP.length - 1; i++) {
                   if (
                       (posicionTP[i].ancho == posicionTP[0].ancho) && (posicionTP[i].alto == posicionTP[0].alto) && (posicionTP.length > 1) && (i != 0)
                       ) {
                           pantallaGameOver();
                           clearInterval(movement);
                           seAcabo = 1;
                           recordTp(posicionTP.length - 1);//Cuando se pierde se comprueba si se ha superado el record
                   }
               }
           }
           renderSerpitenteTP() //Renderiza la serpiente   
            
        } else { //Si se ha pausado el juego se para el intervalo
            clearInterval(movement)
        }
    } ,intervalo());
}
function renderSerpitenteTP () {
    for (let j = 0; j <= ancho; j++) {
        for(let y = 0; y <= alto; y++) {//Recorre todo el cuadro de juego y lo pinta con colores alternos
            if(seAcabo) { //comprueba que la variable para terminar no se haya activado, en cuyo caso se rompe el bucle
                break;
            } else if ((y + j) %2 == 0){
                document.getElementById(`${j}  ${y}`).style.background = '#C5D8A4';
            } else {
                document.getElementById(`${j}  ${y}`).style.background = '#C1F4C5';
            }
        }
        if(seAcabo) {
            break;
        }
    }
    if (!seAcabo) { //renderiza las dos manzanas
        document.getElementById(`${manzanaTP[0]}  ${manzanaTP[1]}`).style.background = '#9B0000';
        document.getElementById(`${manzana2[0]}  ${manzana2[1]}`).style.background = '#9B0000';
    }
    for (let i = 0; i <= posicionTP.length - 1; i++) {
        if (!document.getElementById(`${posicionTP[0].ancho}  ${posicionTP[0].alto}`)){ //y lo mismo con la serpiente. Pone la cabeza de un color distinto
            break;
        }
        if(seAcabo) {
            break;
        } else if (i != 0) {
            document.getElementById(`${posicionTP[i].ancho}  ${posicionTP[i].alto}`).style.background = colorCuerpo
        } else {
            document.getElementById(`${posicionTP[i].ancho}  ${posicionTP[i].alto}`).style.background = colorCabeza
        }
    }
}
    