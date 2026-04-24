const produtos = [
    {nome: "Camisa", preco: 50},
    {nome: "Calça", preco: 80},
    {nome: "Tenis", preco: 120},
    {nome: "Boné", preco: 40}
];

const precosComDesconto = produtos.map(produto => {
    return {
        nome: produto.nome,
        preco: produto.preco * 0.85
    }
});
console.log(precosComDesconto);

//utilizar filter para separar os produtos com preço maior que 60 ou menor e igual a 60, baseando em produtos caros ou baratos
const produtosCaros = produtos.filter(produto => produto.preco > 60);
const produtosBaratos = produtos.filter(produto => produto.preco <= 60);
console.log(produtosCaros);
console.log(produtosBaratos);