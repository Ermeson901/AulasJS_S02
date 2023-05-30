//Criamos a função para calcular a média do aluno.
const mediaAluno = () => {
  // Aqui estamos selecionando um elemento do HTML
  let notaT1 = document.getElementById("nota01");
  let notaT2 = document.getElementById("nota02");
  let res = document.getElementById("resultado");
  // Convertendo string para números linhas 07/08
  let notaNum1 = Number(notaT1.value);
  let notaNum2 = Number(notaT2.value);
  //Criamos o calculo da media dos alunos:
  //Estamos utilizando o valor que foi convertido para numeros
  let resultado = (notaNum1 + notaNum2) / 2;
  // estamos manipulando o elemento "P"
  res.innerHTML = `Sua média é: ${resultado}`;
};
