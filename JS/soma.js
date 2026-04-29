const primeiroNumero = document.getElementById('primeiroNumero');
const segundoNumero = document.getElementById('segundoNumero');
const botaoSomar = document.getElementById('somar');
const resultado = document.getElementById('resultado');

botaoSomar.addEventListener('click', () => {
    const valor1 = Number(primeiroNumero.value);
    const valor2 = Number(segundoNumero.value);

    if (Number.isNaN(valor1) || Number.isNaN(valor2)) {
        alert('por favor, digite dois numeros validos.');
        return;
    }

    const soma = valor1 + valor2;
    resultado.textContent = `o resultado é ${soma}`;
});