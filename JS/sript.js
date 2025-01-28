// Função para manipular o envio do formulário de contato
document.getElementById('formContato').addEventListener('submit', function(event) {
  event.preventDefault();  // Evita o envio do formulário

  // Coleta os dados do formulário
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;
  
  // Validação simples
  if (nome && email && mensagem) {
      document.getElementById('feedbackMessage').textContent = 'Mensagem enviada com sucesso! Obrigado por entrar em contato.';
      document.getElementById('feedbackMessage').style.color = 'green';

      // Limpa o formulário
      document.getElementById('formContato').reset();
  } else {
      document.getElementById('feedbackMessage').textContent = 'Por favor, preencha todos os campos.';
      document.getElementById('feedbackMessage').style.color = 'red';
  }
});

// Suaviza a navegação para as seções do site
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: 'smooth'
      });
  });
});
