/** 
 * @author kinire98
 */
let direccion = null,//La dirección en la que tiene que ir la serpiente, Está puesta en nulo para que la serpiente no se mueva hasta que el jugador presione una de las flechas de direccioón
    pausa = 0,
    posicion,
    manzana,
    seAcabo;
let intervalo = () => { //Esta función cogiendo como valor la variable "velocidad"  cambia la velocidad
//Devuelve un valor que se usará como tiempo para el intervalo
    if (velocidad == 1) {
        return 100;
    } else if (velocidad == 2) {
        return 75;
    } else if (velocidad==3) {
        return 50;
    } else if (velocidad==4) {
        return 25;
    } else {
        return 12.5;
    }
}
function movimiento () {
    posicion = [{ancho:Math.trunc(ancho/2),alto:Math.trunc(alto/2)}]; //Crea un arregla para la posición de la serpiente. Empieza en el medio
    manzana = ponerMazana(posicion); //devueve la posición de la manzana
    seAcabo = 0;//Para acabar los bucles de render de la serpiente y que no se acumulen los mensajes de error en la consola
    document.getElementById('puntuacion').value = `${posicion.length - 1} pts.`//Establece el marccador en la longitud de la serpiente -1, es decir 0
    bucleMovimiento()
    if (!localStorage.getItem('record')) { //Comprueba si existe la variable de record
        document.getElementById('puntuacion_alta').value = `${0} pts`; // Si no escribe 0
    } else { //Si sí existe escribe el record
        document.getElementById('puntuacion_alta').value = `${localStorage.getItem('record')} pts`
    }
}
function bucleMovimiento () {
    var movement = setInterval(() => {//Función pricipal del juego 
        if (pausa == 0) {
            seAcabo = 0;
            let primerElemento = posicion[0]; //Variable para añadir un nuevo valor de la serpitente en caso de que esta aumente de tamaño al comer una manzana. 
            //Se utiliza  para evitar introducir un referencia en el arreglo y duplicar posiciones 
            if (posicion.length == (ancho * alto)) { //Comprueba si el jugador ha ganado
                pantallaVictoria();
                clearInterval(movement);
                recordNormal(posicion.length - 1); //funcion para comprobar si se ha batido el record anterior
            }
            if (posicion.length > 1) { //Cuando la longitud de la serpiente sea mayor que 1, cada paoscion pasa a la anterior, borrando la última
                setTimeout(() => {
                    for (let i = posicion.length - 2; i >= 0; i--) {
                        posicion[i + 1].ancho = posicion[i].ancho;
                        posicion[i + 1].alto = posicion[i].alto;
                    }
                }, 0);
            } 
            if (direccion == 'arriba') {//Comprueba en que dirección tiene que avanzar la serpitente y cambia la coordenada correspondiente solo para la cabeza
                posicion[0].alto--; //Cuando va hacia arriba resta de la posición alto porque como la tabla se genera de arriba a abajo, hacia arriba están los valores más pequeños
            } else if (direccion == 'abajo') {
                posicion[0].alto++;
            } else if (direccion == 'izquierda') {
                posicion[0].ancho--;
            } else if (direccion == 'derecha'){
                posicion[0].ancho++;
            }
            renderSerpitente() //Renderiza la serpiente
            
            if ((posicion[0].ancho == manzana[0]) && (posicion[0].alto == manzana[1])) { //Comprueba que la posición de la cabbeza es igual a la de la manzana
                posicion.unshift({ancho:primerElemento.ancho, alto:primerElemento.alto})//Duplica la cabeza de la serpiente
                manzana = ponerMazana(posicion);//Vuelve a generar otra manzana...
                document.getElementById('puntuacion').value = `${posicion.length - 1} pts.` //...y cambia el marcador 
            } else if(!document.getElementById(`${posicion[0].ancho}  ${posicion[0].alto}`)){ //Si no pasa por dónde la manzana, comprueba si se ha salido del contenedor.  Si sale entonces no coincide con ninguna id, por lo tanto da nulo
                pantallaGameOver();
                clearInterval(movement);
                seAcabo = 1;
                recordNormal(posicion.length - 1);
            } else { //Comprueba si la baeza de la serpiente se ha chocado con su cuerpo
               for (let i = 0; i <= posicion.length - 1; i++) {
                   if (
                       (posicion[i].ancho == posicion[0].ancho) && (posicion[i].alto == posicion[0].alto) && (posicion.length > 1) && (i != 0)
                       ) {
                           pantallaGameOver();
                           clearInterval(movement);
                           seAcabo = 1;
                           recordNormal(posicion.length - 1);//Si se pierde también se comprueba si se ha batido el récord
                   }
               }
            }
        } else {
            clearInterval(movement);
        }
    } ,intervalo());
}
function manejadorTeclas (e)  { //Comprueba y cambia la dirección de la variable de dirección según se presionan las teclas
        let tecla = e.key;
        if (tecla == 'Escape') {
            pausa = 1;
            pausar();
            document.getElementById('btn-control3').style.display = 'none'; //Oculta el boton de pausa
        } else if (!direccion && (tecla == 'ArrowDown' || tecla == 'ArrowUp' || tecla == 'ArrowRight' || tecla == 'ArrowLeft')) { //Para el principio, que se pueda ir en cualquier dirección
            document.getElementById('btn-control3').style.display = 'block';//Muestra el boton de pausa
            switch (tecla) {
                case 'ArrowLeft':
                    e.preventDefault();
                    direccion ='izquierda';
                    document.getElementById('info').style.opacity = '0'
                    break;
                case'ArrowRight':
                e.preventDefault();
                direccion = 'derecha';
                document.getElementById('info').style.opacity = '0'
                break;
                case 'ArrowUp':
                    e.preventDefault();
                    direccion = 'arriba';
                    document.getElementById('info').style.opacity = '0'
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    direccion = 'abajo';
                    document.getElementById('info').style.opacity = '0'
                    break;
                default:
                    break;
                }
        } else if (tecla == 'ArrowDown' || tecla == 'ArrowUp' || tecla == 'ArrowRight' || tecla == 'ArrowLeft'){ //Y cuando se mueva que solo pueda ir en perpendicular
            document.getElementById('btn-control3').style.display = 'block';//Muestra el boton de pausa
            if (direccion == 'arriba' || direccion == 'abajo') {
                switch (tecla) {
                    case 'ArrowLeft':
                        e.preventDefault();
                        direccion ='izquierda';
                        break;
                    case'ArrowRight':
                        e.preventDefault();
                        direccion = 'derecha';
                        break;
                    default:
                        break;
                }
            } else if (direccion == 'izquierda' || direccion == 'derecha') {
                document.getElementById('btn-control3').style.display = 'block';//Muestra el boton de pausa
                switch (tecla) {
                    case 'ArrowUp':
                        e.preventDefault();
                        direccion = 'arriba';
                        break;
                    case 'ArrowDown':
                        e.preventDefault();
                        direccion = 'abajo';
                        break;
                    default:
                        break;
                }
            }
        }
}
function renderSerpitente () {
    for (let j = 0; j <= ancho; j++) {
        for(let y = 0; y <= alto; y++) {//Recorre todo el cuadro de juego y lo pinta con colores alternos
            if(seAcabo) { //comprueba que la variable para terminar no se haya activado, en cuyo caso se rompe el bucle
                console.log('renderseAcabo')
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
    if (!seAcabo) { //lo mismo con la manzana
        document.getElementById(`${manzana[0]}  ${manzana[1]}`).style.background = '#9B0000';
    }
    for (let i = 0; i <= posicion.length - 1; i++) {
        if (!document.getElementById(`${posicion[0].ancho}  ${posicion[0].alto}`)){ //y lo mismo con la serpiente. Pone la cabeza de un color distinto
            break;
        }
        if(seAcabo) {
            break;
        } else if (i != 0) {
            document.getElementById(`${posicion[i].ancho}  ${posicion[i].alto}`).style.background = colorCuerpo
        } else {
            document.getElementById(`${posicion[i].ancho}  ${posicion[i].alto}`).style.background = colorCabeza
        }
    }
}
