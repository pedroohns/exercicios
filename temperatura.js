const celsius = document.getElementById('celsius');
const btn = document.getElementById('converter');
const fahrenheit = document.getElementById('fahrenheit');

btn.addEventListener('click', () => {
    const raw = celsius.value;
    console.log('valor digitado', raw);

const temperatura = Number(raw);
console.log(temperatura);

const resultado = temperatura * 1.8 + 32;
console.log(resultado);

fahrenheit.textContent = resultado + " °F";

});