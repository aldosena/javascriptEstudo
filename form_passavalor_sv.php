<?php
$nome = (isset($_POST['nome'])) ?  $_POST['nome'] : '';
$cidade = (isset($_POST['cidade'])) ?  $_POST['cidade'] : '';
$dia = (isset($_POST['dia'])) ?  $_POST['dia'] : '';

echo "<p> dados recebidos </p>";
echo "<p>Nome: $nome </p>";
echo "<p>Cidade: $cidade </p>";
echo "<p>Dia: $dia </p>";
?>