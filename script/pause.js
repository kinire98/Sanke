/** 
 * @author kinire98
 */
function pausar () { //Pause screen function
    document.getElementById('info').style.opacity = '0.85'; //Shows the pause screen
    document.getElementById('info').innerHTML = /*Changes the content of the screen to the 3 control buttons*/` 
    <div id="infor">Paused</div></br>
    <button id="reanudar" class="boton pan_info">▶</button>
    <button id="volver_empezar" class="boton pan_info">↺</button>
    <button id="config" class="boton pan_info">⚙</button>`;
    controlBotonesPausa();//Listener of the buttons
    document.getElementById('btn-control3').style.display = 'none'; //Hides the pause button
    seAcabo = 1; 
    removeEventListener('keydown',manejadorTeclas)
    console.clear()
    setTimeout(() => {
        addEventListener('keydown',manejadorPausa)
    }, intervalo());
}
function manejadorPausa (e) {
    let tecla = e.key;
    if (tecla == 'Escape') { //When you press esc to change the settings it makes the settings menu pop up y changes de message of the center square
        direccion = null;
        pausa = 0;
        const $tabla = document.querySelector('.tabla_juego')
        const $padre = $tabla.parentElement;
        document.getElementById('Ajustes').style.display = 'flex';//It asle changes the values like the beginning of the game so you can restart the game
        document.querySelector('table').style.display = 'block';
        document.getElementById('juego').style.display = 'none'
        $padre.removeChild($tabla);
        document.getElementById('info').innerHTML = `
        Press any arrow key to begin
        `;
        removeEventListener('keydown',manejadorPausa)
        seAcabo = 0;
    } else if (tecla == 'Enter') { //When ↲  is pressed the game restarts
        direccion = null;
        pausa = 0;
        const $tabla = document.querySelector('.tabla_juego')
        const $padre = $tabla.parentElement;
        $padre.removeChild($tabla);
        document.getElementById('info').innerHTML = `
        Press any arrow key to begin
        `;
        removeEventListener('keydown',manejadorPausa)
        generarTabla()
        seAcabo = 0;
    } else if (tecla == 'ArrowLeft' || tecla == 'ArrowRight' || tecla == 'ArrowUp' || tecla == 'ArrowDown') {
        switch (tecla) { //Allows to change the pause pressing any arrow key, allowing to change the direction
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
        //Resets the table
        const $tabla = document.querySelector('.tabla_juego')
        const $padre = $tabla.parentElement;
        $padre.removeChild($tabla);
        document.getElementById('info').style.opacity = '0'
        addEventListener('keydown', manejadorTeclas);
        removeEventListener('keydown',manejadorPausa);
        pausa = 0;
        generarTabla(1); //When the table is regenerated, it makes go to the loop of the game directly
    }
}