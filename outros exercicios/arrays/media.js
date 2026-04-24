const notas = [7, 8, 6, 10];
const somaNotas = notas.reduce((acumulador, notas) => {
    return acumulador + notas;
}, 0);
const media = somaNotas / notas.length;
console.log(media);