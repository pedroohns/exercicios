const numeros = [1, 2, 3, 4];
const somaNumeros = numeros.reduce((acumulador, numeros) => {
    return acumulador + numeros;
}, 0);
console.log(somaNumeros);