document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Coleta os valores dos campos
    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const telefone = document.querySelector('input[name="telefone"]').value;
    const assunto = document.querySelector('input[name="assunto"]').value;
    const mensagem = document.querySelector('textarea[name="mensagem"]').value;

    // Validação simples
    if (!nome || !email || !telefone || !assunto || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Enviar os dados com AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/enviar-mensagem", true); // Substitua pela URL do seu backend

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Formatar os dados para envio
    const dados = `nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&telefone=${encodeURIComponent(telefone)}&assunto=${encodeURIComponent(assunto)}&mensagem=${encodeURIComponent(mensagem)}`;

    // Função de callback após o envio
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert("Mensagem enviada com sucesso!");
            // Limpar o formulário após o envio
            document.getElementById('contatoForm').reset();
        } else {
            alert("Houve um erro ao enviar a mensagem.");
        }
    };

    // Enviar a requisição
    xhr.send(dados);
});
