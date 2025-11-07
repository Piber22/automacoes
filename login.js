// Seleciona os botões
const btnRecebimento = document.getElementById('longas');
const btnEncarregadas = document.getElementById('pro');

// Função auxiliar para limpar mensagem (caso exista)
function limparMensagemErro() {
  const loginError = document.getElementById('loginError');
  if (loginError) loginError.textContent = "";
}

// Função de redirecionamento com efeito e opção de nova aba
function redirecionarComEfeito(url, novaAba = false) {
  limparMensagemErro();

  // Cria sobreposição de fade-out
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = '#000';
  overlay.style.opacity = 0;
  overlay.style.transition = 'opacity 0.5s ease';
  overlay.style.zIndex = 9999;
  document.body.appendChild(overlay);

  // Inicia o fade-out
  setTimeout(() => {
    overlay.style.opacity = 1;
  }, 10);

  // Após a animação, redireciona
  setTimeout(() => {
    if (novaAba) {
      window.open(url, '_blank');
    } else {
      window.location.href = url;
    }
  }, 600);
}

// Redirecionamento ao clicar em "Longas"
btnRecebimento.addEventListener('click', () => {
  redirecionarComEfeito("https://scripts-qe466xhvxsnhjd4af6qg8i.streamlit.app", true); // true = nova aba
});

// Redirecionamento ao clicar em "Relatório"
btnEncarregadas.addEventListener('click', () => {
  redirecionarComEfeito("encarregadas/encarregadas.html"); // abre na mesma aba
});
