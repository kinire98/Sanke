/* Storing user's device details in a variable*/
let details = navigator.userAgent;
  
/* Creating a regular expression 
containing some mobile devices keywords 
to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i;

/* Using test() method to search regexp in details
it returns boolean value*/
let isMobileDevice = regexp.test(details);

if (isMobileDevice) {
    document.getElementById('contenido_movil').style.display = 'flex';
    document.getElementById('pantallaIncio').style.display = 'none';
}
//De internet, y usa expresiones regulares. Si con la validación de internet es cierta entonces muestra un contenido para los usuarios de móvil, recordando que no esta adptada para móvil