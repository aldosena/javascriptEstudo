const div = document.querySelector("#player");

const botoes = document.querySelectorAll("button");

botoes.forEach(function (button) {
  
  const { pixel, mover_para: direcao } = button.dataset;
  button.addEventListener("click", function () {

    const divPosition = div.getBoundingClientRect();

    console.log(divPosition.y);

    console.log(`Moveu ${pixel} para ${direcao}`);

    if (direcao == "direita") {
      const atual = divPosition.left + (+pixel);
      console.log('atual', atual)
      div.style.left = `${atual}px`;
    }
    if (direcao == "esquerda"){
      const atual = divPosition.left - (+pixel);
      console.log('atual', atual)
      div.style.left = `${atual}px`;
    }
    if (direcao == "cima") {
      const atual = divPosition.top + +pixel;
      console.log('atual', atual)
      div.style.top = `${atual}px`;
    }

    if (direcao == "baixo") {
      const atual = divPosition.top - +pixel;
      console.log('atual', atual)
      div.style.top = `${atual}px`;
    }

  });
});

div.style.backgroundColor = "green";
div.style.position = "relative";
