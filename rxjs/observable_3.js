const { Observable, noop } = require('rxjs');

const number$ = new Observable(subscriber => {
    const randomNumber = Math.floor(Math.random() * (10 - 4 + 1) + 4);
    if (randomNumber !== 10) {
        subscriber.next(randomNumber);
    } else {
        subscriber.complete();
    }
})


// setInterval(() => {
//     const numb = number$.subscribe({
//         next(valor) {
//             console.log(`Valor: ${valor}`)
//         },
//         error(msg) {
//             console.log(`Erro: ${msg}`)
//         },
//         complete() {
//             console.log(`Fim`)
//         }
//     });

// }, 100);


/**
 * SOLUÇÃO DA AULA 
 */

function entre(min, max) {
    // if (min > max) [min, max] = [max, min];
    return new Observable(subscriber => {
        for (let i = min; i <= max; i++) {
            subscriber.next(i);
        }
        subscriber.complete();
    })
}

entre(4, 10).subscribe(
    num => console.log(`num: ${num}`),
    noop,
    () => console.log('Fim!')
);