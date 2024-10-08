const minhaLista = [];
minhaLista.push('caderno');
minhaLista.push('borracha');
minhaLista.push('regua');
minhaLista.push('caneta');
minhaLista.push('papel');
minhaLista.push('giz', 'quadro'); 


const t = minhaLista.length;
console.log(t);

//minhaLista.splice[3,1] = 
minhaLista.splice(minhaLista.indexOf('caneta'), 1, 'Zaneta azul');
// minhaLista.splice(3);
//minhaLista[3] = 
//minhaLista[3] = 'caneta azul';


minhaLista.sort();
// end
console.log(minhaLista);

//minhaLista.forEach(console.log);
//minhaLista.forEach(it);//