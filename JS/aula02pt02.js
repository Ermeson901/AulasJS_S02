var nota1 = 8.5;
var nota2 = 10;
var media = (nota1 + nota2) / 2;
console.log(`A média do aluno é: ${media}`);
var mediaF = media > 7;
console.log(`Aluno vai ser aprovado? ${mediaF}`);

// > | >=
// < | <=
// == | ===

var frequencia = 4;

//Criar uma expressão que apresente o resultado de um operador de comparação && no console.

console.log(
    `O Aluno tem média: ${media}, e ${frequencia} faltas. \nO Aluno foi aprovado? ${frequencia <= 5 && media >= 7}`
);
