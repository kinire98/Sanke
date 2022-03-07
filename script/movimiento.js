let direccion = 'arriba';
let intervalo = () => {
    let velocidad = parseInt(document.getElementById('velocidad').value)

    if (velocidad == 1) {
        return 1500
    } else if (velocidad == 2) {
        return 1000;
    } else {
        return 500
    }
}
function movimiento (ancho,alto) {
    let posicion = [[Math.trunc(ancho/2),Math.trunc(alto/2)]]
    var movement = setInterval(() => {
        
        switch (direccion) {
            case 'arriba':
                posicion [posicion.length - 1][1] -= 1;
                break;
            case 'abajo':
                posicion [posicion.length - 1][1] += 1;
                break;
            case 'izquierda':
                posicion [posicion.length - 1][0] -= 1;
                break;
            case 'derecha':
                posicion [posicion.length - 1][0] += 1;
                break;
            default:
                break;
        }
        renderSerpitente(ancho,alto,posicion)
        if ( posicion [posicion.length - 1][1] < 0 ||  posicion [posicion.length - 1][1] > alto ||  posicion [posicion.length - 1][0] < 0 ||  posicion [posicion.length - 1][0] > ancho) {
            clearInterval(movement);
        }
    } ,intervalo());
}
addEventListener('keydown', () => {
    let tecla = event.key;
    console.log(tecla)
    switch (tecla) {
        case 'ArrowUp':
            direccion = 'arriba';
            break;
        case 'ArrowDown':
            direccion = 'abajo'
            break;
        case 'ArrowLeft':
            direccion ='izquierda';
            break;
        case'ArrowRight':
            direccion = 'derecha';
            break
        default:
            break;
    }
    console.log(direccion)
})
function renderSerpitente (ancho,alto,posicion) {
    for (let j = 0; j <= ancho; j++) {
        for(let y = 0; y <= alto; y++) {
            document.getElementById(`${j}  ${y}`).style.background = '#fff'
        }
    }
    for (let i = 0; i <= posicion.length - 1; i++) {
            document.getElementById(`${posicion[i][0]}  ${posicion[i][1]}`).style.background = '#000'
        }
}