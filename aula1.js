// tipos de dados
let casa;
const idade = 0;
// const nome = "recife";
const vivo = true;
// const tempo;
const diplomas = null;
const objeto = {};
const lista = [];

console.log(typeof idade)
console.log(typeof nome)
console.log(typeof vivo)
typeof tempo;
console.log(typeof diplomas)
console.log(typeof objeto)
console.log(typeof lista)

console.log(2**2); // elevado a 2
console.log(3%2); // resto da divisao


if (casa){
  console.log("verdadeiro")
}else{
  console.log("falso")
};

let um = 0;
let dois = 0;
if (um || dois){
  console.log("verdadeiro")
}else{
  console.log("false")
}

function areaQuadrado(lado){
  return lado * lado;
}

function media(nota1, nota2 = 5){
  return (nota1 + nota2) / 2;
}

const funcaoSemNome = () => {
  console.log("essa funcao nao tem nome");
}

funcaoSemNome();



console.log('media',media(3));



const usuario = {
  nome: "aldo",
  idade: 40,
  profissao: {},
  apresentacao: () => {
    return `Meu nome é ${usuario.nome}`;
  },
}

usuario.profissao.titulo = "Programador";
usuario.profissao.nivel = "Senior";
console.log(usuario.apresentacao());

// console.log(usuario.nome);
// console.log(usuario.idade);
// console.log(usuario.profissao);
console.log(usuario);

console.log('GRAU TECNICO');