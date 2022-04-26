/** 
 * @author kinire98
 */
function pantallaGameOver () { //Esta función se ejecuta cuando las condiciones del setInterval se cumplen para parar el intervalo por derrota
    document.getElementById('info').style.opacity = '0.85' //Muestra la pantalla de la información
    document.getElementById('info').innerHTML = `
    <div id="infor">You lost!</div></br>
    <button id="volver_empezar" class="boton pan_info">↺</button>
    <button id="config" class="boton pan_info">⚙</button>
    `; //Cambia el contenido y muestra el mensaje de game Over
    removeEventListener('keydown',manejadorTeclas);
    controlBotonesPanel();
    document.getElementById('btn-control3').style.display = 'none';
    direccion = null; //Pone la dirección a null para que cuando se vuelva a iniciar el juego, la serpiente no se mueva hasta que se presionen las flechas. Está detrás del removeEventListener para que no se pueda cambiar la dirección
    console.clear()
    addEventListener('keydown',volverAJugar)
}
function pantallaVictoria () { //Esta función hace lo mismo que la de derrota pero cambia el mensaje a uno de victoria
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
    if (tecla == 'Escape') { //Al presionar escape para cambiar valaros hace que vuelva a aparecer el menú ajustes y cambia el mensaje del cuadro del medio
        const $tabla = document.querySelector('.tabla_juego')
        const $padre = $tabla.parentElement;
        document.getElementById('Ajustes').style.display = 'flex';//También pone los valores como al principio para poder volver a empezar la partida
        document.querySelector('table').style.display = 'block';
        document.getElementById('juego').style.display = 'none'
        $padre.removeChild($tabla);
        document.getElementById('info').innerHTML = `
        Press any arrow key to begin
        `;
        removeEventListener('keydown',volverAJugar)
        seAcabo = 0;
    } else if (tecla == 'Enter') { //Cuando se presiona el ↲ se ponen los valores directamente como al principio de la partida pero sin cambiar tamaño y velocidad
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