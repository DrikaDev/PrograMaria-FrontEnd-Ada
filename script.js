const botao = document.getElementById("botaoEnviar");

if (botao) {
  botao.addEventListener("click", validarFormulario);
}

function validarFormulario(event){
  event.preventDefault(); //impede o comportamento padrão do botão de enviar
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();

  if(nome === "" ){
    alert("Por favor, preencha o campo nome!");
    return;
  }
  if(email === ""){
    alert("Por favor, preencha o campo email!");
    return;
  }
  if(telefone === ""){
    alert("Por favor, preencha o campo telefone!");
    return;
  }
  alert("Pronto! Você receberá as novidades por email.");
  
  // Limpa os campos do formulário após o envio dos dados:
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefone").value = "";
}

