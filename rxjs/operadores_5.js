import { of, Observable } from 'rxjs';

function somenteComSobrenome(ultimoNome) {
    return function (source) {
        return new Observable(subscriber => {
            source.subscribe({
                next(name) {
                    if (name.includes(ultimoNome)) {
                        subscriber.next(name);
                    }
                }
            })
        });
    }
}

of('William Silva', 'Priscila Silva', 'Aline Silva', 'Guilherme França')
    .pipe(somenteComSobrenome('Silva'))
    .subscribe(console.log);