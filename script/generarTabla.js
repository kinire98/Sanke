const comprobacionDatos = () => {
 let tamaño = parseInt(document.getElementById('tamaño').value)
 let velocidad = parseInt(document.getElementById('velocidad').value)
 console.log(tamaño,velocidad)
 if (!tamaño || !velocidad) {
     alert ('Introduce un tamaño y una velocidad o pon un dato numérico')
 } else if ((tamaño%1 != 0) || (velocidad%1 != 0)) {
    alert('Introduce números enteros')
 } else if ((tamaño < 1 || tamaño > 5)||(velocidad < 1 || velocidad > 5)) {
     alert('Respeta los máximos y los mínimos de los valores')
 } else {
    generarTabla(tamaño);
 }
}
function generarTabla (tamaño) {
    //Tamaño 1 ->20x20
    //Tamaño 2 ->20x60
    //Tamaño 3 ->60x60
    //Tamaño 4 ->60x80
    //Tamaño 5 ->80x80
    let ancho;
    let alto;
    const $divTabla = document.getElementById('tabla_movimiento');
    const $tabla = document.createElement('table');
    switch (tamaño) {
        case 1:
            ancho = 20;
            alto = 20;
            break;
        case 2:
            ancho = 20;
            alto = 60;
            break;
        case 3:
            ancho = 60;
            alto = 60;
            break;
        case 4:
            ancho = 60;
            alto = 80;
            break;
        case 5:
            ancho = 80;
            alto = 80;
            break;
    
        default:
            alert('Ha romper los programas de los demás a tu maldita casa')
            break;
    }
    $divTabla.appendChild($tabla)
    for (i = 0; i <= alto; i++) {
        const $fila = document.createElement('tr')
        for (j = 0; j <= ancho; j++) {
            const $celda = document.createElement('td');
            $celda.setAttribute('id',`${ancho}${alto}`)
            $fila.appendChild($celda)
        }
        $tabla.appendChild($fila)
    }
    $divTabla.style.display = 'block';
    document.getElementById('Ajustes').style.display = 'none';
}
