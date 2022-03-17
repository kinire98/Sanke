let direccion = null;
let intervalo = () => {

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
    let posicion = [{ancho:Math.trunc(ancho/2),alto:Math.trunc(alto/2)}],
        manzana = ponerMazana(posicion),
        seAcabo = 0;
        document.getElementById('puntuacion').value = `${posicion.length} pts.`
    var movement = setInterval(() => { 
        let primerElemento = posicion[0]  
        if (posicion.length > 1) {
            setTimeout(() => {
                for (let i = posicion.length - 2; i >= 0; i--) {
                    posicion[i + 1].ancho = posicion[i].ancho;
                    posicion[i + 1].alto = posicion[i].alto;
                }
            }, 0);
                
        } 
        
        if (direccion == 'arriba') {
            posicion[0].alto--;
        } else if (direccion == 'abajo') {
            posicion[0].alto++;
        } else if (direccion == 'izquierda') {
            posicion[0].ancho--;
        } else if (direccion == 'derecha'){
            posicion[0].ancho++;
        }
        renderSerpitente(posicion,manzana,seAcabo)
        if ((posicion[0].ancho == manzana[0]) && (posicion[0].alto == manzana[1])) {
            posicion.unshift({ancho:primerElemento.ancho, alto:primerElemento.alto})
            manzana = ponerMazana(posicion);
            document.getElementById('puntuacion').value = `${posicion.length - 1} pts.`
        } else if(posicion[0].alto <= 0 ||  posicion[0].alto >= alto ||  posicion[0].ancho <= 0 ||  posicion[0].ancho >= ancho) {
            setTimeout(() => {
                if (
                    (posicion[0].alto != 0 && posicion[0].ancho != 0) && (posicion[0].alto != 0 && posicion[0].ancho != ancho) && (posicion[0].alto != alto && posicion[0].ancho != 0) && (posicion[0].alto != alto && posicion[0].ancho != ancho)
                ) {
                    if(
                        (direccion == 'arriba' && posicion[0].alto <= 0)
                    ) {
                        clearInterval(movement)
                        seAcabo = 1;
                        removeEventListener('keydown',manejadorTeclas)
                        console.clear()
                        pantallaGameOver();
                    } 
                    if(
                        (direccion == 'abajo' && posicion[0].alto >= alto)
                    ) {
                        clearInterval(movement)
                        seAcabo = 1;
                        removeEventListener('keydown',manejadorTeclas)
                        console.clear()
                        pantallaGameOver();
                    } 
                    if(
                        (direccion == 'izquierda' && posicion[0].ancho <= 0)
                    ) {
                        clearInterval(movement)
                        seAcabo = 1;
                        removeEventListener('keydown',manejadorTeclas)
                        console.clear()
                        pantallaGameOver();
                    } 
                    if(
                        (direccion == 'derecha' && posicion[0].ancho >= ancho)
                    ) {
                        clearInterval(movement)
                        seAcabo = 1;
                        removeEventListener('keydown',manejadorTeclas)
                        console.clear()
                        pantallaGameOver();
                    } 
                } else if(!document.getElementById(`${posicion[0].ancho}  ${posicion[0].alto}`)){
                    clearInterval(movement)
                    seAcabo = 1;
                    removeEventListener('keydown',manejadorTeclas)
                    console.clear()
                    pantallaGameOver();
                }
            }, intervalo());
        } else {
            for (let i = 0; i <= posicion.length - 1; i++) {
                if (
                    (posicion[i].ancho == posicion[0].ancho) && (posicion[i].alto == posicion[0].alto) && (posicion.length > 1) && (i != 0)
                    ) {
                    clearInterval(movement);
                    seAcabo = 1;
                    removeEventListener('keydown',manejadorTeclas)
                    console.clear()
                    pantallaGameOver();
                }
            }
        }
        if (posicion.length == (ancho * alto)) {
            clearInterval(movement);
                    seAcabo = 1;
                    removeEventListener('keydown',manejadorTeclas)
                    console.clear()
                    pantallaVictoria();
        }
    } ,intervalo());
}
function manejadorTeclas (e)  {
    let tecla = e.key;
    console.log (tecla)
    if (!direccion) {
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
    } else {
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
        for(let y = 0; y <= alto; y++) {
            if(seAcabo) {
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
    if (!seAcabo) {
        document.getElementById(`${manzana[0]}  ${manzana[1]}`).style.background = '#9B0000';
    }
    for (let i = 0; i <= posicion.length - 1; i++) {
        if (!document.getElementById(`${posicion[0].ancho}  ${posicion[0].alto}`)){
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
