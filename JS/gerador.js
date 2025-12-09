const btnGerar = document.getElementById('gerar');
const campoSenha = document.getElementById('senha');

// btnGerar.addEventListener('click', () => {
//     console.log("botao funcionado");
// });

document.getElementById("gerar").addEventListener("click", function () {
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()-_=+[]{};:,<.>/?";


    const todosCaracteres = minusculas + maiusculas + numeros + simbolos;
    let senha = "";
    let tamanho = 12;

    for (let i = 0; i < tamanho; i++) {
        let senhaAleatoria = Math.floor(Math.random() * todosCaracteres.length);
        senha += todosCaracteres[senhaAleatoria];
    }

    document.getElementById("senha").value = senha;
});