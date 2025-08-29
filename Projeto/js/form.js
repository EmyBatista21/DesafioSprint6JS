
//class contato

class contato {
    constructor(nome, email, telefone, tipo, mensagem, aceitouTermos, aceitouNewsLetter) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipo = tipo;
        this.mensagem = mensagem;
        this.aceitouTermos = aceitouTermos;
        this.aceitouNewsLetter = aceitouNewsLetter;
    }
}

function validarEnvio(){
    const termosCheckbox = document.getElementById("termosCheckbox");
    const enviarBtn = document.getElementById("enviarBtn");

    enviarBtn.disabled = !termosCheckbox.checked;
}

function Post(form) {

    const termosCheckbox = document.getElementById("termosCheckbox");
    const newLetterCheckbox = document.getElementById("newsletterCheckbox");

    if(!termosCheckbox.checked){
        alert("Por favor, aceite os Termos e Condições para enviar o formulário");
    }

    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("tipo").value,
        form.elements.namedItem("mensagem").value,
        termosCheckbox.checked,
        newLetterCheckbox.checked);

    console.log("dados do formulário:", data);

    alert(`Obrigado, ${data.nome}! Sua mensagem de ${data.tipo} foi enviado com sucesso.`);

    termosCheckbox.checked = false;
    newLetterCheckbox.checked = false;

    validarEnvio();

    form.reset();
}

document.addEventListener("DOMContentLoaded", function(){
    validarEnvio();
})