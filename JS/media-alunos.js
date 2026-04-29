const primeiraNota = document.getElementById('primeiraNota');
const segundaNota = document.getElementById('segundaNota');
const terceiraNota = document.getElementById('terceiraNota');
const botao = document.getElementById('calcular');
const resultado = document.getElementById('resultado');
const situacao = document.getElementById('situacao');

botao.addEventListener('click', () => {
    const nota1 = Number(primeiraNota.value);
    const nota2 = Number(segundaNota.value);
    const nota3 = Number(terceiraNota.value);

    if (Number.isNaN(nota1) || Number.isNaN(nota2) || Number.isNaN(nota3)) {
        situacao.textContent = "Digite notas válidas, apenas.";
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;
    resultado.textContent = `sua media é ${media.toFixed(1)}`;
    if (media >= 7) {
        situacao.textContent = "parabéns, voce esta APROVADO!";
    } else if (media >= 5 && media < 7) {
        situacao.textContent = "voce esta de RECUPERAÇAO";
    } else if (media < 5) {
        situacao.textContent = "voce esta REPROVADO";
    }
});