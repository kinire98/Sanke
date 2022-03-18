const $boton = document.getElementById('empezar'), //Todas estas constantes hacen referencia a los botones de la ventana de ajustes
    $little = document.getElementById('11'),//Los IDs acutan como un sistema de coordenadas
    $medium = document.getElementById('12'),
    $big = document.getElementById('13'),
    $enormous = document.getElementById('14'),
    $giant = document.getElementById('15'),
    $snail = document.getElementById('21'),
    $turtle = document.getElementById('22'),
    $UsainBolt = document.getElementById('23'),
    $cheeto = document.getElementById('24'),
    $flash = document.getElementById('25');

let velocidad = 1, //Como los valores de alto, ancho, velocidad y tamaño se utilizan en muchas partes del programa estas son variables globales, para que pasar parámetros no se convierta en un inconveniente y se aumenta aún más la comlejidad del programa
//Se que no es lo mejor del mundo, pero se usan constantemente en varias funciones así que es mejor idea hacer las variables globales
    tamaño = 1,
    ancho,
    alto;
function generarTabla () {//Esta función genera el tamaño the la tabla, y la tabla en sí, en la que se va a estar moviendo la serpiente
    const $divTabla = document.getElementById('tabla_movimiento');//Hace referencia al div que contiene la tabla
    const $tabla = document.createElement('table');
    switch (tamaño) {//Cambia las variables de ancho y alto siguiendo el valor de la variable tamaño
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
            alert('Ha romper los programas de los demás a tu maldita casa')//Un chiste de mierda, solo ignoradlo
            break;
    }
    $divTabla.appendChild($tabla); //pone a la tabla como elemento hijo del div que la va a contener
    for (let i = 0; i <= alto; i++) {//El primer bucle for representa las filas y el segundo las columnas
        const $fila = document.createElement('tr')//Crea la fila
        for (let j = 0; j <= ancho; j++) {
            const $celda = document.createElement('td'); // Crea la celda de la tabla
            $celda.setAttribute('id',`${j}  ${i}`) //Le da una id que representa sus coordenadas, con dos espacios por el medio para evitar conflictos entre una coordenada y otra
            //No sé si lo de los espacios es necesario, pero lo hice por si acaso
            $fila.appendChild($celda)//Pone la celda como elemento hijo de la fila
        }
        $tabla.appendChild($fila)//y la fila como elemento hijo de la tabla
    }
    document.getElementById('juego').style.display = 'block';//Muestra el div con los elementos del juegos
    document.getElementById('Ajustes').style.display = 'none';//Y esconde los que están dónde los ajustes
    movimiento()//Ejecuta la función del movimiento...
    addEventListener('keydown', manejadorTeclas)//y añade la escucha de eventos para controlar la dirección de la serpiente
}
