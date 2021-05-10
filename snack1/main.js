// Crea un array di 10 oggetti che rappresentano una zucchina

// indicando per ognuna varietà peso e lunghezza.

// Calcola quanto pesano tutte le zucchine.


// _____________________________________________________  //


// Genero una funzione che genera una parola casuale 

function generaParola ( lunghezza ) {
    var parolaRandom = '';
    var caratteri = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    for (var i = 0; i < lunghezza; i++) {
      var randomPoz = Math.floor(Math.random() * caratteri.length);
      parolaRandom += caratteri.substring(randomPoz, randomPoz + 1);
    }
    return parolaRandom;
  }

// Genero una funzione che genera un numero casuale da 1 a 30

function numeroRandom(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  

// Genero 10 zucchine dal nome peso e lunghezza casuali

  var Zucchine = [] ;

  for (var i = 0 ; i < 10 ; i++ ) {

    var zucchina = 

        {
            varieta : generaParola(8) ,
            peso : parseInt(numeroRandom(10, 60) ) ,
            lunghezza : numeroRandom(5, 30) ,
        } 

    Zucchine.push(zucchina) ;  

  }

//   Genero un array con il peso di tutte le zucchine

  var pesiZucchine = [] ;

  var i = 0 ;

  while ( i < Zucchine.length ) {

    var zucchinaSingola = Zucchine[i] ;

    var pesoZucchina = zucchinaSingola.peso ;

    pesiZucchine.push(pesoZucchina)

    i++
  }
  
//   Sommo i valori all'interno dell'array creato

  var pesoTotaleZucchine = 0; 

  for (var i = 0; i < pesiZucchine.length; i++) {

    pesoTotaleZucchine += pesiZucchine[i];

  }

  console.log(Zucchine);

  console.log(pesiZucchine);

  console.log(pesoTotaleZucchine);



  

 

 


  

 

  
  

