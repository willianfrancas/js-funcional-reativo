import { of, Observable, from } from 'rxjs';

function createPipeableOperator(nextFn) {
    return function (source) {
        return new Observable(subscriber => {
            source.subscribe({
                next(value) {
                    nextFn(subscriber, value);
                }
            })
        });
    }
}

function primeiro() {
    return createPipeableOperator((subscriber, value) => {
        subscriber.next(value);
        subscriber.complete();
    });
}

from([1, 2, 3, 4, 5]).pipe(
    primeiro(),
).subscribe(console.log);