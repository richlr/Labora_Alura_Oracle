var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
       alturaEhValida = false;
       tdImc.textContent = "Altura inválida!";
       paciente.classList.add("paciente-invalido");
   }

  if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso,altura)
        tdImc.textContent = imc.toFixed(2);
    }
}

function calculaImc(peso,altura){
  var imc = peso / (altura * altura);
  return imc;
}

function validaPeso(peso){

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}
/*BOAS PRÁTICAS :

O Código abaixo que adicionava um paciente a tabela,
 foi movido para o arquivo "form.js", pois assim fica mais fácil de visualizar o
 código e fazer quamquer manutenção necessária que possa aparecer.
 Assim os códigos ficam mais organizados e menores facilitando suas manutenções.*/

 /* Vamos dividir as funcionalidades deste Código, tem muitas funcionalidades juntas dentro dele.
 Podemos dividir em funções que poderão ser utilizadas em outros lugares do código*/
