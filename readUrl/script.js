async function init(){
  readUrl();
}

// Função que lê os parâmetros da URL e preenche o campo de pesquisa
function readUrl() {
  const params = new URLSearchParams(window.location.search);
  const nome = params.get('nome');
  const idade = params.get('idade');  

  console.log('nome: ', nome);
  // quemChegou(nome);
    if (nome && idade){
       quemChegou(nome);
    }else{
        console.log('Digite o nome e a idade');
    }
}


async function quemChegou(xnome){
  let alvo = document.getElementById('alvo');
  alvo.innerHTML =  `Usuario: ${xnome}`;
}


init();
