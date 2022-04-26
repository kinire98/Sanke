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
//From the internet and it uses RegExp (you know the plural of RegExp is regrets). If validation comes true it shows a content for the users in mobile, reminding that the game isn't adapted for mobile