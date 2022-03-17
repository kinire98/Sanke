function pantallaGameOver () {
    console.log('llegó');
    document.getElementById('info').style.display = 'block'
    document.getElementById('info').innerHTML = `
    ¡Has perdido! <br>
    Presiona ↲ para volver a jugar <br>
    Presiona esc para cambiar los valores
    `;
    direccion = null;
    addEventListener('keydown',volverAJugar)
}

function volverAJugar (e) {
    let tecla = e.key;
    if (tecla == 'Escape') {
        document.getElementById('Ajustes').style.display = 'block'
        document.getElementById('juego').style.display = 'none'
        removeEventListener('keydown',volverAJugar)
        const $tabla = document.querySelector('table')
        const $padre = $tabla.parentElement;
        $padre.removeChild($tabla);
        document.getElementById('info').innerHTML = `
        Presiona cualquier flecha para comenzar
        `;
    } else if (tecla == 'Enter') {
        document.getElementById('info').innerHTML = `
        Presiona cualquier flecha para comenzar
        `;
        movimiento()
        removeEventListener('keydown',volverAJugar)
        addEventListener('keydown', manejadorTeclas)
    }
}