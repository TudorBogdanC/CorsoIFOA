/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var calcola;

function area(l1, l2) {
  calcola = l1 * l2;
  return calcola;
}

console.log(area(4, 5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var somma;

function crazySum(a, b) {
  somma = a + b;
  if (a === b) {
    return somma * 3;
  } else return somma;
}
console.log(crazySum(3, 3));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var differenza;

function crazyDiff(x, y) {
  differenza = Math.abs(x - y);
  if (x > 19) {
    return differenza * 3;
  } else return differenza;
}
console.log(crazyDiff(2, 19));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  if (n > 20 && n < 101) {
    return (vf = true);
  } else if (n === 400) {
    return (vf = true);
  } else return (vf = false);
}
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

var phrase = " sono una stringa";
var epicode = "EPICODE";

function epify(str) {
  phrase.split("");
  if (phrase.indexOf("EPICODE") === 0) {
    return phrase;
  } else return (phrase = epicode.concat(phrase));
}

console.log(epify(epicode));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numero) {
  numero = Math.abs(numero);
  if (numero % 3 === 0 && numero % 7 === 0) {
    console.log("numero divisibile per 3 e per 7");
  } else if (numero % 7 === 0) {
    console.log("numero divisibile per 7");
  } else if (numero % 3 === 0) {
    console.log("numero divisbile per 3");
  } else {
    console.log("non multiplo di 3 o di 7");
  }
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa) {
  let stringaCapovolta = stringa.split("").reverse().join("");
  return stringaCapovolta;
}

console.log(reverseString("tudor"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

let frase =
  "Questo esercizio è il numero otto del gruppo di esercizi del giorno quattro settimana due";

function upperFirst(stringa) {
  let arrayFrase = stringa.split(" ");
  let risultato = [];
  for (let i = 0; i < arrayFrase.length; i++) {
    let parolaFinale =
      arrayFrase[i].charAt(0).toUpperCase() + arrayFrase[i].substring(1);
    risultato.push(parolaFinale);
  }
  return risultato.join("");
}

console.log(upperFirst(frase));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa) {
  return stringa.slice(1, stringa.length - 1);
}

console.log(cutString("Tudor Bogdan"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
  let arrayNumeri = [];
  for (let i = 0; i < n; i++) {
    arrayNumeri.push(Math.floor(Math.random() * 11));
  }
  return arrayNumeri;
}
console.log(giveMeRandom(8));
