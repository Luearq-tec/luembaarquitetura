<?php
header('Content-Type: application/json');

// Defina o seu endereço de e-mail aqui
$destinatario = "arqluemba@gmail.com"; // <-- Mude para o seu e-mail

// Verifique se o formulário foi enviado com o método POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Coleta e limpa os dados do formulário
    $nome = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $mensagem = htmlspecialchars(trim($_POST['message']));

    // Verifica se os campos obrigatórios estão preenchidos
    if (empty($nome) || empty($email) || empty($mensagem)) {
        echo json_encode(["status" => "error", "message" => "Por favor, preencha todos os campos obrigatórios."]);
        exit;
    }

    // Configura o assunto e o corpo do e-mail
    $assunto = "Nova mensagem de contato do seu site";
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "E-mail: $email\n";
    $corpo_email .= "Mensagem:\n$mensagem";

    // Define os cabeçalhos do e-mail para evitar que vá para o lixo eletrônico
    $headers = "From: $nome <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Envia o e-mail
    if (mail($destinatario, $assunto, $corpo_email, $headers)) {
        echo json_encode(["status" => "success", "message" => "Mensagem enviada com sucesso! Entraremos em contato em breve."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Ocorreu um erro ao enviar a sua mensagem. Por favor, tente novamente mais tarde."]);
    }
} else {
    // Se a requisição não for POST, redireciona para a página de contato
    header("Location: contato.html");
    exit;
}
?>