// array de objetos
let personagem = {
  nome: 'Petter',
  idade: 25,
  carros: [
    {modelo: 'fiat', cor: 'preto'},
    {modelo: 'ferrari', cor: 'zaul'},
  ]
}

// acessando dados:
console.log(personagem.carros);
console.log(personagem.carros[1].cor);
