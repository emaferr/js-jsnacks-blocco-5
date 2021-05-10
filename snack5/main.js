// Scrivi una funzione che accetti tre argomenti:

// un array e due numeri 

// (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).

// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”

function arrayContenuto (array , numbero_a , numero_b) {

    var arrayContenuto = []

    for ( var i = numbero_a ; i < numero_b - 1 ; i++) {

        var elemento = array[i];

        arrayContenuto.push(elemento)
    
    }

    return arrayContenuto ;
    
}

var a = 2;

var b = 7 ;

var frutta = [ "banana" , "mela" , "pera" , "kiwi" , "lampone" , "fragola" , "ciliegia" , "pesca" ]

var arrayCreato = arrayContenuto ( frutta , a , b ) ;

console.log(arrayCreato);












