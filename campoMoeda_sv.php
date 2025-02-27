<?php
function moneySql($numero) {
    // Remove o ponto
    $numero = str_replace('.', '', $numero);
    // Substitui a vírgula por um ponto
    $numero = str_replace(',', '.', $numero);
    return $numero;
}
  $valor = $_POST["valorMercado"];
  $descricao = $_POST["descricao"];

 echo "<p> recebido: <br>
   valor = $valor <br>
   descricao = $descricao <br>
   </p>";
  
   // altear o valor
   $novoValor = moneySql($valor);
   echo "<p> novo valor: $novoValor </p>";

?>

