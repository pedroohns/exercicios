let pesoIMC = 76;
let alturaIMC = 1.75;

imc = peso / (altura ** 2);

if (imc < 18.5) {
    console.log("Abaixo do peso");
}
else if (imc >= 18.5 && imc < 24.9) {
    console.log("Peso normal");
}
else if (imc <= 25 && imc < 29.9) {
    console.log("Sobrepeso");
}
else if (imc <= 30 && imc < 34.9) {
    console.log("Obesidade grau 1");
}
else if (imc <= 35 && imc < 39.9) {
    console.log("Obesidade grau 2");
}
else if (imc >= 40) {
    console.log("Obesidade grau 3");
}
else if (imc > 60) {
    console.log("Obesidade mórbida");
}
else {
    console.log("Morreu.");
}

console.log(`Seu IMC é ${imc.toFixed(2)}`);