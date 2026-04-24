//filtrar palavras que possuem mais de 5 letras
const palavras = ["carro", "bicicleta", "sol", "avião", "computador"];
//const maisDe5letras = palavras.filter(palavras => palavras.lenght > 5);
//o codigo pode ser drasticamente simplificado e ficar extremamente mais legivel
const maisDe5Letras = palavras.filter(palavras =>  {
    if (palavras.length > 5) {
        return true;
    } else {
        return false;
    }
});
//novamente cometi um erro "grave" na hora de utilizar o filter...
//o filter ja retorna booleano, entao nao tem muita necessidade de usar condicionais nesses casos
//o mais apropriado pra esse caso, seria o comentario abaixo das variaveis
console.log(maisDe5Letras);