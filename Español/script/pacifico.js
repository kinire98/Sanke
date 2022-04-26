/** 
 * @author kinire98
 */
let posicionPaz,
    manzanaPaz;
function pacifico () {
    posicionPaz = [{ancho:Math.trunc(ancho/2),alto:Math.trunc(alto/2)}] 
    manzanaPaz = ponerMazana(posicionPaz) 
    seAcabo = 0;
    document.getElementById('puntuacion').value = `${posicionPaz.length - 1} pts`
    buclePacifico();
    if (!localStorage.getItem('recordPaz')) { 
        document.getElementById('puntuacion_alta').value = `${0} pts`
    } else { 
        document.getElementById('puntuacion_alta').value = `${localStorage.getItem('recordPaz')} pts`
    }
}
function buclePacifico () {
    var movement = setInterval(() => {
        if (pausa === 0) {
            seAcabo = 0;
            let primerElemento = posicionPaz[0]; 
            if (posicionPaz.length == (ancho * alto)) { 
                pantallaVictoria()
                clearInterval(movement)
                recordPac(posicionPaz.length - 1);
            }
            if (posicionPaz.length > 1) {
                setTimeout(() => {
                    for (let i = posicionPaz.length - 2; i >= 0; i--) {
                        posicionPaz[i + 1].ancho = posicionPaz[i].ancho;
                        posicionPaz[i + 1].alto = posicionPaz[i].alto;
                    }
                }, 0);
                    
            } 
            
            if (direccion == 'arriba') {
                posicionPaz[0].alto--; 
            } else if (direccion == 'abajo') {
                posicionPaz[0].alto++;
            } else if (direccion == 'izquierda') {
                posicionPaz[0].ancho--;
            } else if (direccion == 'derecha'){
                posicionPaz[0].ancho++;
            }
            if ((posicionPaz[0].ancho == manzanaPaz[0]) && (posicionPaz[0].alto == manzanaPaz[1])) { 
                posicionPaz.unshift({ancho:primerElemento.ancho, alto:primerElemento.alto});
                manzanaPaz = ponerMazana(posicionPaz);
                document.getElementById('puntuacion').value = `${posicionPaz.length - 1} pts.` 
            } else if(!document.getElementById(`${posicionPaz[0].ancho}  ${posicionPaz[0].alto}`)){ 
                //la lógica general es la misma que en ./movimiento.js, con la diferencia que aquí cuando detecta que la serpiente se ha salido de la caja, comprueba por que lado se ha salido y lo manda al opuesto
                if (posicionPaz [0].ancho < 0) { 
                    posicionPaz[0].ancho = ancho;
                } else if (posicionPaz[0].ancho > ancho) {
                    posicionPaz[0].ancho = 0;
                } else if (posicionPaz [0].alto < 0) {
                    posicionPaz[0].alto = alto;
                } else if (posicionPaz[0].alto > alto) {
                    posicionPaz[0].alto = 0;
                }
            }
            renderSerpitentePacifico(); 
        } else {
            clearInterval(movement);
        }
        } ,intervalo());
}
function renderSerpitentePacifico () {
    for (let j = 0; j <= ancho; j++) {
        for(let y = 0; y <= alto; y++) {
            if ((y + j) %2 == 0){
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
        document.getElementById(`${manzanaPaz[0]}  ${manzanaPaz[1]}`).style.background = '#9B0000';
    }
    for (let i = 0; i <= posicionPaz.length - 1; i++) {
        if (!document.getElementById(`${posicionPaz[0].ancho}  ${posicionPaz[0].alto}`)){ 
            break;
        }
        if (i != 0) {
            document.getElementById(`${posicionPaz[i].ancho}  ${posicionPaz[i].alto}`).style.background = colorCuerpo
        } else {
            document.getElementById(`${posicionPaz[i].ancho}  ${posicionPaz[i].alto}`).style.background = colorCabeza
        }
    }
    if (document.getElementById(`${posicionPaz[0].ancho}  ${posicionPaz[0].alto}`)){ 
        document.getElementById(`${posicionPaz[0].ancho}  ${posicionPaz[0].alto}`).style.background = colorCabeza
    }
}
