/***************** Form principal ***************/


document.getElementById('emailForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita o envio do formulário

  const loadingBar = document.getElementById('loadingBar');
  loadingBar.style.display = 'block'; // Exibe a barra de carregamento

  // Inicia a animação da barra de carregamento
  setTimeout(() => {
    loadingBar.style.width = '100%'; // Preenche a barra
  }, 100); // Um pequeno delay para o efeito ser notado

  // Simula o envio do e-mail
  setTimeout(() => {
    loadingBar.style.width = '0'; // Reseta a barra
    loadingBar.style.display = 'none'; // Esconde a barra

    // Para enviar o formulário de verdade, descomente a linha abaixo
    event.target.submit(); // Descomente para realmente enviar o formulário
  }, 2000); // Tempo simulado de envio (2 segundos)
});

const validarForm = () => {
  const nameInput = document.getElementById('name');
  const emailForm = document.getElementById('emailForm');

  // Adiciona o evento de envio ao formulário
  emailForm.addEventListener('submit', function (event) {
    const name = nameInput.value;

    // Verifica se o nome é válido
    if (name.length > 0) {
      event.preventDefault(); // Evita o envio do formulário

      const formContainer = this.closest('.mb-20px'); // Seleciona o contêiner do formulário
      formContainer.classList.add('flying'); // Adiciona a classe de animação

      // Simula um atraso para mostrar a animação antes de enviar
      setTimeout(() => {
        // Aqui você pode enviar o formulário de verdade
        // Para enviar o formulário de verdade, descomente a linha abaixo
        // event.target.submit(); // Descomente para realmente enviar o formulário

        // Simulação de envio
      }, 500); // Duração da animação
    } else {

      console.log('O campo nome está vazio.');

      const btn = document.getElementById('btn')
      btn.style.backgroundColor = 'red'
      btn.innerText = 'Dados Incorretos'



      const formContainer = this.closest('.mb-20px'); // Seleciona o contêiner do formulário
      formContainer.classList.add('flying_empy'); // Adiciona a classe de animação

      // Simula um atraso para mostrar a animação antes de enviar
      setTimeout(() => {
        // Aqui você pode enviar o formulário de verdade
        // Para enviar o formulário de verdade, descomente a linha abaixo
        // event.target.submit(); // Descomente para realmente enviar o formulário

        // Simulação de envio
      }, 500); // Duração da animação



    }
  });
}

// Chama a função para configurar a validação
validarForm();




/************************* Forms secundarios *************************** */
document.getElementById('emailForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita o envio do formulário

  const formContainer = this.closest('.px-4'); // Seleciona o contêiner do formulário
  formContainer.classList.add('flying'); // Adiciona a classe de animação

  // Simula um atraso para mostrar a animação antes de enviar
  setTimeout(() => {
    // Aqui você pode enviar o formulário de verdade
    // Para enviar o formulário de verdade, descomente a linha abaixo
    // event.target.submit(); // Descomente para realmente enviar o formulário

    // Simulação de envio
  }, 500); // Duração da animação
});

document.getElementById('fone').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos

  // Limita a 11 dígitos
  if (value.length > 11) {
    value = value.slice(0, 11);
  }

  // Aplica a máscara
  const areaCode = value.substring(0, 2);
  const firstPart = value.substring(2, 7);
  const secondPart = value.substring(7, 11);

  let formatted = '';

  if (areaCode) {
    formatted += '(' + areaCode + ') '; // Adiciona o DDD entre parênteses
  }
  if (firstPart) {
    formatted += firstPart; // Adiciona os primeiros 5 dígitos
  }
  if (secondPart) {
    formatted += '-' + secondPart; // Adiciona os últimos 4 dígitos
  }

  e.target.value = formatted.trim(); // Atualiza o valor do campo
});

function updateFileName() {
  const fileInput = document.getElementById('file-upload');
  const fileNameDisplay = document.getElementById('file-name');
  if (fileInput.files.length > 0) {
    fileNameDisplay.textContent = fileInput.files[0].name;
  } else {
    fileNameDisplay.textContent = 'Selecione um arquivo';
  }
}