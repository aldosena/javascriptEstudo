import { myAlert } from "./myAlert.js"; // importar

// import { useAlert } from "./useAlert.js";
// boaSorte.desejo();

// chama a classe
const alert = new myAlert();

// quando o botão for clicado, chama a função
function avisoFeliz() {
  const txt = "A vida é bela!"; // texto a ser exibido
  alert.show(true, txt, 0);
};

// quando o botão for clicado, chama a função
function avisoTriste() {
  const txt = "A vida é uma porcaria! Estou triste"; // texto a ser exibido
  alert.show(false, txt, 1);
};

function avisoFechar() {
  const txt = "..."; // texto a ser exibido
  alert.show(true, txt, 1);
};

async function init(){
  window.avisoFeliz = avisoFeliz;
  window.avisoTriste = avisoTriste;
  window.avisoFechar = avisoFechar;
}

init();