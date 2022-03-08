let direccion = 'arriba';
let intervalo = () => {
    let velocidad = parseInt(document.getElementById('velocidad').value)

    if (velocidad == 1) {
        return 250
    } else if (velocidad == 2) {
        return 175;
    } else if (velocidad==3) {
        return 100
    } else if (velocidad==4) {
        return 50
    } else {
        return 25
    }
}
function movimiento (ancho,alto) {
    let posicion = [[Math.trunc(ancho/2),Math.trunc(alto/2)],]
    let manzana = ponerMazana(ancho,alto,posicion)
    var movement = setInterval(() => {    
        
        switch (direccion) {
            case 'arriba':
                posicion [0][1]--;
                break;
            case 'abajo':
                posicion [0][1]++;
                break;
            case 'izquierda':
                posicion [0][0]--;
                break;
            case 'derecha':
                posicion [0][0]++;
                break;
            default:
                break;
        }
        console.log (posicion[0],posicion[1])
        if ((posicion[0][0] == manzana[0]) && (posicion[0][1] == manzana[1])) {
            posicion.push(posicion[posicion.length - 1])
            manzana = ponerMazana(ancho,alto,posicion);
        }
        if (posicion.length == 2) {
            posicion[1] = posicion [0]
        } else if (posicion.length > 2) {
            for (let i = posicion.length - 1; i > 0; i--) {
                posicion[i] = posicion[i - 1]
            }
        }
            if (posicion [posicion.length - 1][1] < 0 ||  posicion [posicion.length - 1][1] > alto ||  posicion [posicion.length - 1][0] < 0 ||  posicion [posicion.length - 1][0] > ancho) {
            clearInterval(movement);
            }
            renderSerpitente(ancho,alto,posicion,manzana)
    } ,intervalo());
}
addEventListener('keydown', () => {
    let tecla = event.key;
    if (direccion == 'arriba' || direccion == 'abajo') {
        switch (tecla) {
            case 'ArrowLeft':
                direccion ='izquierda';
                break;
            case'ArrowRight':
                direccion = 'derecha';
                break;
            default:
                break;
        }
    } else {
        switch (tecla) {
            case 'ArrowUp':
                direccion = 'arriba';
                break;
            case 'ArrowDown':
                direccion = 'abajo'
                break;
            default:
                break;
        }
    }
    
})
function renderSerpitente (ancho,alto,posicion,manzana) {
    for (let j = 0; j <= ancho; j++) {
        for(let y = 0; y <= alto; y++) {
            if ((y + j) %2 == 0){
                document.getElementById(`${j}  ${y}`).style.background = '#00ff00';
            } else {
                document.getElementById(`${j}  ${y}`).style.background = '#e00ee0';
            }
        }
    }
    document.getElementById(`${manzana[0]}  ${manzana[1]}`).style.background = '#f00';
    for (let i = 0; i <= posicion.length - 1; i++) {
            document.getElementById(`${posicion[i][0]}  ${posicion[i][1]}`).style.background = '#000'
        }
}
