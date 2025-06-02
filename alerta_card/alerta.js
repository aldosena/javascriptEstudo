export function alerta(xtexto = '', xcor = 'r', xtime=0){
  let alvo = document.getElementById('alert');
  let xcolor = 'green';
  if (xcor == 'r'){ xcolor = 'red'; };
  if (xcor == 'b'){ xcolor = 'blue'; }  ;
  alvo.style.color = xcolor;
  alvo.innerHTML = xtexto;
  if (xtime > 0){
      setTimeout(() => alvo.innerHTML = '...', 3000);
  };    
}

