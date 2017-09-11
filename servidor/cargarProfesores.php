<?php
	// Conectamos coa base de datos
	require("conexion.php");

	// Collemos os profesores para amosalos nun despregábel
   	$consulta = "SELECT codigo, nome, apelidos 
				   FROM profesores
			   ORDER BY nome, apelidos";

	$saida = array();
	if ($datos = $conexion->query($consulta))
	{   		
		while ($profesor = $datos->fetch_object()) 
		{
			$saida[] = $profesor;
		}
		$datos->close();
	}
	$conexion->close();
	echo json_encode($saida);
?>