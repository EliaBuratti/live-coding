/* Traccia:
Il programma chiede all’utente quanti secondi 
mancano alla cottura della pasta.
Dopo il tempo indicato, appare un alert(). */

/* 
const timeRemain = Number(prompt('quanti secondi mancano alla cottura della pasta?')); //secondi
console.log(timeRemain, typeof timeRemain);

function pastaReady () {
    alert('La pasta è cotta!!!!!!');
}

setTimeout(pastaReady, timeRemain * 1000); // setTimeout conta in millisecondi per funzionare, quindi moltiplico i secondi * 1000

console.log('pasta calata'); //funzione sincrona e quindi stampa prima qua e poi setTimeout
 */


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




/* 
Traccia due:

Simulare un countdown di 10 secondi che alla fine dice "Buon anno!" */

let secondTime = 10; //secondi
const clock = setInterval(function (){
    document.querySelector('.count-down').innerHTML = secondTime;
    
    if(secondTime === 0) {
        clearInterval(clock);
        alert('Buon anno');
    } else {
        secondTime-- ;
    }
}, 1000);

