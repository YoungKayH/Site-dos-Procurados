// Obtém uma lista de todos os botões com a classe "meuBotao"
var botoes = document.getElementsByClassName("meuBotao");

// Adiciona um evento de clique a cada botão
for (var i = 0; i < botoes.length; i++) {
  var botao = botoes[i];
  botao.addEventListener("click", function() {
    var link = this.getAttribute("data-link");
    window.location.href = link;
  });
}
