<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <title> Fazer o fetch </title>
</head>

<body>
  <div class="container">

    <h1> Consumir uma api - ! </h1>
    <h3>Usando o site: https://dummyjson.com/ </h3>
    <p id="meuAviso" class="alert">...</p>
    <ul id="minhaLista"> </ul>

    <button type="button" onclick="vermelho()"> Mudar cor </button>

    <script>
      const url = 'https://dummyjson.com/products';

      async function chamarApi() {
        meuAviso('Iniciando pesquisa');
        const alvo = document.querySelector('#minhaLista');
        //
        const resposta = await fetch(url);
        // console.log(resposta);
        if (resposta.status = 200) {
          const objeto = await resposta.json();
          console.log(objeto);
          const t = objeto.products[0].tags;
          //const meuId = objeto.products[0].id;
          //console.log('t:', t);
          // console.log('ID :', meuId);
          for (i = 0; i < t.length; i++) {
            console.log(t[i]);
            alvo.innerHTML += `<li> ${t[i]} </li>`;
          }; // for
          meuAviso('Pesquisa realizada !!');
        } else {
          meuAviso('Erro ao fazer pesquisa', 'red');
        };
      };

      chamarApi();

      function meuAviso(texto, cor = 'blue') {
        const meuAviso = document.getElementById('meuAviso');
        if (cor == 'red') {
          meuAviso.classList.add('alert-danger');
        } else {
          meuAviso.classList.add('alert-info');
        };
        meuAviso.innerHTML = texto;
      };

      function vermelho(){
          meuAviso('', 'red');
      }
    </script>

  </div> <!-- conteiner -->
</body>

</html>