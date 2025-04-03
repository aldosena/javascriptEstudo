import { useAlert } from "../../../assets/js/useAlert.js";
import  useFetch from "../../../assets/js/useFetch.js";
import { TableLine } from "./components/TableLine.js";

const alert = new useAlert();

// lista os cargos quando a página é carregada
document.addEventListener("DOMContentLoaded", function () {
  // console.log("Página carregada - Chamando listarCargos"); // Debug
  listarCargos();
});

//? Lista os cargos na index
async function listarCargos() {
  // console.log("Chamando listarCargos..."); // 
  alert.loading(); // exibe o alert ??
  let tbody = document.querySelector("#tabCargos tbody");  // alvo dos meus dados

  const response = await useFetch.get('/cargos/listar'); // url dos dados


  if (!response){ // se erro
      alert.render(false, 'Erro ao carregar lista');
      return;
  };
  // console.log('r:', response);
  tbody.innerHTML = "";
  response.data.forEach((item) => { tbody.innerHTML += TableLine(item);  });
  alert.render(true, 'Lista de carregada');
  alert.timing();
}

async function inserirCargo(e) {
    e.preventDefault();
    const formNovo =  new useForm('fmNovo');

    e.target.setAttribute('disabled', true);
    alert.loading();

    if (formNovo.validate()){ // se validou
        const response = await useFetch.post('/cargos/novo', formNovo.toFormData('add_'));
        if (!response){
            alert.render(false, 'Erro ao inserir novo registro');
            return;
        }; // se erro
        alert.render(true, 'Registro inserido');
        alert.timing();        
        let modal = bootstrap.Modal.getInstance(document.getElmenteById("novoModal"));
        modal.hide();
        listarCargos();
    }else{ // se nao validou
        alert.clear();
    };
    e.target.removeAttribute('disabled'); 

}



async function exibirCargo(id) {
  alert.loading();
  document.getElementById("fmEdit").reset();
  const url = `/cargos/exibir?id=${id}`; // Rota para obter os dados do cargo
  const resposta = await fetch(url);
  const objeto = await resposta.json();

    if (Array.isArray(data) && data.length > 0) {
      const cargo = data[0]; // Pegando o primeiro item do array

      console.log("Cargo carregado:", cargo); // Debug

      // Preenchendo os campos do modal
      document.getElementById("edit_idcargo").value = cargo.idcargo || "";
      document.getElementById("edit_nome").value = cargo.nome || "";
      document.getElementById("edit_descricao").value = cargo.descricao || "";
      document.getElementById("edit_status").value = cargo.status.toString(); // Convertendo para string para compatibilidade com <select>

    } else {
      alert("Nenhum dado encontrado para esse cargo.");
    }
  } catch (error) {
    console.error("Erro ao buscar cargo:", error);
    alert("Erro ao conectar com o servidor.");
  }
}



async function salvarEdit() {
  const idcargo = document.getElementById("edit_idcargo").value;
  const nome = document.getElementById("edit_nome").value.trim();
  const descricao = document.getElementById("edit_descricao").value.trim();
  const status = document.getElementById("edit_status").value;

  const btnSalvar = document.querySelector(".btn-salvar-cargo"); // Seleciona o botão de salvar
  const btnSpinner = document.createElement("span"); // Cria o ícone de loading
  btnSpinner.classList.add("spinner-border", "spinner-border-sm", "text-light"); // Adiciona as classes de loading

  if (!idcargo) {
    console.error("ID do cargo não encontrado!");
    alert("Erro: ID do cargo não encontrado.");
    return;
  }

  console.log("ID do cargo enviado:", idcargo); // Debug

  // Desabilita o botão e exibe o loading
  btnSalvar.disabled = true;
  btnSalvar.innerHTML = ''; // Limpa qualquer conteúdo anterior do botão
  btnSalvar.appendChild(btnSpinner); // Adiciona o spinner no botão

  const url = `/cargos/atualizar`;
  const formData = new FormData();
  formData.append("idcargo", idcargo);
  formData.append("nome", nome);
  formData.append("descricao", descricao);
  formData.append("status", status);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log("Resposta do servidor:", data);

    if (data.up) {
      alert("Cargo atualizado com sucesso!");
      
      // Fecha o modal após salvar
      let modal = bootstrap.Modal.getInstance(document.getElementById("editModal"));
      modal.hide();

      // Aguarda um pequeno tempo antes de atualizar a tabela
      setTimeout(() => {
        listarCargos(); // Atualiza a lista sem recarregar a página
      }, 300);
      
    } else {
      alert("Erro ao atualizar cargo: " + data.message);
    }
  } catch (error) {
    console.error("Erro na atualização:", error);
    alert("Erro ao conectar com o servidor.");
  } finally {
    // Remove o spinner e habilita novamente o botão
    btnSalvar.disabled = false;
    btnSalvar.innerHTML = 'Salvar'; // Restaura o texto do botão após a requisição
  }
}

async function init(){
    windows.listarCargos = listarCargos;
    windows.inserirCargo = inserirCargo;
}




// function closeModalAfterClick(modal_id, alert_id) {
//   const modal = document.getElementById(modal_id);
//   const overlay = document.querySelector(".modal-backdrop.show");
//   const alert = document.getElementById(alert_id);

//   overlay.classList.remove('show');
//   modal.style.display = 'none';
//   overlay.style.display = 'none';
//   document.body.classList.remove('modal-open');
//   alert.style.display = 'none';
// }






