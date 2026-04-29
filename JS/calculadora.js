const primeiroNumero = document.getElementById('primeiroNumero');
const segundoNumero = document.getElementById('segundoNumero');
const botaoSoma = document.getElementById('soma');
const botaoSubtracao = document.getElementById('subtracao');
const botaoMultiplicacao = document.getElementById('multiplicacao');
const botaoDivisao = document.getElementById('divisao');
const resultado = document.getElementById('resultado');

//FUNÇAO PRINCIAPL
function calcular(operacao) {
    const valor1 = Number(primeiroNumero.value);
    const valor2 = Number(segundoNumero.value);

//VALIDAÇAO
    if (Number.isNaN(valor1) || Number.isNaN(valor2)) {
        resultado.textContent = "Digite valores validos!";
        resultado.style.color = "red";
        return;
    }

    if (operacao === 'divisao' && valor2 === 0) {
        resultado.textContent = "Não é possivel dividir por zero.";
        resultado.style.color = "red";
        return;
    }

    let resultadoFinal;

//DECISAO DE OPERACAO
    if (operacao === 'soma') {
        resultadoFinal = valor1 + valor2;
    } else if (operacao === 'subtracao') {
        resultadoFinal = valor1 - valor2;
    } else if (operacao === 'multiplicacao') {
        resultadoFinal = valor1 * valor2;
    } else if (operacao === 'divisao') {
        resultadoFinal = valor1 / valor2;
    }

//RESULTADO
resultado.textContent = `O resultado é ${resultadoFinal}`;
resultado.style.color = "black";
}

//EVENTOS
botaoSoma.addEventListener('click', () => calcular('soma'));
botaoSubtracao.addEventListener('click', () => calcular('subtracao'));
botaoMultiplicacao.addEventListener('click', () => calcular('multiplicacao'));
botaoDivisao.addEventListener('click', () => calcular('divisao'));