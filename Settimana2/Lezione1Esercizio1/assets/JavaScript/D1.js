/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
/* 

TIPI PRIMITIVI
stringa - singolo carattere o sequenza finita di caratteri
numerico - numero intero o decimale
booleano - dato vero o falso in base alla condizione da soddisfare 
null - assenza intenzionale di un oggetto
undefined - variabile senza valore assegnato o non definibile 
data - data in ogni suo formato 

TIPI COMPLESSI O DERIVATI
Array
Oggetto
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName = 'Tudor';
console.log(myName);
//document.getElementById('myName').innerHTML += myName 


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log(12+20);




let numero1 = 12;
let numero2 = 20;
let somma = numero1 + numero2;

console.log(somma);

let nuovoNumero1 = 12;
let nuovoNumero2 = 20;
let nuovaSomma = nuovoNumero1 + nuovoNumero2;
console.log(nuovaSomma);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let a = 12;
let x = a;
console.log(x);


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* const myName = 'Craciun';
myName = 'Tudor';
console.log(myName);
'myName' has already been declared */


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let numero3 = 4;

let sottrazione = 4 - x;
console.log(sottrazione);
*/


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john';
let name2 = 'John';
console.log (name1 === name2);

console.log (name1 === name2.toLowerCase() ); 


/*
let name1 = 'john';
let name2 = 'John';
let verifica = name1 === name2;
console.log(verifica);
*/

/* SCRIVI QUI LA TUA RISPOSTA */
