const trList = document.querySelectorAll('table tr');

//console.log(nota);
trList.forEach(function(tr, index, lista){
  const td = tr.children[1];   // 
  const valorNota = +td.innerText;

  if (valorNota == 0){ td.innerText = '0' };

  let style = (valorNota >=7) ? 'aprovado' : 'reprovado';

  td.classList.add(style);
  
});



//console.log(item)