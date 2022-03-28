function tp () {
    let posicion = [{ancho:Math.trunc(ancho/2),alto:Math.trunc(alto/2)}], //Crea un arregla para la posición de la serpiente. Empieza en el medio
        manzana = ponerMazana(posicion), //devueve la posición de la manzana
        manzana2 = ponerMazana(posicion);
    var seAcabo = 0;//Para acabar los bucles de render de la serpiente y que no se acumulen los mensajes de error en la consola
        document.getElementById('puntuacion').value = `${posicion.length - 1} pts.`//Establece el marccador en la longitud de la serpiente -1, es decir 0
        var movement = setInterval(() => {//Función pricipal del juego 
            let primerElemento = posicion[0]; //Variable para añadir un nuevo valor de la serpitente en caso de que esta aumente de tamaño al comer una manzana. 
            //Se utiliza  para evitar introducir un referencia en el arreglo y duplicar posiciones 
            if (posicion.length == (ancho * alto)) { //Comprueba si el jugador ha ganado
                pantallaVictoria()
                clearInterval(movement)
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
            
            if ((posicion[0].ancho == manzana[0]) && (posicion[0].alto == manzana[1])) { //Comprueba que la posición de la cabbeza es igual a la de la manzana
                posicion[0].ancho = manzana2[0];
                posicion[0].alto = manzana2[1];
                posicion.unshift({ancho:primerElemento.ancho, alto:primerElemento.alto})//Duplica la cabeza de la serpiente
                manzana = ponerMazana(posicion);//Vuelve a generar otra manzana...
                manzana2 = ponerMazana(posicion);
                document.getElementById('puntuacion').value = `${posicion.length - 1} pts.` //...y cambia el marcador 
            } else if ((posicion[0].ancho == manzana2[0]) && (posicion[0].alto == manzana2[1])) {
                posicion[0].ancho = manzana[0];
                posicion[0].alto = manzana[1];
                posicion.unshift({ancho:primerElemento.ancho, alto:primerElemento.alto})//Duplica la cabeza de la serpiente
                manzana = ponerMazana(posicion);//Vuelve a generar otra manzana...
                manzana2 = ponerMazana(posicion);
                document.getElementById('puntuacion').value = `${posicion.length - 1} pts.` //...y cambia el marcador 
            } else if(!document.getElementById(`${posicion[0].ancho}  ${posicion[0].alto}`)){ //Si no pasa por dónde la manzana, comprueba si se ha salido del contenedor.  Si sale entonces no coincide con ninguna id, por lo tanto da nulo
                pantallaGameOver();
                clearInterval(movement);
                seAcabo = 1;
            } else { //Comprueba si la baeza de la serpiente se ha chocado con su cuerpo
               for (let i = 0; i <= posicion.length - 1; i++) {
                   if (
                       (posicion[i].ancho == posicion[0].ancho) && (posicion[i].alto == posicion[0].alto) && (posicion.length > 1) && (i != 0)
                       ) {
                           pantallaGameOver();
                           clearInterval(movement);
                           seAcabo = 1;
                   }
               }
           }
           renderSerpitenteTP(posicion,manzana,manzana2,seAcabo) //Renderiza la serpiente   
            
        } ,intervalo());
    }
    function renderSerpitenteTP (posicion,manzana,manzana2,seAcabo) {
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
        if (!seAcabo) { //lo mismo con la manzana
            document.getElementById(`${manzana[0]}  ${manzana[1]}`).style.background = '#9B0000';
            document.getElementById(`${manzana2[0]}  ${manzana2[1]}`).style.background = '#9B0000';
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
    