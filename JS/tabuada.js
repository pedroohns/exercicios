const btn = document.getElementById('gerar');

btn.addEventListener('click', () => {
    console.log("botao funcionando");

    const numeroDigitado = document.getElementById('numero').value;
    console.log("valor: ", numeroDigitado);

    const numero = Number(numeroDigitado);
    console.log(numero);

    let resultado = "";

    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }

    document.getElementById('resultado').innerHTML = resultado;
});
