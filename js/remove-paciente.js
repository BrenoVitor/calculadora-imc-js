var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener('dblclick',function(){
  if(event.target.tagName == "TD"){
    var paciente = event.target.parentNode;
    paciente.classList.add("is-fadeOut");
    setTimeout(function(){
      paciente.remove();
    },500)
  }
})
