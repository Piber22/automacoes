// Seleciona os botões
const btnRecebimento = document.getElementById('longas');
const btnEncarregadas = document.getElementById('pro');



// Redirecionamento ao clicar em "Longas"
btnRecebimento.addEventListener('click', () => {
  loginError.textContent = ""; // limpa mensagem
  window.location.href = "https://scripts-qe466xhvxsnhjd4af6qg8i.streamlit.app"; // redireciona
});

// Redirecionamento ao clicar em "Relatório"
btnEncarregadas.addEventListener('click', () => {
  loginError.textContent = ""; // limpa mensagem
  window.location.href = "encarregadas/encarregadas.html"; // redireciona
});


