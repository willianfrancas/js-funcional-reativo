function gerarNumeros() {
    return {
        iniciar(fn, intervalo = 1000) {
            let num = 0;
            const i = setInterval(() => {
                fn(num++);
            }, intervalo)
            return {
                parar() {
                    clearInterval(i);
                }
            }
        }
    }
}

const temp1 = gerarNumeros()
const exec1 = temp1.iniciar(a => {
    console.log(`#1 ${a * 2}`);
}, 1000);



const temp2 = gerarNumeros()
const exec2 = temp2.iniciar(b => {
    console.log(`#2 ${b + 100}`);
}, 2000);

setTimeout(() => {
    exec1.parar();
    exec2.parar();
}, 10000);