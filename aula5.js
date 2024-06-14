/* eventos */
//const botao = document.querySelector('#nota table button');
const botoes = document.querySelectorAll('#nota table button');

// console.log(botoes);
botoes.forEach(function(button, index, lista){
    button.addEventListener('click',function(){
    console.log(index);
  });
  //console.log(index);
});

// botoes.addEventListener('click', function(){
  // console.log('oba');
//});

