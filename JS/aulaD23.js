/**
 *  Quando o mouse entrar no elemento a cor deve mudar para “silver”;
    Quando o usuário clicar o texto deve mudar para “Clicou”; 
    Quando o mouse sair do elemento o texto e a cor devem voltar para o original.
 * 
 */
let meuPar = document.getElementById("par");

function mouseenter() {
  meuPar.style.color = "silver";
}

clicou();

saiu();
