function gerarElementos(array) {
    return {
        iniciar(fn) {
            let index = 0;
            const sInt = setInterval(() => {
                if (index >= array.length) {
                    clearInterval(sInt);
                } else {
                    fn(array[index])
                    index++
                }
            }, 1000)
            return {
                parar() {
                    clearInterval(sInt);
                }
            }
        }
    }
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const temp1 = gerarElementos(numeros)

temp1.iniciar(num => {
    console.log(Math.pow(2, num));
})