let direccion = null;//The direction of the snake. In null so the snake doesn`t move at the beginning
let intervalo = () => { //Using the variable "velocidad", changes the speed of the snake
//returns a value that will be used for the interval
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
    let posicion = [{ancho:Math.trunc(ancho/2),alto:Math.trunc(alto/2)}], //creates an array for the position of the snake. It starts at the middle
        manzana = ponerMazana(posicion); //retunrs the position of the apple
    var seAcabo = 0;//to end the loops of render and avoid errors in the console
        document.getElementById('puntuacion').value = `${posicion.length - 1} pts.`//puts the  point to the snake length - 1
        var movement = setInterval(() => {//principal function of the game
            let primerElemento = posicion[0]; //keeps the position of the head of the snake, to introduce it in the array. 
            //it avoids introducing a reference in the array and duplicating positions  
            if (posicion.length == (ancho * alto)) { //Checks if the player won
                pantallaVictoria()
                clearInterval(movement)
            }
            if (posicion.length > 1) { //if the snake length is more than 1 it pass the rest of the positions of the snake one back, deleting the last
                setTimeout(() => {
                    for (let i = posicion.length - 2; i >= 0; i--) {
                        posicion[i + 1].ancho = posicion[i].ancho;
                        posicion[i + 1].alto = posicion[i].alto;
                    }
                }, 0);
                    
            } 
            
            if (direccion == 'arriba') {//Checks the direction in which the snake has to move
                posicion[0].alto--; //when the snake goes up it substrac because, the table was generated from the top to the bottom
            } else if (direccion == 'abajo') {
                posicion[0].alto++;
            } else if (direccion == 'izquierda') {
                posicion[0].ancho--;
            } else if (direccion == 'derecha'){
                posicion[0].ancho++;
            }
            renderSerpitente(posicion,manzana,seAcabo) //Renders the snake
            if ((posicion[0].ancho == manzana[0]) && (posicion[0].alto == manzana[1])) { //checks if the position of the head is the same of the apple
                posicion.unshift({ancho:primerElemento.ancho, alto:primerElemento.alto})//doubles the position of the head
                manzana = ponerMazana(posicion);//generates another apple...
                document.getElementById('puntuacion').value = `${posicion.length - 1} pts.` //...and changes the mark 
            } else if(!document.getElementById(`${posicion[0].ancho}  ${posicion[0].alto}`)){ //if it doesn't goes over the apple, it checks if it goes out. If the head goes out
                pantallaGameOver();
                clearInterval(movement);
                seAcabo = 1;
            } else { //Checks if the head hits the body
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
               
            
        } ,intervalo());
}
function manejadorTeclas (e)  { //Changes de direction of the snal
        let tecla = e.key;
        if (!direccion) { //The first one is for the beginning, so the snake can move in any direction
            switch (tecla) {
                case 'ArrowLeft':
                    direccion ='izquierda';
                    document.getElementById('info').style.display = 'none'
                    break;
                case'ArrowRight':
                    direccion = 'derecha';
                    document.getElementById('info').style.display = 'none'
                    break;
                case 'ArrowUp':
                    direccion = 'arriba';
                    document.getElementById('info').style.display = 'none'
                    break;
                case 'ArrowDown':
                    direccion = 'abajo';
                    document.getElementById('info').style.display = 'none'
                    break;
                default:
                    break;
            }
        } else { //and when it's moving, it can only move in perpendicular
            if (direccion == 'arriba' || direccion == 'abajo') {
                switch (tecla) {
                    case 'ArrowLeft':
                        direccion ='izquierda';
                        document.getElementById('info').style.display = 'none'
                        break;
                    case'ArrowRight':
                        direccion = 'derecha';
                        document.getElementById('info').style.display = 'none'
                        break;
                    default:
                        break;
                }
            } else if (direccion == 'izquierda' || direccion == 'derecha') {
                switch (tecla) {
                    case 'ArrowUp':
                        direccion = 'arriba';
                        document.getElementById('info').style.display = 'none'
                        break;
                    case 'ArrowDown':
                        direccion = 'abajo';
                        document.getElementById('info').style.display = 'none'
                        break;
                    default:
                        break;
                }
            }
        }
}
function renderSerpitente (posicion,manzana,seAcabo) {
    for (let j = 0; j <= ancho; j++) {
        for(let y = 0; y <= alto; y++) {//Paints the game area, alternating colors (or colours, if you are Bri'ish)
            if(seAcabo) { //test if the variable of end hasn't been activated, if so it breaks the loop
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
    if (!seAcabo) { //same with the apple
        document.getElementById(`${manzana[0]}  ${manzana[1]}`).style.background = '#9B0000';
    }
    for (let i = 0; i <= posicion.length - 1; i++) {
        if (!document.getElementById(`${posicion[0].ancho}  ${posicion[0].alto}`)){ //and same with the snake, but with the head of a different color (or colour, ./icons/st,small,845x845-pad,1000x1000,f8f8f8.jpg)
            break;
        }
        if(seAcabo) {
            break;
        } else if (i == 0) {
            document.getElementById(`${posicion[i].ancho}  ${posicion[i].alto}`).style.background = '#1b4332'
        } else {
            document.getElementById(`${posicion[i].ancho}  ${posicion[i].alto}`).style.background = '#019267'
        }
    }
}
