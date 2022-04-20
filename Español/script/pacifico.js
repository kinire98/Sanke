/** 
 * @author kinire98
 */
let posicionPaz,
    manzanaPaz,
    seAcaboPaz;
function pacifico () {
    posicionPaz = [{ancho:Math.trunc(ancho/2),alto:Math.trunc(alto/2)}] //Crea un arregla para la posición de la serpiente. Empieza en el medio
    manzanaPaz = ponerMazana(posicionPaz) //devueve la posición de la manzanaPaz
    seAcaboPaz = 0//Para acabar los bucles de render de la serpiente y que no se acumulen los mensajes de error en la consola
    document.getElementById('puntuacion').value = `${posicionPaz.length - 1} pts.`//Establece el marccador en la longitud de la serpiente -1, es decir 0
    buclePacifico();
}
function buclePacifico () {
    var movement = setInterval(() => {//Función pricipal del juego 
        if (pausa === 0) {
            seAcaboPaz = 0;
            let primerElemento = posicionPaz[0]; //Variable para añadir un nuevo valor de la serpitente en caso de que esta aumente de tamaño al comer una manzanaPaz. 
            //Se utiliza  para evitar introducir un referencia en el arreglo y duplicar posiciones 
            if (posicionPaz.length == (ancho * alto)) { //Comprueba si el jugador ha ganado
                pantallaVictoria()
                clearInterval(movement)
            }
            if (posicionPaz.length > 1) { //Cuando la longitud de la serpiente sea mayor que 1, cada paoscion pasa a la anterior, borrando la última
                setTimeout(() => {
                    for (let i = posicionPaz.length - 2; i >= 0; i--) {
                        posicionPaz[i + 1].ancho = posicionPaz[i].ancho;
                        posicionPaz[i + 1].alto = posicionPaz[i].alto;
                    }
                }, 0);
                    
            } 
            
            if (direccion == 'arriba') {//Comprueba en que dirección tiene que avanzar la serpitente y cambia la coordenada correspondiente solo para la cabeza
                posicionPaz[0].alto--; //Cuando va hacia arriba resta de la posición alto porque como la tabla se genera de arriba a abajo, hacia arriba están los valores más pequeños
            } else if (direccion == 'abajo') {
                posicionPaz[0].alto++;
            } else if (direccion == 'izquierda') {
                posicionPaz[0].ancho--;
            } else if (direccion == 'derecha'){
                posicionPaz[0].ancho++;
            }
            if ((posicionPaz[0].ancho == manzanaPaz[0]) && (posicionPaz[0].alto == manzanaPaz[1])) { //Comprueba que la posición de la cabbeza es igual a la de la manzanaPaz
                posicionPaz.unshift({ancho:primerElemento.ancho, alto:primerElemento.alto})//Duplica la cabeza de la serpiente
                manzanaPaz = ponerMazana(posicionPaz);//Vuelve a generar otra manzanaPaz...
                document.getElementById('puntuacion').value = `${posicionPaz.length - 1} pts.` //...y cambia el marcador 
            } else if(!document.getElementById(`${posicionPaz[0].ancho}  ${posicionPaz[0].alto}`)){ //Si no pasa por dónde la manzanaPaz, comprueba si se ha salido del contenedor.  Si sale entonces no coincide con ninguna id, por lo tanto se ha salido
                if (posicionPaz [0].ancho < 0) { //Comprueba por dónde ha salido la cabeza de la serpiente y la pasa  al lado que no ha salido
                    posicionPaz[0].ancho = ancho;
                } else if (posicionPaz[0].ancho > ancho) {
                    posicionPaz[0].ancho = 0;
                } else if (posicionPaz [0].alto < 0) {
                    posicionPaz[0].alto = alto;
                } else if (posicionPaz[0].alto > alto) {
                    posicionPaz[0].alto = 0;
                }
            }
            renderSerpitentePacifico(); //Renderiza la serpiente
        } else {
            clearInterval(movement);
        }
        } ,intervalo());
}
function renderSerpitentePacifico () {
    for (let j = 0; j <= ancho; j++) {
        for(let y = 0; y <= alto; y++) {//Recorre todo el cuadro de juego y lo pinta con colores alternos
            if ((y + j) %2 == 0){
                document.getElementById(`${j}  ${y}`).style.background = '#C5D8A4';
            } else {
                document.getElementById(`${j}  ${y}`).style.background = '#C1F4C5';
            }
        }
        if(seAcaboPaz) {
            break;
        }
    }
    if (!seAcaboPaz) { //lo mismo con la manzanaPaz
        document.getElementById(`${manzanaPaz[0]}  ${manzanaPaz[1]}`).style.background = '#9B0000';
    }
    for (let i = 0; i <= posicionPaz.length - 1; i++) {
        if (!document.getElementById(`${posicionPaz[0].ancho}  ${posicionPaz[0].alto}`)){ //y lo mismo con la serpiente. Pone la cabeza de un color distinto
            break;
        }
        if (i != 0) {
            document.getElementById(`${posicionPaz[i].ancho}  ${posicionPaz[i].alto}`).style.background = colorCuerpo
        } else {
            document.getElementById(`${posicionPaz[i].ancho}  ${posicionPaz[i].alto}`).style.background = colorCabeza
        }
    }
    if (document.getElementById(`${posicionPaz[0].ancho}  ${posicionPaz[0].alto}`)){ //Se vuelve a ejecutar el color de la cabeza para que aparezca por encima del cuerpo de la serpiente
        document.getElementById(`${posicionPaz[0].ancho}  ${posicionPaz[0].alto}`).style.background = colorCabeza
    }
}
