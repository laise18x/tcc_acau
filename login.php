<!DOCTYPE html>
<html>
<head>
	<!-- Meta tags Obrigatórias -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>ACAU - Login</title>

	<!-- Bootstrap CSS -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<!-- Estilo customizado -->
	<link rel="stylesheet" type="text/css" href="../css/login.css">
	<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>

	<div id="container">

		<img src="../imagens/logo.png">


  <?php

	if(isset($_POST['id']) && isset($_POST['senha']))
{
    $idaluno=$_POST['id'];
    $senha=$_POST['senha'];

    $check_user="select * from aluno WHERE idaluno='$idaluno'AND senha='$senha'";

    $run=mysqli_query($dbcon,$check_user);

		if(mysql_num_rows ($check_user) > 0 )
{
$_SESSION['idaluno'] = $idaluno;
$_SESSION['senha'] = $senha;
header("Location: index.html");
die();
}
else{
  unset ($_SESSION['idaluno']);
  unset ($_SESSION['senha']);
  header("Location: cadastro.html");
die();
  }
}

    /*if(mysqli_num_rows($run))
    {
        echo "<script>window.open('welcome.php','_self')</script>";
        $_SESSION['idaluno']=session_id();//here session is used and value of $user_email store in $_SESSION.
    }
    else
    {
      echo "<script>alert('Email or password is incorrect!')</script>";
    }
}*/
	/*require_once("conexao.php");
	session_start();
/*if(isset($_POST['entrar'])){
	$idaluno = trim($_POST['idaluno']);
	$hashPassword = trim($_POST['senha']);
	$sql = "select * from aluno where senha = '".$hashPassword."' && idaluno='".$idaluno."'";
	$rs = mysqli_query($conn,$sql);
	$numRows = mysqli_num_rows($rs);
	if($numRows  == 1){
		$row = mysqli_fetch_assoc($rs);
		if(password_verify($hashPassword,$row['senha'])){
			echo "Password verified";
			header("Location:index.html");
		}
		else{
			echo "Wrong Password";
		}
	}
	else{
		echo "No User found";
	}
}*/


  //session_start();
       //Incluindo a conexão com banco de dados
/*   include_once("conexao.php");
   //O campo usuário e senha preenchido entra no if para validar
   if((isset($_POST['idaluno'])) && (isset($_POST['senha']))){
       $idaluno = mysqli_real_escape_string($conn, $_POST['idaluno']); //Escapar de caracteres especiais, como aspas, prevenindo SQL injection
       $senha = mysqli_real_escape_string($conn,$_POST['senha']);
       $senha = sha1($senha);
       //Buscar na tabela usuario o usuário que corresponde com os dados digitado no formulário
       $result_usuario = "SELECT * FROM aluno WHERE idaluno = '$idaluno' && senha = '$senha' LIMIT 1";
       $resultado_usuario = mysqli_query($conn, $result_usuario);
       $resultado = mysqli_fetch_assoc($resultado_usuario);
}
       //Encontrado um usuario na tabela usuário com os mesmos dados digitado no formulário
       if(isset($resultado)){
           $_SESSION['Id'] = $resultado['idaluno'];
           $_SESSION['usuariosenha'] = $resultado['senha'];
            header("Location:index.html");
       //Não foi encontrado um usuario na tabela usuário com os mesmos dados digitado no formulário
       //redireciona o usuario para a página de login
       }else{
           //Váriavel global recebendo a mensagem de erro
           $_SESSION['loginErro'] = "Usuário ou senha Inválido";
           echo"<script language='javascript' type='text/javascript'>
           alert('Login e/ou senha incorretos');window.location
           .href='login.html';</script>";
       }
   //O campo usuário e senha não preenchido entra no else e redireciona o usuário para a página de login
  // }
*/
  /*  $idaluno=$_POST['idaluno'];
    $senha = sha1($_POST['senha']);
    $entrar = $_POST['entrar'];
    $con = mysqli_connect('localhost','root','');
    $db = mysqli_select_db($con,'acau');
    if (!empty($_POST) AND (empty($_POST['usuario']) OR empty($_POST['senha']))) {
      header("Location: index.php"); exit;
  }
      if (isset($entrar)) {
        $verifica = mysqli_query($con,"SELECT * FROM aluno WHERE idaluno =
        '$idaluno' AND senha = '$senha'") or die("erro ao selecionar");
          if (mysqli_num_rows($verifica)<=0){
            echo"<script language='javascript' type='text/javascript'>
            alert('Login e/ou senha incorretos');window.location
            .href='login.html';</script>";
            die();
          }else{
            setcookie("idaluno",$idaluno);
          }
      }*/
      ?>

	</div>

</body>
</html>
