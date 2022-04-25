/** 
 * @author kinire98
 */
function controlBotones () { //Encuentra los elementos y los guarda en una variable y les pone un listener
    const $btnHome = document.getElementById('btn-control1'),
        $btnPause = document.getElementById('btn-control3'); //Pasa de btn-control 1 a btn-control3 porque existia un btn-control2 que daba muchos problemas y se tuvo que eliminar
        
    $btnHome.addEventListener('click', btnHome)
    $btnPause.addEventListener('click',btnPause)
}
function controlBotonesPanel () { //Lo mismo con los botones del menú de victoria o derrota
    const $btnSqAgain = document.getElementById('volver_empezar'),
    $btnSqConfig = document.getElementById('config');

    $btnSqAgain.addEventListener('click', btnPanelAgain)
    $btnSqConfig.addEventListener('click', btnPanelConfig)
}
function controlBotonesPausa () { //Victoria o derrota más el del menú de pausa
    const $btnSqContinue = document.getElementById('reanudar');

    $btnSqContinue.addEventListener('click',manejadorBtnPausa)
}




function btnHome () { //Resetea los estilos de las animaciones de la pantalla de inicia
    reseteo();//Puesto en una animación para mayor claridad del código
    const $tabla = document.querySelector('.tabla_juego')
    const $padre = $tabla.parentElement;
    $padre.removeChild($tabla);
}
function btnPause () {
    pausa = 1;
    pausar()
}
function btnPanelConfig () { //Igual que pulsar el intro en la pantalla de pausa, victoria o derrota
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
    quitar();
}
function btnPanelAgain () {//Igual que pulsar el intro en la pantalla de pausa, victoria o derrota
    pausa = 1;
    document.getElementById('btn-control3').style.display = 'none';
    direccion = null;
    const $tabla = document.querySelector('.tabla_juego')
    const $padre = $tabla.parentElement;
    $padre.removeChild($tabla);
    document.getElementById('info').innerHTML = `
    Presiona cualquier flecha para comenzar
    `;
    removeEventListener('keydown',manejadorPausa)
    generarTabla()
    pausa = 0;
    document.getElementById('info').style.opacity = '0.85';
    quitar();
    pausa = 0;
}
function manejadorBtnPausa ()  {//Igual que pulsar cualquier flecha en la pantalla de pausa, solo que no permite cambiar las direcciones
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
function quitar () { //Quita los listeners para evitar consumo excesivo de memoria
    removeEventListener('click', btnPanelAgain)
    removeEventListener('click', btnPanelConfig)
    removeEventListener('click', manejadorBtnPausa)
}