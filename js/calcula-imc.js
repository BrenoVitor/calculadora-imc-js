function calculaImc(peso,altura){
  return (peso / (altura * altura)).toFixed(2);
}

function validaPeso(peso){
  if(peso <= 0 || peso >= 190)
    return false;

    return true;
}

function validaAltura(altura){
  if(altura <= 0 || altura >= 2.60)
  return false;


  return true;
}

var pacientes = document.querySelectorAll('.paciente');
for(var i = 0;i<pacientes.length; i++){

  var paciente = pacientes[i];
  var tdNome = paciente.querySelector(".info-nome");

  var tdPeso = paciente.querySelector(".info-peso");

  var tdAltura = paciente.querySelector(".info-altura");

  var tdImc = paciente.querySelector(".info-imc");


  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;
  var pesoEhValido = validaPeso(peso);
  var alturaEhValido = validaAltura(altura);

  if(!pesoEhValido){
    tdPeso.textContent = "Peso Inválido";

  }

  if(!alturaEhValido){
    tdAltura.textContent = "Altura Inválida";
  }


  if(pesoEhValido && alturaEhValido){
    var imc = calculaImc(peso,altura);
  }else{
    var imc = "IMC inválido";
    paciente.classList.add('is-paciente__row--Invalido');
  }


  tdImc.textContent = imc;
}
