/** 
 * @author kinire98
 */
let posicionTP,
    manzanaTP,
    manzana2;
function tp () {
    posicionTP = [{ancho:Math.trunc(ancho/2),alto:Math.trunc(alto/2)}]; 
    manzanaTP = ponerMazana(posicionTP); 
    manzana2 = ponerMazanaTP(posicionTP,manzanaTP);
    seAcabo = 0;
    document.getElementById('puntuacion').value = `${posicionTP.length - 1} pts.`
    if (!localStorage.getItem('recordTP')) { 
        document.getElementById('puntuacion_alta').value = `${0} pts`
    } else {
        document.getElementById('puntuacion_alta').value = `${localStorage.getItem('recordTP')}  pts`
    } 
    bucleTP();
}
function bucleTP () {
    var movement = setInterval(() => {
        if (pausa === 0) {
            seAcabo = 0;
            let primerElemento = posicionTP[0]; 
            if (posicionTP.length > 1) { 
                setTimeout(() => {
                    for (let i = posicionTP.length - 2; i >= 0; i--) {
                        posicionTP[i + 1].ancho = posicionTP[i].ancho;
                        posicionTP[i + 1].alto = posicionTP[i].alto;
                    }
                }, 0);
            } 
            
            if (direccion == 'arriba') {
                posicionTP[0].alto--; 
            } else if (direccion == 'abajo') {
                posicionTP[0].alto++;
            } else if (direccion == 'izquierda') {
                posicionTP[0].ancho--;
            } else if (direccion == 'derecha'){
                posicionTP[0].ancho++;
            }
            
            if ((posicionTP[0].ancho == manzanaTP[0]) && (posicionTP[0].alto == manzanaTP[1])) { 
                //la lógica es similar a la de ./movimiento.js, con la diferencia de que cuando la cabeza pasa por una de las manzanas se le teletransporta a la otra
                posicionTP[0].ancho = manzana2[0]; 
                posicionTP[0].alto = manzana2[1];
                posicionTP.unshift({ancho:primerElemento.ancho, alto:primerElemento.alto});
                if (posicionTP.length == (ancho * alto) - 1) { 
                    pantallaVictoria() 
                    clearInterval(movement)
                    recordTp(posicionTP.length - 1); 
                }
                manzanaTP = ponerMazana(posicionTP);
                manzana2 = ponerMazanaTP(posicionTP,manzanaTP);
                document.getElementById('puntuacion').value = `${posicionTP.length - 1} pts.` 
            } else if ((posicionTP[0].ancho == manzana2[0]) && (posicionTP[0].alto == manzana2[1])) { 
                posicionTP[0].ancho = manzanaTP[0];
                posicionTP[0].alto = manzanaTP[1];
                posicionTP.unshift({ancho:primerElemento.ancho, alto:primerElemento.alto})
                manzanaTP = ponerMazana(posicionTP);
                manzana2 = ponerMazana(posicionTP);
                document.getElementById('puntuacion').value = `${posicionTP.length - 1} pts.` ;
            } else if(!document.getElementById(`${posicionTP[0].ancho}  ${posicionTP[0].alto}`)){ 
                pantallaGameOver();
                clearInterval(movement);
                seAcabo = 1;
                recordTp(posicionTP.length - 1); 
            } else { 
               for (let i = 0; i <= posicionTP.length - 1; i++) {
                   if (
                       (posicionTP[i].ancho == posicionTP[0].ancho) && (posicionTP[i].alto == posicionTP[0].alto) && (posicionTP.length > 1) && (i != 0)
                       ) {
                           pantallaGameOver();
                           clearInterval(movement);
                           seAcabo = 1;
                           recordTp(posicionTP.length - 1);
                   }
               }
           }
           renderSerpitenteTP() 
            
        } else { 
            clearInterval(movement)
        }
    } ,intervalo());
}
function renderSerpitenteTP () {
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
        document.getElementById(`${manzanaTP[0]}  ${manzanaTP[1]}`).style.background = '#9B0000';
        document.getElementById(`${manzana2[0]}  ${manzana2[1]}`).style.background = '#9B0000';
    }
    for (let i = 0; i <= posicionTP.length - 1; i++) {
        if (!document.getElementById(`${posicionTP[0].ancho}  ${posicionTP[0].alto}`)){ 
            break;
        }
        if(seAcabo) {
            break;
        } else if (i != 0) {
            document.getElementById(`${posicionTP[i].ancho}  ${posicionTP[i].alto}`).style.background = colorCuerpo
        } else {
            document.getElementById(`${posicionTP[i].ancho}  ${posicionTP[i].alto}`).style.background = colorCabeza
        }
    }
}