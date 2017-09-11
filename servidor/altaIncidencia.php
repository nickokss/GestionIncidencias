<?php
	// Conectamos coa base de datos
	require("conexion.php");

	$consulta = "INSERT INTO incidencias (data, aula, profeComunica, profeResolve, descricion, resolta)
				 VALUES ('".dataMysql($_POST['data'])."','".$_POST['aula']."','".$_POST['profeComunica']."','".$_POST['profeResolve']."','".$_POST['descricion']."','".$_POST['resolta']."')";

	$conexion->query($consulta);
	$conexion->close();

	function dataMysql($data)
	{ 
		ereg( "([0-9]{1,2})/([0-9]{1,2})/([0-9]{2,4})", $data, $auxiliar); 
		return $auxiliar[3]."-".$auxiliar[2]."-".$auxiliar[1]; 
	} 
?>