document.addEventListener("DOMContentLoaded", function () {
    
    function limparCampos() {
        document.getElementById("nomeInput").value = "";
        document.getElementById("emailInput").value = "";
        document.getElementById("senhaInput").value = "";
        document.getElementById("confSenhaInput").value = "";
    }
    
    function validaFormulario() {
        var nomeCompleto = document.getElementById("nomeInput").value;
        var email = document.getElementById("emailInput").value;
        var senha = document.getElementById("senhaInput").value;
        var confirmaSenha = document.getElementById("confSenhaInput").value;
    
        // Verifica se algum campo está em branco
        var camposVazios = [nomeCompleto, email, senha, confirmaSenha].some(function(campo) {
            return campo.trim() === "";
        });
    
        if (camposVazios) {
            return false; // Campos em branco
        }
    
        if (nomeCompleto.trim().indexOf(' ') === -1) {
            return 3; // Não inseriu o sobrenome
        }
    
        var partesNome = nomeCompleto.split(' ');
        var nome = partesNome[0];
        var sobrenome = partesNome.slice(1).join(' ');
    
        if (senha.length < 6) {
            return 1; // Senha muito curta
        } else if (confirmaSenha !== senha) {
            return 0; // Senhas não coincidem
        } else {
            return true; // Formulário válido
        }
    }
    

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        var validacao = validaFormulario();
        if (validacao === true) {
            alert("Formulário válido. Enviando...");
            limparCampos();
            return false;
        } else if (validacao === false) {
            alert("Por favor, preencha todos os campos do formulário corretamente!");
        } else if (validacao === 0) {
            alert("As senhas não combinam, favor insira a senha utilizada para confirmação");
        } else if (validacao === 1) {
            alert("A senha deve conter pelo menos 6 caracteres.");
        } else if (validacao === 3) {
            alert("É necessário inserir sobrenome.")
        }
    });
});


