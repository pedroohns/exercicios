//declaração dos botoes e do contador
const contador = document.getElementById('contador');
const btnMais = document.getElementById('btnMais');
const btnMenos = document.getElementById('btnMenos');

//valor inicial do contador
let valor = 0;

//sempre que voce clicar no botao + ele vai aumentar o valor
btnMais.addEventListener('click', () => {
    valor++;
    contador.textContent = valor;
});

//sempre que voce clicar no botao - ele vai diminuir o valor 
btnMenos.addEventListener('click', () => {
    valor--;
    contador.textContent = valor;
});