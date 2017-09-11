<?php
	// Conectamos coa base de datos
	require("conexion.php");

	$consulta = "UPDATE incidencias
					SET data='".dataMysql($_POST['data'])."',
						aula='".$_POST['aula']."',
						profeComunica='".$_POST['profeComunica']."',
						profeResolve='".$_POST['profeResolve']."',
						descricion='".$_POST['descricion']."',
						resolta='".$_POST['resolta']."'
				  WHERE codigo='".$_POST['codigo']."'"; 

	$conexion->query($consulta);
	$conexion->close();

	function dataMysql($data)
	{ 
		ereg( "([0-9]{1,2})/([0-9]{1,2})/([0-9]{2,4})", $data, $auxiliar); 
		return $auxiliar[3]."-".$auxiliar[2]."-".$auxiliar[1]; 
	} 
?>