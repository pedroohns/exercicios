const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 }
];

const precoAjustado = produtos.map(produtos => {
    return {
        nome: produtos.nome,
        preco: produtos.preco + (produtos.preco * 0.10)
    } 
});
console.log(precoAjustado);