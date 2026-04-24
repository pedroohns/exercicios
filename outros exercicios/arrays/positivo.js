const contas = [
  { nome: "Ana", saldo: 100 },
  { nome: "Carlos", saldo: -20 },
  { nome: "Maria", saldo: 300 },
  { nome: "João", saldo: -10 }
];

const positivos = contas.filter(contas => contas.saldo > 0);
console.log(positivos);

const soma = positivos.reduce((acumulador, positivos) => {
    return acumulador + positivos.saldo
}, 0);
console.log(soma);