const carrinho = [
    { produto: 'Caneta', quantidade: 10, preco: 7.99 },
    { produto: 'Impressora', quantidade: 0, preco: 649.50 },
    { produto: 'Caderno', quantidade: 4, preco: 27.10 },
    { produto: 'Lapis', quantidade: 3, preco: 5.82 },
    { produto: 'Tesoura', quantidade: 1, preco: 19.20 },
];

const qtdThanZero = (item) => item?.quantidade > 0;
console.log(carrinho.filter(qtdThanZero));


Array.prototype.meuFiltro = function (fn) {

    const filter = [];
    for (let i = 0; i <= this.length; i++) {
        if (fn(this[i], i, this)) {
            filter.push(this[i].produto);
        }
    }

    return filter;
}

console.log(carrinho.meuFiltro(qtdThanZero));
