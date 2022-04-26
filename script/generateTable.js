/** 
 * @author kinire98
 */
const $boton = document.getElementById('empezar'), //Al of these constants are the ids for the settings buttons
    $little = document.getElementById('11'),//The IDs are really a "coordinate" system
    $medium = document.getElementById('12'),
    $big = document.getElementById('13'),
    $enormous = document.getElementById('14'),
    $giant = document.getElementById('15'),
    $snail = document.getElementById('21'),
    $turtle = document.getElementById('22'),
    $UsainBolt = document.getElementById('23'),
    $cheeto = document.getElementById('24'),
    $flash = document.getElementById('25'),
    $normal = document.getElementById('31'),
    $pacific = document.getElementById('32'),
    $tp = document.getElementById('33'),
    $green = document.getElementById('41'),
    $blue = document.getElementById('42'),
    $yellow = document.getElementById('43'),
    $white = document.getElementById('44');

let velocidad = 1,
    tamaño = 1,
    ancho,
    alto,
    modo = 1,
    colorCabeza = '#1b4332',
    colorCuerpo = '#019267';
function generarTabla (pausa = 0) {//This function creates the table in which the snake is going to be moving, with a different size depending on which value has the variable "tamamño"
    document.getElementById('pantallaInicio').style.display = 'none';
    const $divTabla = document.getElementById('tabla_movimiento');//Introduces the div in which the table is going to be in into a variable
    const $tabla = document.createElement('table');
    $tabla.setAttribute('class', 'tabla_juego'); //Give a pseudoclass to the table of the game
    switch (tamaño) {//changes the value of the height and width variables, according to the "tamaño" variable
        case 1:
            ancho = 11;
            alto = 11;
            break;
        case 2:
            ancho = 21;
            alto = 21;
            break;
        case 3:
            ancho = 31;
            alto = 31;
            break;
        case 4:
            ancho = 41;
            alto = 41;
            break;
        case 5:
            ancho = 51;
            alto = 51;
            break;
    
        default:
            alert('Ha romper los programas de los demás a tu maldita casa')//A crappy joke
            break;
    }
    $divTabla.appendChild($tabla); //appends the table to its div
    for (let i = 0; i <= alto; i++) {//First for represents file and the second the columns
        const $fila = document.createElement('tr')//Creates the file
        for (let j = 0; j <= ancho; j++) {
            const $celda = document.createElement('td'); //Creates the cell of the table
            $celda.setAttribute('id',`${j}  ${i}`) //Gives an ID with its coordinates
            switch (tamaño) {//Changes the border radius of the cell, so when there are more it doesn't turn into a circle
                case 1:
                    $celda.style.borderRadius = '1rem'
                    break;
                case 2:
                    $celda.style.borderRadius = '.75rem'
                    break;
                case 3:
                    $celda.style.borderRadius = '.5rem'
                    break;
                case 4:
                    $celda.style.borderRadius = '.25rem'
                    break;
                case 5:
                    $celda.style.borderRadius = '.15rem'
                    break;
            
                default:
                    alert('Ha romper los programas de los demás a tu maldita casa')//The same crappy joke as before
                    break;
            }
            $fila.appendChild($celda)//appends the cell as a son of the file
        }
        $tabla.appendChild($fila)//and the file as the son of the table
    }
    document.getElementById('juego').style.display = 'flex';//Shows the div with the game elements
    document.getElementById('Ajustes').style.display = 'none';//and hides the one 
    if (pausa) {
        if (modo == 1){ //If this function is called from the pause menu it doesn`t restart the game
            bucleMovimiento()
        } else if (modo == 2) {
            buclePacifico()
        } else if (modo == 3) {
            bucleTP()
        }
    } else {
        if (modo == 1){
            movimiento()
        } else if (modo == 2) {
            pacifico()
        } else if (modo == 3) {
            tp ()
        }
    }
    addEventListener('keydown',manejadorTeclas)//adds the listener for the control with the keys
    controlBotones(); //and controls the buttons of the top left corner
}
