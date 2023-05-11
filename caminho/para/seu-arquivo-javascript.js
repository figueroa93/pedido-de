// Função para manipular o clique no botão "Sim"
function handleYesClick() {
    alert("Parabéns! Você aceitou o pedido de casamento!");
  }
  
  // Função para manipular o clique no botão "Não"
  function handleNoClick() {
    alert("Que pena! Não temos essa opção, vai casar sim!");
  }
  
  // Adiciona os manipuladores de eventos aos botões
  document.addEventListener("DOMContentLoaded", function() {
    var yesButton = document.getElementById("yesButton");
    var noButton = document.getElementById("noButton");
  
    yesButton.addEventListener("click", handleYesClick);
    noButton.addEventListener("click", handleNoClick);
  });
  