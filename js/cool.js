'use strict'

function timeGreeting(){
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = '¡Apagando las luces!';
} else if (hourNow > 12) {
greeting = 'Despair, has its calms';
} else if (hourNow > 0 ) {
    greeting = 'DIE! DIE! DIE!';
} else {
    greeting = 'Let them eat cake';
}
document.write('<h1>' + greeting + '</h1>');
}


function askUserName(){
     let userName = prompt('Enter Username');

if (userName == 'Doomfist'){
    document.write('<h5>' + 'Welcome Leader ' + userName + '<h5>');
}else{ 
    document.write('<h5>' + 'Welcome Team Memeber ' + userName + '</h5>');
}

}


function joinTalon(){
    let choice = prompt('do you want clones of Sombra or Reaper on your team?');
    let pic;
    while (choice !='Sombra' && choice !='Reaper'){
        choice = prompt ('Please be specific')
    }
    


    

   
//     // 'how many times will you play Sombra?';
// }else {
//     alert('¡Apagando las luces')
}

// joinTalon();
// askUserName();
// timeGreeting();