import { alerta } from "./alertGrau.js";

function avisoCarregando(){
  alerta('Carregando dados', 'r');
}

function avisoCarregado(){
  alerta('Dados Carregados', 'b');
}

function avisoBoaSorte(){
  alerta('Boa Sorte', 'g', 1);
}

async function init(){
  window.avisoCarregando = avisoCarregando;
  window.avisoCarregado = avisoCarregado;
  window.avisoBoaSorte = avisoBoaSorte;
}

init();
