function controlBotones () {
    const $btnHome = document.getElementById('btn-control1'),
        $btnPause = document.getElementById('btn-control3');
        
    $btnHome.addEventListener('click', btnHome)
    $btnPause.addEventListener('click',btnPause)
}
function controlBotonesPanel () {
    const $btnSqAgain = document.getElementById('volver_empezar'),
    $btnSqConfig = document.getElementById('config');

    $btnSqAgain.addEventListener('click', btnPanelAgain)
    $btnSqConfig.addEventListener('click', btnPanelConfig)
}
function controlBotonesPausa () {
    const $btnSqContinue = document.getElementById('reanudar');

    $btnSqContinue.addEventListener('click',manejadorBtnPausa)
}




function btnHome () {
    document.getElementById('pantallaInicio').style.display = 'flex';
    document.getElementById('juego').style.display = 'none';
    $opciones.style.fontSize = '0';
    $opciones.style.right = '0';
    $opciones.style.bottom = '0';
    $boton.style.fontSize = '0';
    $boton.style.right = '0';
    $boton.style.fontSize = '0';
    p1.style.bottom = '0%';
    p1.style.left = '55%';
    p1.style.fontSize = '0';
    p2.style.bottom = '0%';
    p2.style.left = '55%';
    p2.style.fontSize = '0';
    p3.style.bottom = '0%';
    p3.style.left = '55%';
    p3.style.fontSize = '0';
    p4.style.bottom = '0%';
    p4.style.left = '55%';
    p4.style.fontSize = '0';
    p5.style.bottom = '0%';
    p5.style.left = '55%';    
    p5.style.fontSize = '0';
    $table.style.display = 'block';
    const $tabla = document.querySelector('.tabla_juego')
    const $padre = $tabla.parentElement;
    $padre.removeChild($tabla);
}
function btnPause () {
    pausa = 1;
    pausar()
}
function btnPanelConfig () {
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
function btnPanelAgain () {
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
function manejadorBtnPausa ()  {
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
function quitar () {
    removeEventListener('click', btnPanelAgain)
    removeEventListener('click', btnPanelConfig)
    removeEventListener('click', manejadorBtnPausa)
}