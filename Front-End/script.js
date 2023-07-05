// Obtém uma referencia para o botão pelo seu id
var botoes = document.getElementsByClassName("Botao");

// Adiciona um evento de clique de botão
for (var i = 0; i < botoes.length; i++)
{
    var botao = botoes[i];
    botao.addEventListener("click", function () {
        var link = this.getAttribute("data-link");
        window.location.href = link;
    });
}
