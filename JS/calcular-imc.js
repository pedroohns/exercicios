const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const botao = document.getElementById('calcularIMC');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', () => {
    const alturaUser = Number(altura.value);
    const pesoUser = Number(peso.value);

    if (alturaUser === 0) {
        resultado.textContent = "Digite uma altura válida.";
        resultado.style.color = "red";
        return;
    }

    if (Number.isNaN(alturaUser) || Number.isNaN(pesoUser)) {
        resultado.textContent = "Digite valores válidos.";
        resultado.style.color = "red";
        return;
    }

    const imc = pesoUser / (alturaUser * alturaUser);

    if (imc < 18.5) {
        resultado.textContent = `${imc.toFixed(1)} - abaixo do peso`;
        resultado.style.color = "blue";
    } else if (imc >= 18.5 && imc < 25) {
        resultado.textContent = `${imc.toFixed(1)} - peso normal`;
        resultado.style.color = "green";
    } else if (imc >= 25 && imc < 30) {
        resultado.textContent = `${imc.toFixed(1)} - sobrepeso`;
        resultado.style.color = "orange";
    } else if (imc >= 30) {
        resultado.textContent = `${imc.toFixed(1)} - obesidade`;
        resultado.style.color = "red";
    }
});