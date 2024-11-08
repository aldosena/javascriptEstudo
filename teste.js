let pessoas = [
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 30 },
  { nome: "Carla", idade: 10 },
  { nome: "Miguel", idade: 40 },
  { nome: "Jose", idade: 50 }
];

for (let i in pessoas){
console.log('p: ' + pessoas[i].nome);
}  

let maiores = [];

maiores = pessoas.map(function(item){
return {nome: item.nome.toUpperCase(), idade: item.idade};
});
console.log('maiusculas: ' + maiores);

maiores = pessoas.filter(function(item){
return item.idade > 18; 
});

console.log('maiores: ' + maiores);


// const pessoa = {
//   nome: 'Aldo',
//   sobrenome: 'Sena',
//   nomeCompleto: function(){
//     return `${this.nome} @ ${this.sobrenome}`;
//   }
// }
// console.log(pessoa.nomeCompleto());

// // Object.freeze(pessoa);
// pessoa.idade = 100;
// pessoa.nome = 'Leo';
// console.log(pessoa);
// // console.log(pessoa.idade);

