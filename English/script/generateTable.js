/** 
 * @author kinire98
 */
const $boton = document.getElementById('empezar'), //This constants make reference to the buttons of the size and the speed, the IDs is like a coodinates system
    $little = document.getElementById('11'),
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
let velocidad = 1, //As the speed sizq height and width are used in many places of the program these are global variables, so passing parametres doesn't turn into a drawback
    tamaño = 1,
    ancho,
    alto,
    modo = 1,
    colorCabeza = '#1b4332',
    colorCuerpo = '#019267';
function generarTabla () { //This function has to generate the size of the table, and the table itself, in which the snake is going to be moving in
    const $divTabla = document.getElementById('tabla_movimiento');//Reference to the div that contains the table
    const $tabla = document.createElement('table');
    switch (tamaño) { //Changes the height and the width following the value of the "tamaño" variable
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
            alert('Ha romper los programas de los demás a tu maldita casa') //This is a joke, ignore it
            break;
    }
    $divTabla.appendChild($tabla); //Appends the table to its parent element
    for (let i = 0; i <= alto; i++) {//The first for loop represents the rows and the second loop represents the columns
        const $fila = document.createElement('tr') //Creates the row
        for (let j = 0; j <= ancho; j++) {
            const $celda = document.createElement('td');  //Creates the table cell
            $celda.setAttribute('id',`${j}  ${i}`)//Gives an id with its coordinates with two spaces in the middle to avoid conflicts between coordinates
            //I don't knoe if this is neccesary, but I did it just in case it was neccesary
            $fila.appendChild($celda)//It appends it to the row
        }
        $tabla.appendChild($fila) //It appends the row to the table
    }
    document.getElementById('juego').style.display = 'flex'; //Shows the div with all the elements of the game
    document.getElementById('Ajustes').style.display = 'none'; //and hides the one with the setings of the game
    if (modo == 1){
        movimiento()
    } else if (modo == 2) {
        pacifico()
    } else if (modo == 3) {
        tp ()
    }//It starts to execute the movement function...
    addEventListener('keydown', manejadorTeclas)//And adds the event for controlling the direction of the snake
}
