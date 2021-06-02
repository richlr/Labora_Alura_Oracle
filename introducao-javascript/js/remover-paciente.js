/*var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
console.log("Fui clicado com Duplo Clique ");
  this.remove();
    });
});*/

//Vamos comentar o código acima e fazer um teste para apagar uma linha inteira da tabela :

/*var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover
    paiDoAlvo.remove();
});*/

// Abaixo faz a mesma coisa que o código acima :

/*var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.remove();
}); */

// 06 Animando a remoção do paciente

/*Quando queremos aguardar um tempo, devemos usar a função setTimeout. Será passada como parâmetro uma função anônima
com quanto tempo deve ser aguardado: */

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});

/* Com a função acima iremos assegurar a execução da função passada por parâmetro para ela,
com o tempo de 500 milissegundos, equivalente a meio segundo. */
