import { Observable, Subject } from "rxjs";

function getObservable() {
    return new Observable(subscriber => {
        setTimeout(() => {
            console.log('#1 Obs...');
            subscriber.next(Math.random());
        }, 1000);
    });
}


const obs = getObservable();
obs.subscribe(console.log);
obs.subscribe(console.log);

function getSubject() {
    const subj = new Subject();
    setTimeout(() => {
        console.log('#1 Sub...');
        subj.next(Math.random());
        subj.complete();
    }, 1000);
    return subj;
}

const sub = getSubject();
sub.subscribe(console.log);
sub.subscribe(console.log);