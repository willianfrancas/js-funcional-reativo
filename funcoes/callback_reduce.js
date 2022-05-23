const carrinho = [
    { produto: 'Caneta', quantidade: 10, preco: 7.99 },
    { produto: 'Impressora', quantidade: 0, preco: 649.50 },
    { produto: 'Caderno', quantidade: 4, preco: 27.10 },
    { produto: 'Lapis', quantidade: 3, preco: 5.82 },
    { produto: 'Tesoura', quantidade: 1, preco: 19.20 },
];

const fnTotalPorItem = (item) => {
    return item.quantidade * item.preco;
}
const fnTotalOrcamento = (acc, el) => {
    return acc + el;
}

const retTotalItem = carrinho.map(fnTotalPorItem);
const retTotalBudget = retTotalItem.reduce(fnTotalOrcamento);

console.log(retTotalItem);
console.log(retTotalBudget);

// const reduce = [9, 7, 23, 8, 45, 12, 6].reduce((acc, el) => acc + el);
// const reduceB = [1, 2, 3, 4].reduce((acc, el) => acc * el);
// console.log(reduce);
// console.log(reduceB);