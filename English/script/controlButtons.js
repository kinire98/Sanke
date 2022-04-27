/** 
 * @author kinire98
 */
function controlBotones () { //Finds the elements and gives them a listener for click
    const $btnHome = document.getElementById('btn-control1'),
        $btnPause = document.getElementById('btn-control3'); //Jumps from 1 to 3 because the number one was buggy and I removed it
        
    $btnHome.addEventListener('click', btnHome)
    $btnPause.addEventListener('click',btnPause)
}
function controlBotonesPanel () { //Same with the buttons from the win and lose screen
    const $btnSqAgain = document.getElementById('volver_empezar'),
    $btnSqConfig = document.getElementById('config');

    $btnSqAgain.addEventListener('click', btnPanelAgain)
    $btnSqConfig.addEventListener('click', btnPanelConfig)
}
function controlBotonesPausa () { //and with the pause button
    const $btnSqContinue = document.getElementById('reanudar');

    $btnSqContinue.addEventListener('click',manejadorBtnPausa)
}




function btnHome () { //Resets the animations from the home screen
    reseteo();//PUt in a function for more clarity
    const $tabla = document.querySelector('.tabla_juego')
    const $padre = $tabla.parentElement;
    $padre.removeChild($tabla);
    direccion = null;
    document.getElementById('info').style.opacity = '0.85';
    document.getElementById('info').innerHTML = `
    Press any arrow key to begin
    `;
    pausa = 1;
    setTimeout(() => {pausa = 0}, intervalo());
}
function btnPause () {//pauses the game
    pausa = 1;
    pausar()
}
function btnPanelConfig () { //heads to the settings screen
    direccion = null;
    pausa = 0;
    const $tabla = document.querySelector('.tabla_juego')
    const $padre = $tabla.parentElement;
    document.getElementById('Ajustes').style.display = 'flex'; //Puts the values the same as in the beggining
    document.querySelector('table').style.display = 'block';
    document.getElementById('juego').style.display = 'none'
    $padre.removeChild($tabla);
    document.getElementById('info').innerHTML = `
    Press any arrow key to begin
    `;
    removeEventListener('keydown',manejadorPausa)
    seAcabo = 0;
    quitar();
}
function btnPanelAgain () {//Allows to reset the game when you have lost
    pausa = 1;
    document.getElementById('btn-control3').style.display = 'none';
    direccion = null;
    const $tabla = document.querySelector('.tabla_juego')
    const $padre = $tabla.parentElement;
    $padre.removeChild($tabla);
    document.getElementById('info').innerHTML = `
    Press any arrow key to begin
    `;
    removeEventListener('keydown',manejadorPausa)
    generarTabla()
    pausa = 0;
    document.getElementById('info').style.opacity = '0.85';
    quitar();
    pausa = 0;
}
function manejadorBtnPausa ()  {//resumes the game
    const $tabla = document.querySelector('.tabla_juego')
    const $padre = $tabla.parentElement;
    $padre.removeChild($tabla);
    document.getElementById('info').style.opacity = '0'
    addEventListener('keydown', manejadorTeclas);
    removeEventListener('keydown',manejadorPausa);
    pausa = 0;
    generarTabla(1);
    quitar();
}
function quitar () { //removes the listeners
    removeEventListener('click', btnPanelAgain)
    removeEventListener('click', btnPanelConfig)
    removeEventListener('click', manejadorBtnPausa)
}