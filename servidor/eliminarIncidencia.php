<?php
	// Conectamos coa base de datos
	require("conexion.php");

	$consulta = "DELETE
				   FROM incidencias
				  WHERE codigo = '".$_POST['codigo']."'";

	$conexion->query($consulta);
	$conexion->close();
?>