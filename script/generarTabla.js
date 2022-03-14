const comprobacionDatos = (tamaño,velocidad) => {
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
            ancho = 21;
            alto = 21;
            break;
        case 2:
            ancho = 61;
            alto = 21;
            break;
        case 3:
            ancho = 61;
            alto = 61;
            break;
        case 4:
            ancho = 81;
            alto = 61;
            break;
        case 5:
            ancho = 81;
            alto = 81;
            break;
    
        default:
            alert('Ha romper los programas de los demás a tu maldita casa')
            break;
    }
    $divTabla.appendChild($tabla);
    for (let i = 0; i <= alto; i++) {
        const $fila = document.createElement('tr')
        for (let j = 0; j <= ancho; j++) {
            const $celda = document.createElement('td');
            $celda.setAttribute('id',`${j}  ${i}`)
            $fila.appendChild($celda)
        }
        $tabla.appendChild($fila)
    }
    switch (tamaño) {
        case 1: case 3: case 5:
            document.querySelector('table').style.width = '50em';
            document.querySelector('table').style.height = '50em'
            break;
        case 2:
            document.querySelector('table').style.width = '65em'
            document.querySelector('table').style.height = '25.998em'
            break;
        case 4:
            document.querySelector('table').style.width = '66em'
            document.querySelector('table').style.height = '45em'
            break;    
        default:
            alert('Ha romper los programas de los demás a tu maldita casa')
            break;
    }
    $divTabla.style.display = 'block';
    document.getElementById('juego').style.display = 'block';
    document.getElementById('Ajustes').style.display = 'none';
    movimiento(ancho,alto)
}


// ArrowDown generarTabla.js:100:13
// ArrowLeft generarTabla.js:100:13
// ArrowRight