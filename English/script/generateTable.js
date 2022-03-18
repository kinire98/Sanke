const $boton = document.getElementById('empezar'),
    $little = document.getElementById('11'),
    $medium = document.getElementById('12'),
    $big = document.getElementById('13'),
    $enormous = document.getElementById('14'),
    $giant = document.getElementById('15'),
    $snail = document.getElementById('21'),
    $turtle = document.getElementById('22'),
    $UsainBolt = document.getElementById('23'),
    $cheeto = document.getElementById('24'),
    $flash = document.getElementById('25');

let velocidad = 1,
    tamaño = 1,
    ancho,
    alto;
function generarTabla () {
    //Tamaño 1 ->20x20
    //Tamaño 2 ->20x60
    //Tamaño 3 ->60x60
    //Tamaño 4 ->60x80
    //Tamaño 5 ->80x80
    const $divTabla = document.getElementById('tabla_movimiento');
    const $tabla = document.createElement('table');
    switch (tamaño) {
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
            alert('Ha romper los programas de los demás a tu maldita casa')
            break;
    }
    $divTabla.appendChild($tabla);
    for (let i = 0; i <= alto; i++) {
        const $fila = document.createElement('tr')
        for (let j = 0; j <= ancho; j++) {
            const $celda = document.createElement('td');
            $celda.setAttribute('id',`${j}  ${i}`)
            $fila.appendChild($celda)
        }
        $tabla.appendChild($fila)
    }
    $divTabla.style.display = 'block';
    document.getElementById('juego').style.display = 'block';
    document.getElementById('Ajustes').style.display = 'none';
    document.getElementById('puntuacion').style.display = 'block'
    movimiento()
    addEventListener('keydown', manejadorTeclas)
}
$little.style.background = '#95d5b2';
$little.style.color = '#1b4332';
$snail.style.background = '#95d5b2';
$snail.style.color = '#1b4332';
$little.addEventListener('click',() => {
    tamaño = 1;
    $little.style.background = '#95d5b2';
    $medium.style.background = '#1b4332';
    $big.style.background = '#1b4332';
    $enormous.style.background = '#1b4332';
    $giant.style.background = '#1b4332';
    $little.style.color = '#1b4332';
    $medium.style.color = '#95d5b2';
    $big.style.color = '#95d5b2';
    $enormous.style.color = '#95d5b2';
    $giant.style.color = '#95d5b2';
})
$medium.addEventListener('click',() => {
    tamaño = 2;
    $little.style.background = '#1b4332';
    $medium.style.background = '#95d5b2';
    $big.style.background = '#1b4332';
    $enormous.style.background = '#1b4332';
    $giant.style.background = '#1b4332';
    $little.style.color = '#95d5b2';
    $medium.style.color = '#1b4332';
    $big.style.color = '#95d5b2';
    $enormous.style.color = '#95d5b2';
    $giant.style.color = '#95d5b2';
})
$big.addEventListener('click',() => {
    tamaño = 3;
    $little.style.background = '#1b4332';
    $medium.style.background = '#1b4332';
    $big.style.background = '#95d5b2';
    $enormous.style.background = '#1b4332';
    $giant.style.background = '#1b4332';
    $little.style.color = '#95d5b2';
    $medium.style.color = '#95d5b2';
    $big.style.color = '#1b4332';
    $enormous.style.color = '#95d5b2';
    $giant.style.color = '#95d5b2';
})
$enormous.addEventListener('click',() => {
    tamaño = 4;
    $little.style.background = '#1b4332';
    $medium.style.background = '#1b4332';
    $big.style.background = '#1b4332';
    $enormous.style.background = '#95d5b2';
    $giant.style.background = '#1b4332';
    $little.style.color = '#95d5b2';
    $medium.style.color = '#95d5b2';
    $big.style.color = '#95d5b2';
    $enormous.style.color = '#1b4332';
    $giant.style.color = '#95d5b2';
})
$giant.addEventListener('click',() => {
    tamaño = 5;
    $little.style.background = '#1b4332';
    $medium.style.background = '#1b4332';
    $big.style.background = '#1b4332';
    $enormous.style.background = '#1b4332';
    $giant.style.background = '#95d5b2';
    $little.style.color = '#95d5b2';
    $medium.style.color = '#95d5b2';
    $big.style.color = '#95d5b2';
    $enormous.style.color = '#95d5b2';
    $giant.style.color = '#1b4332';
})
$snail.addEventListener('click',() => {
    velocidad = 1;
    $snail.style.background = '#95d5b2';
    $turtle.style.background = '#1b4332';
    $UsainBolt.style.background = '#1b4332';
    $cheeto.style.background = '#1b4332';
    $flash.style.background = '#1b4332';
    $snail.style.color = '#1b4332';
    $turtle.style.color = '#95d5b2';
    $UsainBolt.style.color = '#95d5b2';
    $cheeto.style.color = '#95d5b2';
    $flash.style.color = '#95d5b2';
})
$turtle.addEventListener('click',() => {
    velocidad = 2;
    $snail.style.background = '#1b4332';
    $turtle.style.background = '#95d5b2';
    $UsainBolt.style.background = '#1b4332';
    $cheeto.style.background = '#1b4332';
    $flash.style.background = '#1b4332';
    $snail.style.color = '#95d5b2';
    $turtle.style.color = '#1b4332';
    $UsainBolt.style.color = '#95d5b2';
    $cheeto.style.color = '#95d5b2';
    $flash.style.color = '#95d5b2';
})
$UsainBolt.addEventListener('click',() => {
    velocidad = 3;
    $snail.style.background = '#1b4332';
    $turtle.style.background = '#1b4332';
    $UsainBolt.style.background = '#95d5b2';
    $cheeto.style.background = '#1b4332';
    $flash.style.background = '#1b4332';
    $snail.style.color = '#95d5b2';
    $turtle.style.color = '#95d5b2';
    $UsainBolt.style.color = '#1b4332';
    $cheeto.style.color = '#95d5b2';
    $flash.style.color = '#95d5b2';
})
$cheeto.addEventListener('click',() => {
    velocidad = 4;
    $snail.style.background = '#1b4332';
    $turtle.style.background = '#1b4332';
    $UsainBolt.style.background = '#1b4332';
    $cheeto.style.background = '#95d5b2';
    $flash.style.background = '#1b4332';
    $snail.style.color = '#95d5b2';
    $turtle.style.color = '#95d5b2';
    $UsainBolt.style.color = '#95d5b2';
    $cheeto.style.color = '#1b4332';
    $flash.style.color = '#95d5b2';
})
$flash.addEventListener('click',() => {
    velocidad = 4;
    $snail.style.background = '#1b4332';
    $turtle.style.background = '#1b4332';
    $UsainBolt.style.background = '#1b4332';
    $cheeto.style.background = '#1b4332';
    $flash.style.background = '#95d5b2';
    $snail.style.color = '#95d5b2';
    $turtle.style.color = '#95d5b2';
    $UsainBolt.style.color = '#95d5b2';
    $cheeto.style.color = '#95d5b2';
    $flash.style.color = '#1b4332';
})
$boton.addEventListener('click',() => {
    generarTabla()
})
// ArrowDown generarTabla.js:100:13
// ArrowLeft generarTabla.js:100:13
// ArrowRight