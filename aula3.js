//console.log(document);
//const p = document.getElementsByTagName('p');
//console.log(p);

//const x = document.getElementById('tit');
//
//const y = document.getElementsByClassName('teste');

// pegar o por id
const a = document.quertySelector('#JAVASCRIPT');
// por tag
const b = document.querySelectorAll('p');
// pega pela clase
const c = document.querySelectorAll('.p');

const p = documento.qyerySelect('#JAVASCRIPT');
p.innerText = "mundo JS";

// console.log(p.classList);

// atribuir uma classe a um elemento
p.classList.add('negrito');

// const estilobom = ['negrigo', 'verde', 'fundoVerde'];
// const estilomau = ['italico', 'vermelho', 'fundoVerde'];


//? const p = document.getElementsByTagName('p');
//? const p = document.getElementById('JAVASCRIPT');
//? const p = document.getElementsByClassName('teste');
//* const p = document.querySelectorAll('p');


// p.innerText = 'Olá Mundo AldoJS!';

// p.classList.add('negrito');
// p.classList.add('vermelho');
// p.classList.add('fundo-azul');
// p.classList.remove('teste');

// console.log(p.classList);

const p = document.querySelector('#JAVASCRIPT');

const estiloSucesso = ['negrito', 'verde', 'fundoVerde'];
const estiloErro = ['italico', 'vermelho', 'fundoVermelho'];

const requestResult = false;

const style = requestResult ? estiloSucesso : estiloErro;

style.forEach(function(item){
    p.classList.add(item);
});


const button = document.querySelectorAll("button[disabled]");

console.log(button);



const div = document.querySelector('#box');
const p = document.querySelector('#box p');

const novaTag = <p>Meu novo HTML</p>;

div.innerHTML += novaTag; 

console.log(div.innerHTML);

