document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        var email = document.getElementById("email").value;
        var senha = document.getElementById("senha").value;

        var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        var usuario = usuarios.find(function (user) {
            return user.email === email && user.senha === senha;
        });

        if (usuario) {
            document.getElementById("loginMessage").textContent = "Login bem-sucedido!";
            // Redirecionar para outra página após o login bem-sucedido
            window.location.href = "pagina_de_listas.html";
        } else {
            document.getElementById("loginMessage").textContent = "Email ou senha incorretos. Tente novamente.";
            // Redirecionar para a página de cadastro
            window.location.href = "index.html";
        }
     
    });
    
    document.getElementById("cadastro").onclick = function() {
        window.location.href = "index.html";
    };   
});
