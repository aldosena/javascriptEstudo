<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'] ?? '';
    $email = $_POST['email'] ?? '';

    if (!empty($nome) && !empty($email)) {
        echo "Dados recebidos! Nome: $nome, Email: $email";
    } else {
        echo "Erro: Todos os campos são obrigatórios.";
    }
} else {
    echo "Método inválido. Use POST.";
}
?>
