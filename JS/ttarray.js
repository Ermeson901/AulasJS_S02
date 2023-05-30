let pessoa1 = {
  nome: "Ermeson",
  sobreNome: "Barros",
  idade: 27,
  endereco: {
    rua: "rua X ",
    num: 666,
  },
  escolaridade: "E.F",
};

let pessoa2 = {
  nome2: "jonatas",
  sobreNome2: "Evangelista",
  idade2    : 27,
  endereco2: {
    rua2: "rua X ",
    num2: 666,
  },
  escolaridade2: "E.F",
};



// console.log(typeof pessoa);
// console.log(pessoa);
// console.log(pessoa.endereco.rua + pessoa.endereco.num);
console.log(`---------------corte---------------`);

let {
    nome1,
    sobreNome1,
} = pessoa1

let {
    nome2,
    sobreNome2,
} = pessoa2

console.log(`O aluno ${nome} tem  ${sobreNome} `);

