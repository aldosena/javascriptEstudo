function reconhecer(button) {
  const codigoUser = button.getAttribute("data-user-id");
  console.log("cod. via get:", codigoUser);
  const esteBotao = button.getAttribute('data-my-id');
  console.log('este: ', esteBotao);
  //
  const codigoUsuario = button.dataset.userId;
  console.log("cod. usuario: ", codigoUsuario);
  const meuTransporte = button.dataset.userTransporte;
  console.log("transporte", meuTransporte);
  mudarCor(esteBotao);
}

function mudarCor(esteBt) {
  console.log('este id:', esteBt);
  let alvo = document.getElementById(esteBt);
  alvo.setAttribute('data-user-transporte', 'cavalo');
}
