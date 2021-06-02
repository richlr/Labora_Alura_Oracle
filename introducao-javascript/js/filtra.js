//Selecionaremos o campo de texto:

var campoFiltro = document.querySelector("#filtrar-tabela");

/* Adicionaremos um escutador de eventos. Com o addEventListener() escutaremos um evento de input.
Passaremos como segundo parâmetro uma função com a ação a ser executada quando alguém clicar no campo.
A cada letra que inserimos, a função é chamada, o value do campo é filtrado na tabela. Poderemos utilizar
campoFiltro.value dentro da função, no entanto, campoFiltro é o dono do evento.
Utilizaremos a palavra de contexto this, referente ao próprio dono do evento.*/

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");
    console.log(this.value);
/* No entanto, queremos fazer a comparação com o nome dos pacientes, não com a tr.
Precisaremos iterar sobre os pacientes, para então acessarmos o nome de cada um.
Selecionaremos o paciente, e a partir dele a td com a classe info-nome. Daí, extrairemos o nome do paciente:*/

/* Criaremos um if para que a classe invisivel seja adicionada apenas quando houver algo digitado.
Veremos se há algo digitado ou não por meio do seu length - se ele for 0, significa que o campo está em branco,
e se for maior que 0, significará que há algo digitado: */

      if (this.value.length > 0){
// Com algo digitado, queremos que o for seja executado:

        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

//Usaremos a variável expressao para criar uma expressao regular e com case insensitive "i"(para ler maiúscula ou minúscula):

            var expressao = new RegExp(this.value, "i");

/* A partir de então temos acesso ao nome de todos os pacientes da tabela, e também ao conteúdo de texto do campo de filtragem,
só precisaremos esconder todos os pacientes que são diferentes do conteúdo de texto, e mostrar os que são iguais.
Para isso será criada a classe "invisivel" no arquivo index.css */

            if (!expressao.test(nome)){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {

// No caso de não haver nada digitado, percorreremos todos os pacientes e removeremos a classe com um segundo for:

        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
