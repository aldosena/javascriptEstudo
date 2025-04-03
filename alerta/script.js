import { boaSorte } from "./boaSorte.js";
import { useAlert } from "./useAlert.js";

boaSorte.desejo();

const alert = new useAlert();

function exibir(){
  // console.log('exibir dados');
  const status = true;
  const message = "Exibir em tela";
  alert.render(status, message);
}

function carregar(){
    alert.loading();
}

function sumir(){
  alert.clear(3);
}

function sumirAgora(){
  alert.clear(0);
}

function avisoAlerta(txt){
  alert.perigo(txt);
}

async function init(){
  window.exibir = exibir;
  window.carregar = carregar;
  window.sumir = sumir;
  window.sumirAgora = sumirAgora;
  window.avisoAlerta = avisoAlerta;
}

init();