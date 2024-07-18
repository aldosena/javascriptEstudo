const pessoa = {
  nome: 'Aldo',
  sobrenome: 'Sena',
  nomeCompleto: function(){
    return `${this.nome} @ ${this.sobrenome}`;
  }
}
console.log(pessoa.nomeCompleto());

// Object.freeze(pessoa);
pessoa.idade = 100;
pessoa.nome = 'Leo';
console.log(pessoa);
// console.log(pessoa.idade);

