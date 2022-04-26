const $atras = document.querySelector('.atras'),
    $table = document.querySelector('table'),
    $tr = document.querySelectorAll('tr'),
    $td = document.querySelectorAll('td');
//It makes posible for the animations of the home screen to be able to execute again. It also manages the movemente between the home screeen and the settings screen
$opciones.addEventListener('click', () => {
    document.getElementById('pantallaInicio').style.display = 'none';
    document.getElementById('Ajustes').style.display = 'flex';
    $table.style.display = 'block';
})
$atras.addEventListener('click', reseteo) //Calls to a function cause there is another button that does the same
function reseteo () {
    document.getElementById('pantallaInicio').style.display = 'flex';
    document.getElementById('Ajustes').style.display = 'none';
    document.getElementById('juego').style.display = 'none';
    //Resets the animation styles
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
}