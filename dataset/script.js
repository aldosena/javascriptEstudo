function reconhecer(button) {
  //const xbotao = button;
  const id_do_botao = button.id;
  console.log('id do botao', id_do_botao);
  const meuTransporte = button.dataset.userTransporte;
  console.log("transporte", meuTransporte);
  mudarTrans(id_do_botao);
}

function mudarTrans(esteBt) {
  console.log('este id:', esteBt);
  let alvo = document.getElementById(esteBt);
  alvo.setAttribute('data-user-transporte', 'cavalo');
}
