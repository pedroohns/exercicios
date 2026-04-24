//DESAFIO (map, filter e reduce no mesmo problema)
/* 1. FILTRE PRODUTOS COM PREÇO ACIMA DE 50
   2. PEGUE SOMENTE OS PREÇOS UTILIZANDO MAP
   3. SOME TUDO COM REDUCE || RESULTADO ESPERADO: 1020 || */

const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 120 },
  { nome: "Monitor", preco: 900 },
  { nome: "Cabo USB", preco: 20 }
];

const acimaDe50 = produtos.filter(produtos => produtos.preco > 50);
console.log(acimaDe50);

const apenasPrecos = acimaDe50.map(produtos => produtos.preco);
console.log(apenasPrecos);

const soma = apenasPrecos.reduce((acumulador, preco) => {
    return acumulador + preco;
}, 0);
console.log(soma);