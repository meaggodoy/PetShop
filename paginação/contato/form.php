<?php

    $nome = addslashes($_POST['name']);
    $email = addslashes($_POST['email']);
    $assunto = addslashes($_POST['assunto']);
    $mensagem = addslashes($_POST['mensagem']);

    $destino = "godoy.a@aluno.ifsp.edu.br"
    $assuntoEmail = "Mensagem via contato de ".$nome;

    $corpoEmail = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Assunto de contato: ".$assunto."\n".$mensagem;

    $cabecalho = "From: godoy.a@aluno.ifsp.edu.br"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if (mail($destino,$assuntoEmail,$corpoEmail,$cabecalho)) {
        echo("Mensagem enviada com sucesso!");
    } else {
        echo("Houve um erro ao enviar a mensagem");
    }

?>