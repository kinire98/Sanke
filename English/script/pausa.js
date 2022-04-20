/** 
 * @author kinire98
 */
function pausar () {
    document.getElementById('info').style.opacity = '0.85'
    document.getElementById('info').innerHTML = `
    Pausa <br>
    Presiona cualquier flecha para reanudar <br>
    Presiona ↲ para volver a empezar <br>
    Presiona esc para cambiar los valores`;
    seAcabo = 1;
    removeEventListener('keydown',manejadorTeclas)
    // console.clear()
    addEventListener('keydown',manejadorPausa)
}
function manejadorPausa (e) {
    let tecla = e.key;
    if (tecla == 'Escape') { //Al presionar escape para cambiar valaros hace que vuelva a aparecer el menú ajustes y cambia el mensaje del cuadro del medio
        direccion = null;
        pausa = 0;
        const $tabla = document.querySelector('.tabla_juego')
        const $padre = $tabla.parentElement;
        document.getElementById('Ajustes').style.display = 'flex'//También pone los valores como al principio para poder volver a empezar la partida
        document.getElementById('juego').style.display = 'none'
        $padre.removeChild($tabla);
        document.getElementById('info').innerHTML = `
        Presiona cualquier flecha para comenzar
        `;
        removeEventListener('keydown',manejadorPausa)
        seAcabo = 0;
    } else if (tecla == 'Enter') { //Cuando se presiona el ↲ se ponen los valores directamente como al principio de la partida pero sin cambiar tamaño y velocidad
        direccion = null;
        pausa = 0;
        const $tabla = document.querySelector('.tabla_juego')
        const $padre = $tabla.parentElement;
        $padre.removeChild($tabla);
        document.getElementById('info').innerHTML = `
        Presiona cualquier flecha para comenzar
        `;
        removeEventListener('keydown',manejadorPausa)
        generarTabla()
        seAcabo = 0;
    } else if (tecla == 'ArrowLeft' || tecla == 'ArrowRight' || tecla == 'ArrowUp' || tecla == 'ArrowDown') {
        switch (tecla) {
            case 'ArrowLeft':
                direccion = 'izquierda';
                break;
            case 'ArrowRight':
                direccion = 'derecha';
                break;
            case 'ArrowUp':
                direccion = 'arriba';
                break;
            case 'ArrowDown':
                direccion = 'abajo';
                break;
        }
        const $tabla = document.querySelector('.tabla_juego')
        const $padre = $tabla.parentElement;
        $padre.removeChild($tabla);
        document.getElementById('info').style.opacity = '0'
        addEventListener('keydown', manejadorTeclas);
        removeEventListener('keydown',manejadorPausa);
        pausa = 0;
        generarTabla(1);
    }
}