const nota1 = 8;
const nota2 = 10;
const nota3 = 7;

media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log("Aprovado.");
}
else if (media >= 5 && media < 6.9) {
    console.log("Recuperação");
}
else if (media < 5) {
    console.log("Reprovado.");
}