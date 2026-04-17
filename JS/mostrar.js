const botao = document.getElementById('btnToggle');
const texto = document.getElementById('texto');

botao.addEventListener('click', function() {
    if (texto.style.display === "none") {
        texto.style.display = "block";
        botao.textContent = "Esconder";
    } else {
        texto.style.display = "none";
        botao.textContent = "Mostrar";
    }
    
});