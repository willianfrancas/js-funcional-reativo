const carrinho = [
    { produto: 'Caneta', quantidade: 10, preco: 7.99, fragil: true },
    { produto: 'Impressora', quantidade: 1, preco: 649.50, fragil: true },
    { produto: 'Caderno', quantidade: 4, preco: 27.10, fragil: false },
    { produto: 'Lapis', quantidade: 3, preco: 5.82, fragil: false },
    { produto: 'Tesoura', quantidade: 1, preco: 19.20, fragil: true },
];

const isFragil = item => item.fragil;
const getTotal = item => item.quantidade * item.preco;
const getMedia = (acc, el) => {
    const qtd = acc.quantidade + 1;
    const precoTotal = acc.preco + el;
    return {
        quantidade: qtd,
        preco: precoTotal,
        media: precoTotal / qtd,
    }
};

const itemFragil = carrinho.filter(isFragil);
const totais = itemFragil.map(getTotal);
const medias = totais.reduce(getMedia, { quantidade: 0, preco: 0, media: 0 });

console.log(itemFragil)
console.log(totais)
console.log(medias.media)