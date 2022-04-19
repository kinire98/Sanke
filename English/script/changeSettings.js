/** 
 * @author kinire98
 */
$little.style.background = '#95d5b2'; //It gives styes by defect to the smallest values both the speed and the direction, so the show as marked
$little.style.color = '#1b4332';
$snail.style.background = '#95d5b2';
$snail.style.color = '#1b4332';
$normal.style.background = '#95d5b2';
$normal.style.color = '#1b4332';
$green.style.background = '#95d5b2';
$green.style.color = '#1b4332';
$little.addEventListener('click',() => { //And all of these event listeners call to the same function with a different value in the parameter
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
$normal.addEventListener('click', () => {
    funcionManjeadoraBotones(11);
})
$pacific.addEventListener('click', () => {
    funcionManjeadoraBotones(12);
})
$tp.addEventListener('click', () => {
    funcionManjeadoraBotones(13);
})
$green.addEventListener('click', () => {
    funcionManjeadoraBotones(14);
})
$blue.addEventListener('click', () => {
    funcionManjeadoraBotones(15);
})
$yellow.addEventListener('click', () => {
    funcionManjeadoraBotones(16);
})
$white.addEventListener('click', () => {
    funcionManjeadoraBotones(17);
})
$boton.addEventListener('click',() => {
    generarTabla()
})
function funcionManjeadoraBotones (valor) { //in this function depending of the button pressed it executes with a different value in te parameter
    //Depending on the value it marks one button  and unmarks the rest from its row, and also changes the value to the correspondent one
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
            case 11:
                modo = 1
                $normal.style.background = '#95d5b2';
                $pacific.style.background = '#1b4332';
                $tp.style.background = '#1b4332';
                $normal.style.color = '#1b4332';
                $pacific.style.color = '#95d5b2';
                $tp.style.color = '#95d5b2';
                break;
            case 12:
                modo = 2;
                $normal.style.background = '#1b4332';
                $pacific.style.background = '#95d5b2';
                $tp.style.background = '#1b4332';
                $normal.style.color = '#95d5b2';
                $pacific.style.color = '#1b4332';
                $tp.style.color = '#95d5b2';
                break;
            case 13:
                modo = 3;
                $normal.style.background = '#1b4332';
                $pacific.style.background = '#1b4332';
                $tp.style.background = '#95d5b2';
                $normal.style.color = '#95d5b2';
                $pacific.style.color = '#95d5b2';
                $tp.style.color = '#1b4332';
                break;
            case 14:
                colorCabeza = '#1b4332';
                colorCuerpo = '#019267';
                $green.style.background = '#95d5b2';
                $blue.style.background = '#1b4332';
                $yellow.style.background = '#1b4332';
                $white.style.background = '#1b4332';
                $green.style.color = '#1b4332';
                $blue.style.color = '#95d5b2';
                $yellow.style.color = '#95d5b2';
                $white.style.color = '#95d5b2';
                break;
            case 15:
                colorCabeza = '#1A132F';
                colorCuerpo = '#8479E1';
                $green.style.background = '#1b4332';
                $blue.style.background = '#95d5b2';
                $yellow.style.background = '#1b4332';
                $white.style.background = '#1b4332';
                $green.style.color = '#95d5b2';
                $blue.style.color = '#1b4332';
                $yellow.style.color = '#95d5b2';
                $white.style.color = '#95d5b2';
                break;
            case 16:
                colorCabeza = '#F0A500';
                colorCuerpo = '#FFD93D';
                $green.style.background = '#1b4332';
                $blue.style.background = '#1b4332';
                $yellow.style.background = '#95d5b2';
                $white.style.background = '#1b4332';
                $green.style.color = '#95d5b2';
                $blue.style.color = '#95d5b2';
                $yellow.style.color = '#1b4332';
                $white.style.color = '#95d5b2';
                break;
            case 17:
                colorCabeza = '#F5EEDC'
                colorCuerpo = '#fff'
                $green.style.background = '#1b4332';
                $blue.style.background = '#1b4332';
                $yellow.style.background = '#1b4332';
                $white.style.background = '#95d5b2';
                $green.style.color = '#95d5b2';
                $blue.style.color = '#95d5b2';
                $yellow.style.color = '#95d5b2';
                $white.style.color = '#1b4332';
                break;
    }
}