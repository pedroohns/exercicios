let ano = 2024;

if (ano % 400 === 0) {
    console.log("bissexto");
}
else if (ano % 100 === 0) {
    console.log("nao bissexto");
}
else if (ano % 4 === 0) {
    console.log("bissexto");
}
else {
    console.log("nao bissexto");
}