'use strict'
var today = new Date();
var hourNow = today.getHours()
var greeting;

if (hourNow > 18) {
    greeting = '¡Apagando las luces!' ;
} else if (hourNow > 12) {
greeting = 'Its High noon!' ;
} else if (hourNow > 0 ) {
    greeting = 'Remember this moment' ;
} else {
    greeting = 'Setting up the Welcome Matt!' ;
}

document.write('<h3>' + greeting + '</h3>');