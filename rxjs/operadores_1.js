// 2 Tipos
// 1. Operadores de criação
const { of, pipe } = require('rxjs');


// 2. Operadores Encadeaveis (Pipeable Op.)
const { last, take } = require('rxjs/operators');


const obs = of(1, 2, 'ana', false, 'ultimo');
obs.pipe(take(4))
    .subscribe(valor => console.log(`O valor gerado foi: ${valor}`));