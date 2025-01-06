document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" && 
    document.getElementById("email").value != "" && 
    document.getElementById("telefone").value != ""){
    alert("Prontinho! Você receberá as novidades por email.");
  }else{
    alert("Por favor, preencha os campos nome, email e telefone!");
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> fe2144c38184d1a112afb5a1303fd458e00ab779
