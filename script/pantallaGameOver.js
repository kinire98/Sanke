function pantallaGameOver () { //Esta función se ejecuta cuando las condiciones del setInterval se cumplen para parar el intervalo por derrota
    document.getElementById('info').style.display = 'block' //Muestra la pantalla de la información
    document.getElementById('info').innerHTML = `
    ¡Has perdido! <br>
    Presiona ↲ para volver a jugar <br>
    Presiona esc para cambiar los valores
    `; //Cambia el contenido y muestra el mensaje de game Over
    seAcabo = 1;
    removeEventListener('keydown',manejadorTeclas)
    direccion = null; //Pone la dirección a null para que cuando se vuelva a iniciar el juego, la serpiente no se mueva hasta que se presionen las flechas. Está detrás del removeEventListener para que no se pueda cambiar la dirección
    console.clear()
    addEventListener('keydown',volverAJugar)
}

function volverAJugar (e) {
    let tecla = e.key;
    if (tecla == 'Escape') { //Al presionar escape para cambiar valaros hace que vuelva a aparecer el menú ajustes y cambia el mensaje del cuadro del medio
        seacabo = 0;
        document.getElementById('Ajustes').style.display = 'block'//También pone los valores como al principio para poder volver a empezar la partida
        document.getElementById('juego').style.display = 'none'
        removeEventListener('keydown',volverAJugar)
        const $tabla = document.querySelector('table')
        const $padre = $tabla.parentElement;
        $padre.removeChild($tabla);
        document.getElementById('info').innerHTML = `
        Presiona cualquier flecha para comenzar
        `;
    } else if (tecla == 'Enter') { //Cuando se presiona el ↲ se ponen los valores directamente como al principio de la partida pero sin cambiar tamaño y velocidad
        seacabo = 0;
        document.getElementById('info').innerHTML = `
        Presiona cualquier flecha para comenzar
        `;
        movimiento()
        removeEventListener('keydown',volverAJugar)
        addEventListener('keydown', manejadorTeclas)
    }
}
function pantallaVictoria () { //Esta función hace lo mismo que la de derrota pero cambia el mensaje a uno de victoria
    document.getElementById('info').style.display = 'block'
    document.getElementById('info').innerHTML = `
    ¡Ganaste! <br>
    Presiona ↲ para volver a jugar <br>
    Presiona esc para cambiar los valores
    `;
    seAcabo = 1;
    removeEventListener('keydown',manejadorTeclas)
    direccion = null;
    console.clear()
    addEventListener('keydown',volverAJugar)
}
