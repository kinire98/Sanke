//Este archivo le da los estilos finales a cada uno de los elementos con una animación CSS. Como tienen un delay entonces tienen que empezar ocultas y se fijan usando el evento "animationend"
const $img = document.querySelector('[alt="Icono del juego"]'),
   p1 = document.getElementById('p1'),
   p2 = document.getElementById('p2'),
   p3 = document.getElementById('p3'),
   p4 = document.getElementById('p4'),
   p5 = document.getElementById('p5'),
   $opciones = document.getElementById('opciones'),
   $record = document.getElementById('labelRecord');
$img.addEventListener('animationend', () => {
    $img.style.right = '25vw'
    $img.style.bottom = '10vh'
})
p1.addEventListener('animationend', () => {
    p1.style.bottom = '50%';
    p1.style.left = '45%';
    p1.style.fontSize = '8rem';
})
p2.addEventListener('animationend', () => {
    p2.style.bottom = '50%';
    p2.style.left = '49.3%';
    p2.style.fontSize = '8rem';
})
p3.addEventListener('animationend', () => {
    p3.style.bottom = '50%';
    p3.style.left = '53%';
    p3.style.fontSize = '8rem';
})
p4.addEventListener('animationend', () => {
    p4.style.bottom = '50%';
    p4.style.left = '57%';
    p4.style.fontSize = '8rem';
})
p5.addEventListener('animationend', () => {
    p5.style.bottom = '50%';
    p5.style.left = '60.5%';
    p5.style.fontSize = '8rem';
})
$boton.addEventListener('animationend', () => {
    $boton.style.bottom = '25%';
    $boton.style.right = '45%';
    $boton.style.fontSize = '3rem';
})
$opciones.addEventListener('animationend', () => {
    $opciones.style.bottom = '15%';
    $opciones.style.right = '44.8%';
    $opciones.style.fontSize = '2rem';
})
$record.addEventListener('mouseenter', () => {
    const $info = document.getElementById('txtInfo');
    $info.style.display = 'block';
    $info.style.fontSize = '1.5rem';
    $info.style.bottom = '65%';
})
$record.addEventListener('mouseleave', () => {
    const $info = document.getElementById('txtInfo');
    $info.style.display = 'none';
    $info.style.fontSize = '0';
    $info.style.bottom = '50%';
})
