// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

// Creo una funzione che restituisce l'inverso di una stringa

/** 
 * ### La funzione ritorna l'inverso della stringa
 * @param {string} string Stringa da inserire
 * @returns {string} Inverso della stringa inserita
*/

function stringaInversa ( string ) {

    var stringaInversa = string.split("").reverse().join("") ;

    return stringaInversa ;

}

console.log( stringaInversa ( "Emanuele" ) );