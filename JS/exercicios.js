let car1 = {
  nome1: "Corola",
  marca1: "Toyota",
  cor1: "Azul",
  ano1: 2003,
};

let car2 = {
  nome2: "HB20",
  marca2: "Hyunday",
  cor2: "Prata",
  ano2: 2019,
};

let car3 = {
  nome3: "Onix",
  marca3: "Chevrolet",
  cor3: "Preto",
  ano3: 2020,
};

let car4 = {
  nome4: "Civic",
  marca4: "Honda",
  cor4: "vermelho",
  ano4: 2002,
};

const {
    nome1,
    marca1,
    cor1,
    ano1,
} = car1

const {
    nome2,
    marca2,
    cor2,
    ano2,
} = car2

const {
    nome3,
    marca3,
    cor3,
    ano3,
} = car3

const {
    nome4,
    marca4,
    cor4,
    ano4,
} = car4

if (ano1 <= 2003) {
    console.log(`não paga IPVA`)
} else {
    console.log(`Paga IPVA`)
}

if (ano2 <= 2003) {
    console.log(`não paga IPVA`)
} else {
    console.log(`Paga IPVA`)
}

if (ano3 <= 2003) {
    console.log(`não paga IPVA`)
} else {
    console.log(`Paga IPVA`)
}

if (ano4 <= 2003) {
    console.log(`não paga IPVA`)
} else {
    console.log(`Paga IPVA`)
}