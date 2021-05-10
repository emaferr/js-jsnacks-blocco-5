// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
// prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

function fusioneArray ( array1 , array2 ) {

    var array3 = [] ;

    var i = 0 ;

    while ( i < array1.length ) {

    var elemento1 = array1[i];
    var elemento2 = array2[i];

    array3.push(elemento1 , elemento2)

    i++

    }

    return array3

}

var lettere = [ "a" , "b" , "c" ] ;

var numeri = [ "1" , "2" , "3" ];

var lettereNumeri = fusioneArray ( lettere , numeri ) ;

console.log(lettereNumeri);


