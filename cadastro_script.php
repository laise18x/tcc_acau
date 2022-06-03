
<?php
require 'conexao.php';
if(!empty($_SESSION["id"])){
    header("Location:index.php");
}
if(isset($_POST["submit"])){
    $nome = $_POST["nome"];
    $rg = $_POST["rg"];
    $senha = $_POST["senha"];
    $duplicate = mysqli_query($conn,"SELECT * FROM aluno WHERE nome = '$nome' OR rg = '$rg'");
    /*if(mysqli_num_rows($duplicate) > 0){
        echo
        "<script> alert('Username or rg Has Already Taken'); </script>";
    }
    else{*/
        if($senha == $senha){
            $query = "INSERT INTO aluno VALUES('$nome','$rg','$senha')";
            mysqli_query($conn, $query);
            echo
            "<script> alert('Registration Successful');</script>";
        }
        else{
            echo
            "<script> alert('Password Does Not Match');</script>";
        }
    //}
}
?>
<html>
	<div id="container" class="container1">
		
		<img src="imagens/logo.png">

		<h1>Cadastre-se</h1>

		<form action="cadastro_script.php" method="POST" >
			<div class="div_nome">
				<i class="fa fa-user icon"></i>
				<input class= "nome" type="text" name="nome" id="nome" label='nome'
					placeholder="Nome social" required>
			</div>

			<div class="div_rg">
				<i class="fa fa-sticky-note-o icon"></i>
				<input class= "rg" type="number" name="rg" id="rg" label="rg"
				placeholder="RG" required>
			</div>

			<div class="div_senha">
				<i class="fa fa-key icon"></i>
				<input class="senha" type="password" name="senha" id="senha" label="senha"
				placeholder="Senha" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" minlength="8" required>
			</div>

			<div class="dropdown">
			  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			    Instituição de ensino
			  </button>
			  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
			    <a class="dropdown-item" href="#">Instituição 1</a>
			    <a class="dropdown-item" href="#">Instituição 2</a>
			    <a class="dropdown-item" href="#">Instituição 3</a>
			  </div>
			</div>

			<div>
				<button onclick="upload()" class="submit">CADASTRAR</button>
			</div>

		</form>

		<div id="myProgress">
		  <div class="myBar"></div>
		</div>

</div>

	<div id="container" class="container2">
		<h4>Nome social</h4>
		<p>É o nome pelo qual você gostaria de ser chamado(a).</p>
		<h4>RG</h4>
		<p>É o seu número de identificação civil. Você deve digitar apenas números.</p>
		<h4>Senha</h4>
		<div class="form-check">
			  <input class="form-check-input" type="checkbox" value="" id="caractere">
			  <label class="form-check-label" for="flexCheckDefault">
			    8 caracteres
			  </label>
			</div>
			<div class="form-check">
			  <input class="form-check-input" type="checkbox" value="" id="numero">
			  <label class="form-check-label" for="flexCheckChecked">
			    1 número
			  </label>
			</div>
			<div class="form-check">
			  <input class="form-check-input" type="checkbox" value="" id="letra">
			  <label class="form-check-label" for="flexCheckChecked">
			    1 letra maiúscula
			  </label>
			</div>
			<div class="form-check">
			  <input class="form-check-input" type="checkbox" value="" id="simbolo">
			  <label class="form-check-label" for="flexCheckChecked">
			    1 símbolo especial (@, #, $...)
			  </label>

			</div>
		<h4>Instituição de ensino</h4>
		<p>É a instituição em que você estuda.</p>
		

	</div>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>


