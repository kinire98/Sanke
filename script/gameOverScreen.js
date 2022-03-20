function pantallaGameOver () { //This function executes when the conditions of de setInterval met for stopping the interval when the player loses
    document.getElementById('info').style.display = 'block'//Shows the 'screen' with the info.
    document.getElementById('info').innerHTML = `
    You lost! <br>
    Press ↲ to play again <br>
    Press esc to change the values
    `;//Changes the content so the message is the one for game Over
    removeEventListener('keydown',manejadorTeclas)
    direccion = null; //Turns the direction to null so when the game starts again the snake doesn't starts moving, it's behind the removeEventListener so the direction doesn't change
    console.clear()
    addEventListener('keydown',volverAJugar)
}

function volverAJugar (e) {
    let tecla = e.key;
    if (tecla == 'Escape') { //When esc pressed makes the settings menu visible and changes the message of the medium square 
        document.getElementById('Ajustes').style.display = 'block'
        document.getElementById('juego').style.display = 'none'
        removeEventListener('keydown',volverAJugar)
        const $tabla = document.querySelector('table')
        const $padre = $tabla.parentElement;
        $padre.removeChild($tabla);
        document.getElementById('info').innerHTML = `
        Press any arrow key to start the game
        `;
    } else if (tecla == 'Enter') { // When ↲ pressed tha values changes to the ones at the beginning of the
        document.getElementById('info').innerHTML = `
        Press any arrow key to start the game
        `;
        movimiento()
        removeEventListener('keydown',volverAJugar)
        addEventListener('keydown', manejadorTeclas)
    }
}
function pantallaVictoria () { //This function is exactly the same as the gameOver, but it changes the message to one of victory. I know, I work a lot :)
    document.getElementById('info').style.display = 'block'
    document.getElementById('info').innerHTML = `
    You won! <br>
    Press ↲ to play again <br>
    Press esc to change the values
    `;
    removeEventListener('keydown',manejadorTeclas)
    direccion = null;
    console.clear()
    addEventListener('keydown',volverAJugar)
}
