function reporte(elemento){
  const id_span = elemento.id;
  console.log('span: ', id_span);
  //
  const letrai = elemento.parentNode;
  const iddoi = letrai.id;
  console.log('id do i: ', iddoi);
  //
  const parag = elemento.parentNode.parentNode;
  const iddopara = parag.id;
  console.log('id do para: ', iddopara);
  //
  const celu = elemento.parentNode.parentNode.parentNode;
  const iddocelu = celu.id;
  console.log('id do celu: ', iddocelu);
  celu.classList.remove('bg-secondary');
  celu.classList.add('bg-info');

}