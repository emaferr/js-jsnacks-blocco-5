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

  var ZucchineUnder15 = [] ;

  var ZucchineOver15 = [] ;

  for (var i = 0 ; i < 10 ; i++ ) {

    var zucchina = 

        {
            varieta : generaParola(8) ,
            peso : parseInt(numeroRandom(10, 60) ) ,
            lunghezza : numeroRandom(5, 30) ,
        } 

        // Divido in due array separati le zucchine che misurano meno o più di 15cm.
        // e faccio il push del solo peso

        if ( zucchina.lunghezza < 15 ) {

            ZucchineUnder15.push(zucchina.peso) ;

        }else {

            ZucchineOver15.push(zucchina.peso) ;

        }

        console.log(zucchina);

  }

  var pesoZucchineUnder15 = sommaPeso(ZucchineUnder15); 

  var pesoZucchineOver15 = sommaPeso(ZucchineOver15);

  function sommaPeso (array) {

    var pesoTotale = 0 ;

    for (var i = 0; i < array.length; i++) {

        pesoTotale += parseInt(array[i]) ;
    
      }

      return pesoTotale
  }

// Infine stampo separatamente quanto pesano i due gruppi di zucchine.

  console.log(pesoZucchineUnder15);

  console.log(pesoZucchineOver15);

  



