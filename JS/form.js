const usuario = document.getElementById('inputUsuario');
const senha = document.getElementById('inputSenha');
const botao = document.getElementById('btnLogin');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', function() {

    if (usuario.value.trim() === "" || senha.value.trim() === "") {
    mensagem.textContent = "Você precisa digitar um usuario e senha.";
    mensagem.style.color = "red";
    return;
}

    if (usuario.value === "admin" && senha.value === "123") {
    mensagem.textContent = "Login realizado com sucesso";
    mensagem.style.color = "green";
} else {
    mensagem.textContent = "Usuario ou senha invalidos";
    mensagem.style.color = "red";
}
});

    senha.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            botao.click();
        }
    });
