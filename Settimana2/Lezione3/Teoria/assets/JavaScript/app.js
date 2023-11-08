// ricevere attraverso un form il nome e l'anno di nascita, calcolare anno nascita, verificare se la persona è maggiorenne o minorenne, salutarla indicando la maggiore o minore età
// si cercano gli eventi scattenanti (event-driven)

/*
1. LEGGERE IL CAMPO NOME E MEMORIZZARLO
2. LEGGERE IL CAMPO ANNO E MEMORIZZARLO
3. CALCOLARE L'ETA
4 VERIFICARE LA MAGGIORE O MINIORE ETA
5. SCRIVERE NELL'HTML
6. CANCELLARE IL FORM
*/

// evento scatenante il click
// variabili globali:
//nome
//anno
//stato

let nome; // globale in quanto utilizzata per leggere il campo di imput e stampare a video
let anno; // gloable in quanto utilizzata per leggere il campo di input, calcolare eta, verificare eta e stamparea video
let stato; // globale in quanto uttilizzata per verififcare eta e stampare a video
let eta;
let errore = document.getElementById("errore");

function eventHandler() {
  leggiForm();
  if (anno >= 1900 && anno <= 2023 && nome != "") {
    errore.innerHTML = '&nbsp;';
    calcolaEta();
    verifica();
    scrivi();
    cancellaForm();
  } else {
    errore.innerHTML = "Attenzione! Inserire un numero tra il 1900 e il 2023!";
    return;
  }
}

function leggiForm() {
  nome = document.getElementById("nome").value;
  anno = document.getElementById("anno").value;
  
}

function calcolaEta() {
  eta = 2023 - Number(anno);
  
}

function verifica() {
  stato = eta >= 18 ? "maggiorenne" : "minorenne";
  
}

function scrivi() {
  document.getElementById('mioNome').innerHTML = 'Ciao ' + nome;
  document.getElementById('miaVerifica').innerHTML = 'La tua età è ' + eta + '; sei ' + stato;
}

function cancellaForm() {
    document.getElementById('nome').value = '';
    document.getElementById('anno').value = '';

}


