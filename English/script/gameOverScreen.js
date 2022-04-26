/** 
 * @author kinire98
 */
function pantallaGameOver () { //When you lose this function it's executed
    document.getElementById('info').style.opacity = '0.85' //Shows the info screen
    document.getElementById('info').innerHTML = `
    <div id="infor">You lost!</div></br>
    <button id="volver_empezar" class="boton pan_info">↺</button>
    <button id="config" class="boton pan_info">⚙</button>
    `; //Changes the content of the screen to the game over screen
    removeEventListener('keydown',manejadorTeclas);
    controlBotonesPanel();
    document.getElementById('btn-control3').style.display = 'none';
    direccion = null; //Sets the direction to null so when you restart you can start in any direction you want
    console.clear()
    addEventListener('keydown',volverAJugar)
}
function pantallaVictoria () { //The same as the lose function, but with a victory message
    document.getElementById('info').style.opacity = '0.85'
    document.getElementById('info').innerHTML = `
    <div id="infor">You won!</div></br>
    <button id="volver_empezar" class="boton pan_info">↺</button>
    <button id="config" class="boton pan_info">⚙</button>
    `;
    seAcabo = 1;
    removeEventListener('keydown',manejadorTeclas)
    direccion = null;
    document.getElementById('btn-control2').style.display = 'none';
    document.getElementById('btn-control3').style.display = 'none';
    console.clear()
    addEventListener('keydown',volverAJugar)
}
function volverAJugar (e) {
    let tecla = e.key;
    if (tecla == 'Escape') { //When you press esc you go back to the settings screen
        const $tabla = document.querySelector('.tabla_juego')
        const $padre = $tabla.parentElement;
        document.getElementById('Ajustes').style.display = 'flex';//Shows the settings screen
        document.querySelector('table').style.display = 'block';
        document.getElementById('juego').style.display = 'none'
        $padre.removeChild($tabla);
        document.getElementById('info').innerHTML = `
        Press any arrow key to begin
        `;
        removeEventListener('keydown',volverAJugar)
        seAcabo = 0;
    } else if (tecla == 'Enter') { //When you press ↲ is resets the game
        const $tabla = document.querySelector('.tabla_juego')
        const $padre = $tabla.parentElement;
        $padre.removeChild($tabla);
        document.getElementById('info').innerHTML = `
        Press any arrow key to begin
        `;
        removeEventListener('keydown',volverAJugar)
        generarTabla()
        seAcabo = 0;
    }
}