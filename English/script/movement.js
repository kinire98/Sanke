/** 
 * @author kinire98
 */
let direccion = null,//Direction of the snake. It is in null so the player can choose where direction he starts moving towards
    pausa = 0,
    posicion,
    manzana,
    seAcabo;
let intervalo = () => { //Returns a value that is going to be used ass time for the interval
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
    posicion = [{ancho:Math.trunc(ancho/2),alto:Math.trunc(alto/2)}]; //Creates an array for the position of the snake. It starts in the middle
    manzana = ponerMazana(posicion); //Gets the position of the apple
    seAcabo = 0;//It finishes the snake render
    document.getElementById('puntuacion').value = `${posicion.length - 1} pts.`//The score = snake.length - 1 = 0
    bucleMovimiento()
    if (!localStorage.getItem('record')) { //Checks if the variable of the record exists
        document.getElementById('puntuacion_alta').value = `${0} pts`; // If not writes 0
    } else { //If yes it writes the value inside
        document.getElementById('puntuacion_alta').value = `${localStorage.getItem('record')} pts`
    }
}
function bucleMovimiento () {
    var movement = setInterval(() => {//Main function 
        if (pausa == 0) {
            seAcabo = 0;
            let primerElemento = posicion[0];//It helps add another tile to the snake. Avoids adding a reference to the array instead of the actual value
            
            if (posicion.length > 1) { //Cuando la longitud de la serpiente sea mayor que 1, cada paoscion pasa a la anterior, borrando la última
                setTimeout(() => {
                    for (let i = posicion.length - 2; i >= 0; i--) {
                        posicion[i + 1].ancho = posicion[i].ancho;
                        posicion[i + 1].alto = posicion[i].alto;
                    }
                }, 0);
            } 
            if (direccion == 'arriba') {//CChecks the direction of the snake
                posicion[0].alto--; //When you go up it subtracts, cause the table is generated from the top to the bottom
            } else if (direccion == 'abajo') {
                posicion[0].alto++;
            } else if (direccion == 'izquierda') {
                posicion[0].ancho--;
            } else if (direccion == 'derecha'){
                posicion[0].ancho++;
            }
            renderSerpitente() //Renders the snake
            
            if ((posicion[0].ancho == manzana[0]) && (posicion[0].alto == manzana[1])) { //If the snake`s head position is equal to the apple`s position...
                posicion.unshift({ancho:primerElemento.ancho, alto:primerElemento.alto})//Doubles the head position
                if (posicion.length == (ancho * alto)) { //Checks if the player has won
                    pantallaVictoria();
                    clearInterval(movement);
                    recordNormal(posicion.length - 1); //Checks if the highest score was beaten
                }
                manzana = ponerMazana(posicion);//It generates another apple
                document.getElementById('puntuacion').value = `${posicion.length - 1} pts.` //...and changes the score display
            } else if(!document.getElementById(`${posicion[0].ancho}  ${posicion[0].alto}`)){ //If the head id is null, the it went out of the play area so you lost
                pantallaGameOver();
                clearInterval(movement);
                seAcabo = 1;
                recordNormal(posicion.length - 1);
            } else { //If the snake bumped into its own  body
               for (let i = 0; i <= posicion.length - 1; i++) {
                   if (
                       (posicion[i].ancho == posicion[0].ancho) && (posicion[i].alto == posicion[0].alto) && (posicion.length > 1) && (i != 0)
                       ) {
                           pantallaGameOver();
                           clearInterval(movement);
                           seAcabo = 1;
                           recordNormal(posicion.length - 1);//If you lose it also checks if you beated the record
                   }
               }
            }
        } else {
            clearInterval(movement);
        }
    } ,intervalo());
}
function manejadorTeclas (e)  { //Changes the direction of the snake, or if the pause button was pressed
        let tecla = e.key;
        if (tecla == 'Escape') {
            pausa = 1;
            pausar();
            document.getElementById('btn-control3').style.display = 'none'; //Hides the pause button
        } else if (!direccion && (tecla == 'ArrowDown' || tecla == 'ArrowUp' || tecla == 'ArrowRight' || tecla == 'ArrowLeft')) { //So in the beginning you can go in every direction
            document.getElementById('btn-control3').style.display = 'block';//shows the pause button
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
        } else if (tecla == 'ArrowDown' || tecla == 'ArrowUp' || tecla == 'ArrowRight' || tecla == 'ArrowLeft'){ //And when the snake moves it can only go in perpendicular
            document.getElementById('btn-control3').style.display = 'block';//Shows  pause button
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
                document.getElementById('btn-control3').style.display = 'block';//Shows pause button
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
        for(let y = 0; y <= alto; y++) {//goes over al the table of the game, painting it with alternated colors (or colours if you are Bri'ish)
            if(seAcabo) { //checks if the variable of end is active so the message errors doesn't start to log in the console
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
    if (!seAcabo) { //it also renders the apple
        document.getElementById(`${manzana[0]}  ${manzana[1]}`).style.background = '#9B0000';
    }
    for (let i = 0; i <= posicion.length - 1; i++) {
        if (!document.getElementById(`${posicion[0].ancho}  ${posicion[0].alto}`)){ //and same with the snake, but with the head in a different color (./icons/st,small,845x845-pad,1000x1000,f8f8f8.jpg, for my bri'ish frends)
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
