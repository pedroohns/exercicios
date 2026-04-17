const numero = document.getElementById('numero');
const botao = document.getElementById('btnSomar');
const botaoDiminuir = document.getElementById('btnDiminuir');
const botaoReset = document.getElementById('btnReset');
const botaoDefinir = document.getElementById('btnDefinir');
const inputNumero = document.getElementById('inputNumero');

botao.addEventListener('click', function() {
    let valorAtual = Number(numero.textContent);
    let novoValor = valorAtual + 1;
    numero.textContent = novoValor;
});

botaoDiminuir.addEventListener('click', function() {
    let valorAtual = Number(numero.textContent);
    if (valorAtual > 0) {
    let novoValor = valorAtual - 1;
    numero.textContent = novoValor;
    } 
});

botaoReset.addEventListener('click', function() {
    numero.textContent = 0;
});

botaoDefinir.addEventListener('click', function() {
    let valorInput = inputNumero.value;

    if (valorInput.trim() !== "") {
        let numeroConvertido = Number(valorInput);
        numero.textContent = numeroConvertido;
        inputNumero.value = "";
    }
});