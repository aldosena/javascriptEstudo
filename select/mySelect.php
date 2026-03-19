<!DOCTYPE html>
<html lang="pt-br">
<head>
  <?php
  // esta página é um teste com a biblioteca Select2
  ?>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <!-- jquery -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <!-- select 2 -->
  <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
  <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
  <title> Estudo  </title>
</head>
<body>
<div class="container mt-3">
<h1> Select 2</h1>

<p> Use a biblioteca do bootstrap. Use CDN. Coloque "selected" para definir os marcados </p>

<h4> Select "normal" </h4>
<form name="fmX" id="fmX" action="mySelect_sv.php"></form>
    <label for="heroi">Escolha um heroi:</label>
    <select id="heroi" name="heroi[]" class="form-control" size="4" multiple>
      <option value="batman" selected> Batman</option>
      <option value="superman"> Superman</option>
      <option value="mulher maravilha">Mulher Maravilha </option>
    </select>
</form>
<p> Use ctrl para mais de uma seleção </p>
<p> </p>
<hr>

<h4> Select Especial - !  </h4>
<form name="fmOne" id="fmOne" method="POST" action="mySelect_sv.php">
  <p>
    <label for="city"> Cidade:</label> <br>
    <select id="city" name="city[]" class="form-control js-example-basic-multiple" multiple="multiple">
      <option value="RECIFE">Recife </option>
	  <option value="OLINDA"> Olinda </option>
      <option value="GRAVATA" selected> Gravatá </option>
	  <option value="JABOATAO" selected> Jaboatão </option>
    </select>
  </p>
  <p><button type="submit" class="btn btn-primary">Inserir </button> </p>
</form>

<script>
$(document).ready(function() {
    $('.js-example-basic-multiple').select2();
});

//$(document).ready(function() {
//    $('#city').select2();
//});
</script>

</div> <!-- /conteinter -->
</body>
</html>