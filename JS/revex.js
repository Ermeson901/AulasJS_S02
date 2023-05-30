//Exe. 01
let numEx1 = [1, 2, 3, 4, 5];
let numEx1_2 = numEx1.map((num) => num * 2);
console.log(numEx1_2);

//Exe. 02

let numEx2 = [1, 2, 3, 4, 5];

let numEx2_2 = numEx2.filter((num) => num % 2 == 0);
console.log(numEx2_2);

//Exe. 03

let frutas = ["maça", "banana", "orange", "Kiwi"];

frutas.forEach((fruit) => {
  console.log(fruit);
});

//Ex4

let alunos = [
  { nome: "John", age: 20 },
  { nome: "Jane", age: 25 },
  { nome: "Mark", age: 22 },
];

alunos.forEach((estudante) => {
  console.log(estudante.nome + " Tem " + estudante.age);
});

let alunos2 = alunos.map((alunos) => alunos.nome);
console.log(alunos2);
