const readline = require("readline");

function obterResposta(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => {
        rl.question(question, resp => {
            resolve(resp);
            rl.close();
        });
    });
}

// obterResposta('Esse é um teste? ')
//     .then(console.log);

/** @function namorada é um Observer */
function namorada() {
    console.log('N: Apagar as luzes...');
    console.log('N: Pedir silêncio...');
    console.log('N: Gritar surpresa!!!');
}

/** @function sindico é um Observer */
function sindico() {
    console.log('S: monitorar barulho...');
}

/** @function porteiro é o Subject */
async function porteiro(interessados) {
    while (true) {
        const resp = await obterResposta('O namorado chegou? (s / N / q) ')
        if (resp.toLowerCase() === 's') {
            // os observadores são notificados
            interessados.forEach(obs => obs());
        }
        if (resp.toLowerCase() === 'q') {
            break
        }
    }
}

/**
 * Chamada da Função -> Registra os observadores (namorada e sindico)
 * O subject é o porteiro!
 */
porteiro([namorada, sindico]);
