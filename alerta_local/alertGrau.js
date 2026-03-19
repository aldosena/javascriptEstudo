export function alerta(xalvo, xtexto = '', xcor = 'r', xtime=0){
  let xcolor = 'green';
  if (xcor == 'r'){ xcolor = 'red'; };
  if (xcor == 'b'){ xcolor = 'blue'; }  ;
  xalvo.style.color = #ccc;
  xalvo.innerHTML = xtexto;
  if (xtime > 0){
      setTimeout(() => xalvo.innerHTML = '...', 3000);
  };    
}