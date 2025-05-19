import { myAlert } from "./myAlert.js"; // importar

// import { useAlert } from "./useAlert.js";
// boaSorte.desejo();

// chama a classe
const alert = new myAlert();

// quando o botão for clicado, chama a função
function avisoFeliz() {
  const txt = "A vida é bela!"; // texto a ser exibido
  alert.show(true, txt);
};

// quando o botão for clicado, chama a função
function avisoTriste() {
  const txt = "A vida é uma porcaria! Estou triste"; // texto a ser exibido
  alert.show(false, txt);
};

async function init(){
  window.avisoFeliz = avisoFeliz;
  window.avisoTriste = avisoTriste;
}

init();