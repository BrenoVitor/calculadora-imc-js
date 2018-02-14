var campoFiltro = document.querySelector("#filtra-paciente");

campoFiltro.addEventListener("input",function(){
  var pacientes = document.querySelectorAll(".paciente");
  pacientes.forEach(function(paciente){
    var tdNome = paciente.querySelector(".info-nome");
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdGordura = paciente.querySelector(".info-gordura");
    var tdImc = paciente.querySelector(".info-imc");
    var nome = tdNome.textContent;
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var gordura = tdGordura.textContent;
    var imc = tdImc.textContent;
    var expressao = new RegExp(campoFiltro.value,"i");
    if(expressao.test(nome) || expressao.test(peso) || expressao.test(altura) || expressao.test(gordura) || expressao.test(imc)){
      paciente.classList.remove("is-invisible");
    }else{
      paciente.classList.add("is-invisible");
    }
  });
});
