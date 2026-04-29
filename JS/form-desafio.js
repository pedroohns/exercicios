const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmarSenha');
const idade = document.getElementById('idade');
const botao = document.getElementById('cadastrar');
const mensagem = document.getElementById('mensagem');

//botao
botao.addEventListener('click', () => {
    const valorNome = nome.value.trim();
    const valorEmail = email.value.trim();
    const valorSenha = senha.value;
    const valorConfirmar = confirmarSenha.value;

//validacao de nome
    if (valorNome.length < 3) {
        mensagem.textContent = "Digite um nome valido (min 3 caracteres)";
        mensagem.style.color = "red";
        return;
    }

//validacao de email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(valorEmail)) {
        mensagem.textContent = "Digite um email valido";
        mensagem.style.color = "red";
        return;
    }

//validacao de senha
    if (valorSenha.length < 6) {
        mensagem.textContent = "Digite uma senha de no minimo 6 digitos";
        mensagem.style.color = "red";
        return;
    }

    if (valorSenha !== valorConfirmar) {
        mensagem.textContent = "As senhas nao coincidem";
        mensagem.style.color = "red";
        return;
    }

//validacao de idade
    const valorIdade = Number(idade.value);
    if (Number.isNaN(valorIdade)) {
        mensagem.textContent = "Digite apenas numeros.";
        mensagem.style.color = "red";
        return;
    }

    if (valorIdade < 18) {
        mensagem.textContent = "É preciso ser maior de 18 anos";
        mensagem.style.color = "red";
        return;
    }

    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";

});