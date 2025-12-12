//EXERCICIOS UTILIZANDO ARRAYS, MAP, FILTER E REDUCE

//PRIMEIRO EXERCICIO - utilizar map para mostrar o nome do produto e o preço com 15% de desconto, considerando a seguinte array:

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

//SEGUNDO EXERCICIO - utilizar filter para separar os produtos com preço maior que 60 ou menor e igual a 60, baseando em produtos caros ou baratos
const produtosCaros = produtos.filter(produto => produto.preco > 60);
const produtosBaratos = produtos.filter(produto => produto.preco <= 60);
console.log(produtosCaros);
console.log(produtosBaratos);

//TERCEIRO EXERCICIO - utilizar reduce para calcular o valor total dos pedidos abaixo
const pedidos = [
    { cliente: "Ana", total: 150 },
    { cliente: "Bruno", total: 200 },
    { cliente: "Carla", total: 100 },
    { cliente: "Daniel", total: 180 }
];

const valorTotal = pedidos.reduce((acumulador, pedido) => {
    return acumulador + pedido.total
}, 0);
console.log(valorTotal);

//QUARTO EXERCICIO - combinar map, filter e reduce para manipular a seguinte lista de alunos
//utilize filter para mostrar calcular os alunos aprovados
//utilize map para mostrar o nome dos aprovados
//utilize reduce para calcular a media dos alunos 
const alunos = [
    { nome: "Ana", nota: 9 },
    { nome: "Bruno", nota: 6 },
    { nome: "Carla", nota: 8 },
    { nome: "Diego", nota: 4 },
    { nome: "Eduarda", nota: 7 }
];
const aprovados = alunos.filter(aluno => aluno.nota >= 7);
console.log(aprovados);
const nomeAprovados = aprovados.map(aluno => aluno.nome);
console.log(nomeAprovados);

const soma = alunos.reduce((acumulador, aluno) => {
    return acumulador + aluno.nota;
}, 0);
const media = soma / alunos.length;
console.log(media);

//---------------------------------------------------------------------------------------------------------------------//

//outros exercicios envolvendo esse mesmo tema:

//dobrar os numeros
const numeros = [1, 2, 3, 4, 5];

const numerosDobrados = numeros.map(numero => numero * 2);
console.log(numerosDobrados);

//transformar nomes em maiusculo
const nomes = ["ana", "pedro", "carlos"];

const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log(nomesMaiusculos);

//criar mensagens personalizadas
const pessoas = ["Maria", "Pedro", "Francisco"];
const mensagem = pessoas.map((nome) => {
    return "Olá " + nome;
});
console.log(mensagem);

//filtrar numeros maiores que 10
const valores = [5, 12, 8, 21, 3, 18];
const maioresQue10 = valores.filter(valores => valores > 10);
console.log(maioresQue10);

//filtrar nomes que começam com a letra A
const nomes1 = ["Amanda", "Pedro", "Maria", "Ana", "Aline", "Lucas"];
const nomesComA = nomes1.filter(nomes1 => nomes1.startsWith("A"));
console.log(nomesComA);

//filtrar idades de adultos
const idades = [10, 17, 18, 25, 13, 30];
const adultos = idades.filter(idades => idades >= 18);
console.log(adultos);

//somar numeros com reduce
const nums = [1, 2, 3, 4];
const somaNums = nums.reduce((acumulador, nums) => {
    return acumulador + nums;
}, 0);
console.log(somaNums);

//calcular media com reduce (parecido com anteriores)
const notas = [7, 8, 6, 10];
const somaNotas = notas.reduce((acumulador, notas) => {
    return acumulador + notas;
}, 0);
const media1 = somaNotas / notas.length;
console.log(media1);

//converter temperatura de celsius para fahrenheit
const temperaturaC = [0, 10, 20, 30];
const temperaturaF = temperaturaC.map(temperaturaC => {
    return temperaturaC * 1.8 + 32;
});
console.log(temperaturaF);

//pegar o primeiro nome
const nomes2 = ["Ana Souza", "Carlos Alberto", "Pedro Henrique"];
const primeiroNome = nomes2.map(nomes2 => nomes2.split(' ')[0]);
console.log(primeiroNome);

//filtrar usuarios com saldo positivo e somar o saldo total

const contas = [
  { nome: "Ana", saldo: 100 },
  { nome: "Carlos", saldo: -20 },
  { nome: "Maria", saldo: 300 },
  { nome: "João", saldo: -10 }
];

const positivos = contas.filter(contas => contas.saldo > 0);
console.log(positivos);

const soma4 = positivos.reduce((acumulador, positivos) => {
    return acumulador + positivos.saldo
}, 0);
console.log(soma4);

//---------------------------------------------------------------------------------------------------------------------//