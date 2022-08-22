import { from, Observable } from 'rxjs';

function primeiro() {
    return function (source) {
        return new Observable(subscriber => {
            source.subscribe({
                next(v) {
                    subscriber.next(v * 4);
                    // subscriber.complete();
                }
            });
        });
    }
}

function ultimo() {
    return function (source) {
        return new Observable(subscriber => {
            let ultimo;
            source.subscribe({
                next(v) {
                    ultimo = v;
                    // subscriber.next(v + 2000); 
                },
                complete() {
                    subscriber.next(ultimo);
                    subscriber.complete();
                }
            })
        });
    }
}

// from([1, 2, '3', 4, 5]).pipe(primeiro()).subscribe(console.log);

from([1, 2, 3, 4, 5]).pipe(ultimo()).subscribe(console.log);