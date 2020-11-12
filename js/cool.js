'use strict'

var today = new Date();
var hourNow = today.getHours()
var greeting;

if (hourNow > 18) {
    greeting = '¡Apagando las luces!' ;
} else if (hourNow > 12) {
greeting = 'Despair, has its calms' ;
} else if (hourNow > 0 ) {
    greeting = 'DIE! DIE! DIE!' ;
} else {
    greeting = 'Let them eat cake' ;
}

document.write('<h3>' + greeting + '</h3>');