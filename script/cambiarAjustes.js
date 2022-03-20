$little.style.background = '#95d5b2';//Les da estilos por defecto a los valores más bajos tanto de tamaño como de velocidad para que aparezcan como marcados
$little.style.color = '#1b4332';
$snail.style.background = '#95d5b2';
$snail.style.color = '#1b4332';
$little.addEventListener('click',() => { //Todas estas escuchas de eventos llaman a la misma función con un distinto valor en sus parámetros
    funcionManjeadoraBotones(1)
})
$medium.addEventListener('click',() => {
    funcionManjeadoraBotones(2)
})
$big.addEventListener('click',() => {
    funcionManjeadoraBotones(3)
})
$enormous.addEventListener('click',() => {
    funcionManjeadoraBotones(4)
})
$giant.addEventListener('click',() => {
    funcionManjeadoraBotones(5)
})
$snail.addEventListener('click',() => {
    funcionManjeadoraBotones(6)
})
$turtle.addEventListener('click',() => {
    funcionManjeadoraBotones(7)
})
$UsainBolt.addEventListener('click',() => {
    funcionManjeadoraBotones(8)
})
$cheeto.addEventListener('click',() => {
    funcionManjeadoraBotones(9)
})
$flash.addEventListener('click',() => {
    funcionManjeadoraBotones(10)
})
$boton.addEventListener('click',() => {
    generarTabla()
})
function funcionManjeadoraBotones (valor) {//En esta función dependiendo del botón presionado se ejecuta con un valor de parámetro distinto
    //Dependiendo del valor marca un botón y desmarca el resto de su fila, y también cambia el valor correspondiente 
    switch (valor) {
        case 1:
            tamaño = 1;
            $little.style.background = '#95d5b2';
            $medium.style.background = '#1b4332';
            $big.style.background = '#1b4332';
            $enormous.style.background = '#1b4332';
            $giant.style.background = '#1b4332';
            $little.style.color = '#1b4332';
            $medium.style.color = '#95d5b2';
            $big.style.color = '#95d5b2';
            $enormous.style.color = '#95d5b2';
            $giant.style.color = '#95d5b2';
            break;
        case 2:
            tamaño = 2;
            $little.style.background = '#1b4332';
            $medium.style.background = '#95d5b2';
            $big.style.background = '#1b4332';
            $enormous.style.background = '#1b4332';
            $giant.style.background = '#1b4332';
            $little.style.color = '#95d5b2';
            $medium.style.color = '#1b4332';
            $big.style.color = '#95d5b2';
            $enormous.style.color = '#95d5b2';
            $giant.style.color = '#95d5b2';
            break;
        case 3:
            tamaño = 3;
            $little.style.background = '#1b4332';
            $medium.style.background = '#1b4332';
            $big.style.background = '#95d5b2';
            $enormous.style.background = '#1b4332';
            $giant.style.background = '#1b4332';
            $little.style.color = '#95d5b2';
            $medium.style.color = '#95d5b2';
            $big.style.color = '#1b4332';
            $enormous.style.color = '#95d5b2';
            $giant.style.color = '#95d5b2';
            break;
        case 4:
            tamaño = 4;
            $little.style.background = '#1b4332';
            $medium.style.background = '#1b4332';
            $big.style.background = '#1b4332';
            $enormous.style.background = '#95d5b2';
            $giant.style.background = '#1b4332';
            $little.style.color = '#95d5b2';
            $medium.style.color = '#95d5b2';
            $big.style.color = '#95d5b2';
            $enormous.style.color = '#1b4332';
            $giant.style.color = '#95d5b2';
            break;
        case 5:
            tamaño = 5;
            $little.style.background = '#1b4332';
            $medium.style.background = '#1b4332';
            $big.style.background = '#1b4332';
            $enormous.style.background = '#1b4332';
            $giant.style.background = '#95d5b2';
            $little.style.color = '#95d5b2';
            $medium.style.color = '#95d5b2';
            $big.style.color = '#95d5b2';
            $enormous.style.color = '#95d5b2';
            $giant.style.color = '#1b4332';
            break;
        case 6:
            velocidad = 1;
            $snail.style.background = '#95d5b2';
            $turtle.style.background = '#1b4332';
            $UsainBolt.style.background = '#1b4332';
            $cheeto.style.background = '#1b4332';
            $flash.style.background = '#1b4332';
            $snail.style.color = '#1b4332';
            $turtle.style.color = '#95d5b2';
            $UsainBolt.style.color = '#95d5b2';
            $cheeto.style.color = '#95d5b2';
            $flash.style.color = '#95d5b2';
            break;
        case 7:
            velocidad = 2;
            $snail.style.background = '#1b4332';
            $turtle.style.background = '#95d5b2';
            $UsainBolt.style.background = '#1b4332';
            $cheeto.style.background = '#1b4332';
            $flash.style.background = '#1b4332';
            $snail.style.color = '#95d5b2';
            $turtle.style.color = '#1b4332';
            $UsainBolt.style.color = '#95d5b2';
            $cheeto.style.color = '#95d5b2';
            $flash.style.color = '#95d5b2';
            break;
        case 8:
            velocidad = 3;
            $snail.style.background = '#1b4332';
            $turtle.style.background = '#1b4332';
            $UsainBolt.style.background = '#95d5b2';
            $cheeto.style.background = '#1b4332';
            $flash.style.background = '#1b4332';
            $snail.style.color = '#95d5b2';
            $turtle.style.color = '#95d5b2';
            $UsainBolt.style.color = '#1b4332';
            $cheeto.style.color = '#95d5b2';
            $flash.style.color = '#95d5b2';
            break;
        case 9:
            velocidad = 4;
            $snail.style.background = '#1b4332';
            $turtle.style.background = '#1b4332';
            $UsainBolt.style.background = '#1b4332';
            $cheeto.style.background = '#95d5b2';
            $flash.style.background = '#1b4332';
            $snail.style.color = '#95d5b2';
            $turtle.style.color = '#95d5b2';
            $UsainBolt.style.color = '#95d5b2';
            $cheeto.style.color = '#1b4332';
            $flash.style.color = '#95d5b2';
            break;
        case 10:
            velocidad = 4;
            $snail.style.background = '#1b4332';
            $turtle.style.background = '#1b4332';
            $UsainBolt.style.background = '#1b4332';
            $cheeto.style.background = '#1b4332';
            $flash.style.background = '#95d5b2';
            $snail.style.color = '#95d5b2';
            $turtle.style.color = '#95d5b2';
            $UsainBolt.style.color = '#95d5b2';
            $cheeto.style.color = '#95d5b2';
            $flash.style.color = '#1b4332';
            break;
    }
}