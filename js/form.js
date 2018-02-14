function obtemPacienteDoFormulario(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value,form.altura.value)
  };

  return paciente;
}

function montaTd(dado,classe){
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;
  return td;
}

function montaTr(paciente){
  var pacienteTr = document.createElement("tr");

  var nomeTd = montaTd(paciente.nome,"info-nome");
  var pesoTd = montaTd(paciente.peso,"info-peso");
  var alturaTd = montaTd(paciente.altura,"info-altura");
  var gorduraTd = montaTd(paciente.gordura,"info-gordura");
  var tdImc = montaTd(paciente.imc,"info-imc");

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(tdImc);

  return pacienteTr;

}

function validaPaciente(paciente){
  var erros = [];
  if(paciente.peso.length <= 0){
    var erro = {
      nome: 'peso',
      message: 'O peso não pode ser vazio'
    };

    erros.push(erro);
  }

  if(paciente.altura.length <= 0){
    var erro = {
      nome: 'altura',
      message: 'A altura não pode ser vazia'
    };

    erros.push(erro);
  }

  if(paciente.nome.length <= 0){
    var erro = {
      nome: 'nome',
      message: 'O nome não pode ser vazio'
    };

    erros.push(erro);
  }


  if(paciente.gordura.length <= 0){
    var erro = {
      nome: 'gordura',
      message: 'A gordura não pode ser vazio'
    };

    erros.push(erro);
  }

  if(!validaPeso(paciente.peso)){
    var erro = {
      nome: 'peso',
      message: 'Peso inválido'
    };

    erros.push(erro);
  }

  if(!validaAltura(paciente.altura)){
    var erro = {
      nome: 'altura',
      message: 'Altura inválida'
    };

    erros.push(erro);
  }

  return erros;

}

function adicionaPaciente(paciente){
  var pacienteTr = montaTr(paciente);
  var tbody = document.querySelector("#tabela-pacientes");
  tbody.appendChild(pacienteTr);
}

var form = document.querySelector("form[name='form-adiciona']");

form.addEventListener("submit",function(e){

  e.preventDefault();
  paciente = obtemPacienteDoFormulario(form);

  var erros = validaPaciente(paciente);

  var msgs = document.querySelectorAll(".msg-erro");
  msgs.forEach(function(msg){
    msg.textContent = "";
    msg.classList.remove('is-invalid');
  });


  if(erros.length > 0){

    erros.forEach(function(erro){
      var spanErro = document.querySelector("#span-"+erro.nome);
      spanErro.classList.add('is-invalid');
      spanErro.textContent = erro.message;
    });
    return;
  }


  adicionaPaciente(paciente);

  form.reset();

});
