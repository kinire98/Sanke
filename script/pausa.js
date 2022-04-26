/** 
 * @author kinire98
 */
function pausar () { //Función de pantalla de pausa
    document.getElementById('info').style.opacity = '0.85'; //Muestra la pantalla de pausa
    document.getElementById('info').innerHTML = /*Cambia el contenido de la pantalla de pausa a los tres botones* de control*/` 
    <div id="infor">Pausa</div></br>
    <button id="reanudar" class="boton pan_info">▶</button>
    <button id="volver_empezar" class="boton pan_info">↺</button>
    <button id="config" class="boton pan_info">⚙</button>`;
    controlBotonesPausa();//Listener de los botones
    document.getElementById('btn-control3').style.display = 'none'; //Se oculta el botón de pausa
    seAcabo = 1; 
    removeEventListener('keydown',manejadorTeclas)
    console.clear()
    setTimeout(() => {
        addEventListener('keydown',manejadorPausa)
    }, intervalo());
}
function manejadorPausa (e) {
    let tecla = e.key;
    if (tecla == 'Escape') { //Al presionar escape para cambiar valaros hace que vuelva a aparecer el menú ajustes y cambia el mensaje del cuadro del medio
        direccion = null;
        pausa = 0;
        const $tabla = document.querySelector('.tabla_juego')
        const $padre = $tabla.parentElement;
        document.getElementById('Ajustes').style.display = 'flex';//También pone los valores como al principio para poder volver a empezar la partida
        document.querySelector('table').style.display = 'block';
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
        switch (tecla) { //Permite acabar la pausa presionando las flechas, además cambia la dirección
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
        //Reinicia la tabla
        const $tabla = document.querySelector('.tabla_juego')
        const $padre = $tabla.parentElement;
        $padre.removeChild($tabla);
        document.getElementById('info').style.opacity = '0'
        addEventListener('keydown', manejadorTeclas);
        removeEventListener('keydown',manejadorPausa);
        pausa = 0;
        generarTabla(1); //Genera la tabla yendo directamente al bucle de juego para que no se reinicie
    }
}