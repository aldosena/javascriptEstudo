// aula 2

const cidade = "recife";
console.log(typeof cidade);

const animal = {
  nome: "gato",
  tipo: "felino",
  miar: function(){ return "miau"; },
}

console.log(animal.nome);
console.log(animal.miar());

// no js tudo é objeto
// (f2 para renomear)

console.log(cidade.length);
const idade = 10;
console.log(idade);
// :)
// ternarios 
const maiorDeIdade = (idade > 18) ? "maior" : "menor";

const herois = ["batman", "flash", "venon"];

// let por causa do escopo
for (let i=0; i<=2; i++){
  console.log(herois[i]);
}

herois.forEach(function(item, index, list){
  // console.log(item, index, list);
  console.log(item.toUpperCase());
  // console.log(herois)
})

// foreach(herois as he):
//  console.log(he);
// endforeach;

herois.push("hulk");
herois.shift();
herois.pop();
herois.unshift("arlequina");
console.log(herois);






