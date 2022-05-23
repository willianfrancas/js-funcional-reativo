function textoComTamanhoEntre(min, max, erro, texto) {
    const tamanho = (texto || '').trim().length;
    if (tamanho < min || tamanho > max) {
        throw erro;
    }
}

const p1 = { nome: 'A', preco: 14.99, desc: .25 };
// textoComTamanhoEntre(4, 255, 'nome inválido', p1.nome);

//  v2

function textoComTamanhoEntre_v2(min) {
    return function (max) {
        return function (erro) {
            return function (texto) {
                const tamanho = (texto || '').trim().length;
                if (tamanho < min || tamanho > max) {
                    throw erro;
                }
            }
        }

    }
}

const p2 = { nome: 'A', preco: 14.99, desc: .25 };
textoComTamanhoEntre_v2(4)(255)('Nome inválido')(p2.nome);