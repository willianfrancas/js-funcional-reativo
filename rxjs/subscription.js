import { timer, delay, Observable } from "rxjs";


function generateRandomNumber() {
    return new Observable(subscriber => {
        setInterval(() => {
            subscriber.next(Math.random);
        }, 500);
    });
}

// const obs = generateRandomNumber();
// obs.pipe(delay(3000)).subscribe(console.log);

// setTimeout(() => {
//     obs.unsubscribe();
// }, 10000);


const obsTimer = timer(3000, 500)
const sub1 = obsTimer.subscribe(num => {
    console.log(`#${i} gerou o número ${num}`);
});

setTimeout(() => {
    sub1.unsubscribe();
}, 10000);