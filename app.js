function openTab(id) {
  document.querySelectorAll('.content').forEach(content => {
    content.classList.remove('active');
  });
  document.querySelectorAll('.tab-button').forEach(button => {
    button.classList.remove('active');
  });
  setTimeout(() => {
    document.getElementById(id).classList.add('active');
    document.getElementById(`btn-${id}`).classList.add('active');
  }, 100);
}

function responder(button, isCorrect) {
  // Localiza o contêiner pai do botão clicado
  const parent = button.closest('div');

  // Localiza o feedback dentro do contêiner pai
  const feedback = parent.querySelector('.feedback');

  // Define o texto e a cor do feedback com base na resposta
  if (isCorrect) {
    feedback.textContent = 'Correto!';
    feedback.style.color = 'green';
  } else {
    feedback.textContent = 'Errado! Tente novamente.';
    feedback.style.color = 'red';
  }
}