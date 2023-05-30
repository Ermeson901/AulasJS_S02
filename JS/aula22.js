class Pessoa01 {
  constructor(Nome, SobreNome, Idade, DataNas, End) {
    this.Nome = Nome;
    this.SobreNome = SobreNome;
    this.Idade = Idade;
    this.DataNas = DataNas;
    this.End = End;
  }
}

let kaue = new Pessoa01(
  "Kauê",
  "Paixão",
  18,
  "24-09-2004",
  "Av.General ataliva leonel"
);

console.log(kaue);
console.log(typeof kaue);

console.log(
  `Ola, ${kaue.Nome} vc tem ${kaue.Idade} anos de idade e faz niver ${kaue.DataNas}`
);
console.log(estruturaLog());
