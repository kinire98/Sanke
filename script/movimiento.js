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
    let posicion = [{ancho:Math.trunc(ancho/2),alto:Math.trunc(alto/2)}]
    let manzana = ponerMazana(ancho,alto,posicion)
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
        } else {
            posicion[0].ancho++;
        }
        renderSerpitente(ancho,alto,posicion,manzana)
        if ((posicion[0].ancho == manzana[0]) && (posicion[0].alto == manzana[1])) {
            posicion.unshift({ancho:primerElemento.ancho, alto:primerElemento.alto})
            manzana = ponerMazana(ancho,alto,posicion);
            renderSerpitente(ancho,alto,posicion,manzana);
        } else if((posicion [0].alto < 0 ||  posicion [0].alto > alto ||  posicion [0].ancho < 0 ||  posicion [0].ancho > ancho)) {
            clearInterval(movement);
        } else {
            for (let i = 0; i <= posicion.length; i++) {
                if (
                    (posicion[i].ancho == posicion[0].ancho) && (posicion[i].alto == posicion[0].alto) && (posicion.length > 1) && (i != 0)
                    ) {
                    clearInterval(movement);
                }
            }
        }
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
                document.getElementById(`${j}  ${y}`).style.background = '#65C18C';
            } else {
                document.getElementById(`${j}  ${y}`).style.background = '#C1F4C5';
            }
        }
    }
    document.getElementById(`${manzana[0]}  ${manzana[1]}`).style.background = '#f00';
    for (let i = 0; i <= posicion.length - 1; i++) {
            document.getElementById(`${posicion[i].ancho}  ${posicion[i].alto}`).style.background = '#000'
        }
}
