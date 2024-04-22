document.addEventListener('DOMContentLoaded', () => {
 const button = document.querySelector('.formcontato__botao');

 button.addEventListener('click', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação básica dos campos
    if (!nome || !email || !assunto || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    } else {
      alert('Mensagem enviada com sucesso!');
    }

    // Validação do email (simples)
    if (!email.includes('@')) {
      alert('Por favor, insira um email válido.');
      return;
    }
 });
});

