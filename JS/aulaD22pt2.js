class Carro {
  constructor(marca, ano, cor, modelo, potencia) {
    this.marca = marca;
    this.ano = ano;
    this.cor = cor;
    this.modelo = modelo;
    this.potencia = potencia;
  }
}
let Carro01 = new Carro("Volvo",2022, "Preto", "XC90", "300cv")
console.log( typeof Carro01)
console.log (`Tenho tres ${Carro01.marca} do ano ${Carro01.ano}`)
