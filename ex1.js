//vou fazer os mesmos exercicios de python em javascript
//--------------------------------------------------------

//exercicio calculadora basica

let num1 = 10;
let num2 = 20;

const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;
const restoDaDivisao = num1 % num2;

console.log(`a soma dos dois numeros é: ${soma}`);
console.log(`a subtraçao dos dois numeros é: ${subtracao}`);
console.log(`a multiplicação dos dois numeros é: ${multiplicacao}`);
console.log(`a divisão dos dois numeros é: ${divisao}`);
console.log(`o resto da divisao entre os dois numeros é: ${restoDaDivisao}`);

//exercicio mensagem personalizada

let nome = "pedro";
let idade = 20;
let altura = 1.75;
let peso = 75;

console.log(`Olá, meu nome é ${nome}, eu tenho ${idade} anos, minha altura é ${altura} e eu peso ${peso}kg.`);

//exercicio calcular maioridade

let idade1 = 20;

if (idade < 18) {
    console.log("Menor de idade.")
} 
else if (idade === 18) {
    console.log("Possui 18 anos.")
} 
else {
    console.log("Maior de idade.")
}

//exercicio calcular imc

let pesoIMC = 76;
let alturaIMC = 1.75;

imc = peso / (altura ** 2);

if (imc < 18.5) {
    console.log("Abaixo do peso");
}
else if (imc >= 18.5 && imc < 24.9) {
    console.log("Peso normal");
}
else if (imc <= 25 && imc < 29.9) {
    console.log("Sobrepeso");
}
else if (imc <= 30 && imc < 34.9) {
    console.log("Obesidade grau 1");
}
else if (imc <= 35 && imc < 39.9) {
    console.log("Obesidade grau 2");
}
else if (imc >= 40) {
    console.log("Obesidade grau 3");
}
else if (imc > 60) {
    console.log("Obesidade mórbida");
}
else {
    console.log("Morreu.");
}

console.log(`Seu IMC é ${imc.toFixed(2)}`);

//exercicio calcular par ou impar 

let num9 = 10;

if (num9 % 2 === 0) {
    console.log("Numero par")
}
else {
    console.log("Numero impar");
}

//exercicio conversor de metros

let metros = 100
let centimetros = metros * 100;
let milimetros = metros * 1000;
let km = metros / 1000;

console.log(`${metros} metros equivalem a ${centimetros} centimetros, ${milimetros} milimetros e ${km}km.`);

//exercicio converter celsius para fahrenheit
//formula: fahrenheit = celcius * 1.8 + 32

let celsius = 20;
fahrenheit = celsius * 1.8 + 32;

console.log(`a temperatura em celsius é ${celsius}, e em fahrenheit é ${fahrenheit}.`);

//exercicio media de tres notas (aprovado e reprovado)

const nota1 = 8;
const nota2 = 10;
const nota3 = 7;

media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log("Aprovado.");
}
else if (media >= 5 && media < 6.9) {
    console.log("Recuperação");
}
else if (media < 5) {
    console.log("Reprovado.");
}

//exercicio desconto em produtos

let produto = 100;
desconto = produto * 20 / 100;
valorFinal = produto - desconto;

console.log(`o produto originalmente custa ${produto} reais, com o desconto de ${desconto} reais, ele passa a custar ${valorFinal} reais.`);

//exercicio verificar multiplos

let numero1 = 5;
let numero2 = 10;

if (numero1 % numero2 === 0 || numero2 % numero1 === 0) {
    console.log("numeros multiplos")
}
else 
    console.log("nao sao multiplos")