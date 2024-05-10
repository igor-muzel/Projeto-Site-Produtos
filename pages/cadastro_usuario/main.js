document.addEventListener("DOMContentLoaded", function () {

    // Recuperar os usuários armazenados no localStorage ou inicializar um array vazio
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    function verificaCadastros(usuarioVerificando) {
        return usuarios.includes(usuarioVerificando);
    }

    function armazenaCadastros(novoUsuario) {
        if (verificaCadastros(novoUsuario.email)) {
            alert("Os dados informados correspondem a um usuário já cadastrado.");
        } else {
            usuarios.push({
                email: novoUsuario.email,
                senha: novoUsuario.senha // Adicionando a senha ao objeto do usuário
            });
            // Atualizar os dados no localStorage
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
        }
    }
    
    

    function limparCampos() {
        document.getElementById("nomeInput").value = "";
        document.getElementById("emailInput").value = "";
        document.getElementById("senhaInput").value = "";
        document.getElementById("confSenhaInput").value = "";
    }
    
    function validaFormulario(nomeCompleto, email, senha, confirmaSenha) {
    
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
        var nome = document.getElementById("nomeInput").value;
        var email = document.getElementById("emailInput").value;
        var senha = document.getElementById("senhaInput").value;
        var confSenha = document.getElementById("confSenhaInput").value;

        var validacao = validaFormulario(nome, email, senha, confSenha);
        if (validacao === true) {
            alert("Formulário válido. Enviando...");
            limparCampos();
            armazenaCadastros(email); // Aqui estou usando o email como identificador único, você pode ajustar conforme necessário
            window.location.href = "index copy.html";
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

    document.getElementById("voltar").onclick = function() {
        window.location.href = "index copy.html";
    };
    
});
