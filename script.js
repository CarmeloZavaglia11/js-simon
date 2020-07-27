// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla
// volta i numeri che ha visto precedentemente. Dopo che
// sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.
var numeriCasuali = [];
var numeriUtente = [];

while (numeriCasuali.length < 5){
    var numeroComputer = (numeriRandom(1,99));
    if (!checking(numeriCasuali,numeroComputer)){
        numeriCasuali.push(numeroComputer);
    }
}

$('#numeriComp').append(numeriCasuali + ' ');

setTimeout(gioco,5000);

$('button').click(function(){

    location.reload();

});



// ****FUNZIONI*****//

function gioco() {
    $('#numeriComp').text('');
    while (numeriUtente.length < 5){
        var numeroUtente = parseInt(prompt('prova ad indovinare i numeri ' + 'tentativo numero: ' + (5 - numeriUtente.length )));
        if (checking(numeriUtente,numeroUtente)) {
            alert('numero già inserito,riprovare');
        }  else {
            numeriUtente.push(numeroUtente);
        }
        console.log(numeriUtente);
    }


    var listaMatch = [];
    var contatore = 0;
    for (let i = 0; i < numeriCasuali.length; i++) {
        for (let j = 0; j < numeriUtente.length; j++) {
            if (numeriCasuali[i] == numeriUtente[j]) {
                contatore += 1;
                listaMatch.push(numeriCasuali[i]);
            }
        }
    }

    if (listaMatch.length > 0) {
        $('#punteggio h2').text('COMPLIMENTI!');
        $('#punteggio p').text('Hai azzeccato ' + contatore + ' numeri su ' + numeriCasuali.length);
        $('#punteggio h3').text('Lista Numeri Trovati: ' + listaMatch);
    }  else {
        $('#punteggio h2').text('Peccato!');
        $('#punteggio p').text('Non hai azzeccato nessun numero');
    }
}

function numeriRandom(min,max) {
    numero = Math.floor(Math.random()* (max - min + 1) ) + min;
    return numero;
}

function checking(array,numero) {
    var i = 0;
    trovato = false;
    while (i < array.length && trovato == false) {
        if (numero == array[i]) {
            trovato = true;
        }
        i++;
    }
    return trovato;
}
