let pessoa = {
  nome: "Ermeson",
  sobreNome: "Barros",
  idade: 42,
  endereco: {
    rua: "Trav. do Sossego",
    numeroR: 666,
  },
  escolaridade: "E.M",
};

console.log(`Olá, ${pessoa.nome}! vc tem ${pessoa.idade} 
anos de idade e mora na: ${pessoa.endereco.rua}`);

const {
    nome,
    idade,
    escolaridade,
    endereco: {rua},
} = pessoa;

console.log(`Olá, ${nome}! vc tem ${idade} 
anos de idade e mora na: ${rua}`);
