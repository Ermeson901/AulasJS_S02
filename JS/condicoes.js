// let testeValor = true;
// let media = 7 >= 9;
// let sal = 1320
// let vouAPraia = sal >= 1500 ? "Vou a Praia" : "Ficar em casa";
// console.log(!testeValor);
// console.log(media);
// console.log(vouAPraia);

// ValoresBonus = "ptsBonus3"
/**
 * ptsBonus1 - Console.log("2.0 pts");
 * ptsBonus2 - Console.log("1.5 pts");
 * ptsBonus3 - Console.log("1.0 pts");
 * ptsBonus4 - Console.log("0.5 pts");
 * ptsBonus5 - Console.log("0.25 pts");
 */

/*
let pontosAluno = "ptsBonus7";

switch (pontosAluno) {
  case "ptsBonus1":
    console.log("2.0 pts");
    break;

  case "ptsBonus2":
    console.log("1.5 pts");
    break;

  case "ptsBonus3":
    console.log("1.0 pts");
    break;

  case "ptsBonus4":
    console.log("0.5 pts");
    break;

  case "ptsBonus5":
    console.log("0.25 pts");
    break;

  default:
    console.log("Não foi aplicado pontos adicionais");
    break;
}
console.log("Fim do programa");

*/
let idade = 18; //15 - 16 - 17

while (idade < 18) {
  console.log(`Não pode beber ${idade}`);
  idade += 1;
}
// console.log("Fim programa");

do {
    idade += 1
    console.log(`Não pode beber ${idade}`);
    
} while (idade < 18)
console.log("Fim programa")
