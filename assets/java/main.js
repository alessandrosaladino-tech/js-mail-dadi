//ESERCIZIO GENERATORE DI NUMERI

/*
 Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
 Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//Dichiaro le variabili per il numero dell'utente e il numero del computer
const userNumber = Math.floor((Math.random()* 6) + 1);
const pcNumber = Math.floor((Math.random()* 6) + 1);
console.log(userNumber,pcNumber)


// Calcolo se il numero dell'utente è maggiore del numero del computer
if (userNumber > pcNumber) {
    console.log (`Hai vinto! Il tuo numero ${userNumber} è maggiore del numero del computer ${pcNumber}`);
} else if (pcNumber > userNumber) {
    console.log(`Hai perso! Il numero del computer ${pcNumber} è maggiore del tuo numero ${userNumber}`);
} else {
    console.log (`Pareggio! Il tuo numero ${userNumber} è uguale a quello del computer ${pcNumber}`);
}

//ESERCIZIO EMAIL
/*  
Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.

*/

//Dichiaro le variabili per la lista email e email utente
const userEmail = prompt ("Inserisci la tua email");
const emailsList = ["email1@gmail.com", "email2@hotmail.it", "email3@yahoo.com", "email4@libero.it", "email5@hotmail.it", "email6@gmail.com"];


//Eseguo un controllo per verificare se la mail inserita è nella lista
for (let i = 0; i< emailsList.length; i++) {
  const emailList = emailsList[i];
  
  let emailCheck = "Email rifiutata, non puoi accedere!";
  
  if (userEmail === emailList) {
    emailCheck = "Puoi Accedere!"
    i = emailList.length
  }

  console.log(emailCheck);
}

//Metodo più pulito e veloce 
/*
if (emailsList.includes(userEmail)) {
    console.log('Puoi accedere!');
} else {
    console.log('Non puoi accedere!');
}
*/