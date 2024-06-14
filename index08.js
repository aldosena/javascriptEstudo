import { herois } from "./database/herois.js";

const table = document.querySelector('table');

const div = document.createElement("div");
console.log(div);
div.innerHTML = "<p> aldo sena </p>";

const p  = document.createElement("p");
p.innerText = "aldo sena";
//console.table(p);

// inserir elementos criados
div.appendChild(p);
//table.innerHTML += "";


console.table(herois);
