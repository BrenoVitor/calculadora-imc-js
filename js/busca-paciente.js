var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click",function(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
  xhr.addEventListener('load',function(){
    var load = document.querySelector('#load');
    load.classList.remove('is-invisible');
    setTimeout(function(){
      var ajaxErro = document.querySelector('#ajax-erro');
      var ajaxSuccess = document.querySelector('#ajax-success');
      ajaxErro.classList.add('is-invisible');
      ajaxSuccess.classList.add('is-invisible');
      if(xhr.status == 200){
        var response =  xhr.responseText;
        var pacientes = JSON.parse(response);
        pacientes.forEach(function(paciente){
          adicionaPaciente(paciente);
        });
        load.classList.add('is-invisible');
        ajaxSuccess.classList.remove('is-invisible');
      }else{
        ajaxErro.classList.remove('is-invisible');
        load.classList.add('is-invisible');
      }
    },1000);
  });
  xhr.send();
});
