document.addEventListener("DOMContentLoaded", function() {
    function validaFormulario() {
        if (document.getElementById("nome").value == "" || 
            document.getElementById("email").value == "" || 
            document.getElementById("assunto").value == "" || 
            document.getElementById("msg").value == "") {
                return false;
        } else {
            return true;
        }
    }

    document.getElementById("enviar").addEventListener("click", function() {
        if (validaFormulario()) {
            alert("Formulário válido. Enviando...");
        } else {
            alert("Por favor, preencha todos os campos do formulário!");
        }
    });
});