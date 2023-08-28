/*
 Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
 Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/


const userNumber = prompt("Scegli un numero da 1 a 6")
const pcNumber = Math.floor((Math.random()* 6) + 1)
console.log(userNumber,pcNumber)


// Calcolo se il numero dell'utente è maggiore del numero del computer
if (userNumber >= 7) {
    console.log("il numero che hai inserito è troppo alto. Riprova!");
}else if (userNumber > pcNumber) {
    console.log (`Hai vinto! Il tuo numero ${userNumber} è maggiore del numero del computer ${pcNumber}`)
} else if (pcNumber > userNumber) {
    console.log(`Hai perso! Il numero del computer ${pcNumber} è maggiore del tuo numero ${userNumber}`);
} else {
    console.log (`Pareggio! Il tuo numero ${userNumber} è uguale a quello del computer ${pcNumber}`)
}

