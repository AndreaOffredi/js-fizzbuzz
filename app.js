// creiamo la stampa dei numeri da 1 fino a 100
for (let a = 1; a <= 100; a++) {

    // SE multipli di 3 e 5
    if (a % 3 === 0 && a % 5 === 0) {

        console.log('FIZZBUZZ')
    
    // SE multipli di 5
    } else if (a % 5 === 0) {

        console.log('BUZZ')

    // SE multipli di 3
    } else if (a % 3 === 0) {

        console.log('FIZZ')

    // ALTRIMENTI numeri normali  
    } else {

        console.log(a)

    }

}
