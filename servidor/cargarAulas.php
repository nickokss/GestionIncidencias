<?php
	// Conectamos coa base de datos
	require("conexion.php");

	// Collemos as aulas para amosalas nun despregábel
   	$consulta = "SELECT codigo, nome 
				   FROM aulas
			   ORDER BY nome";

	$saida = array();
	if ($datos = $conexion->query($consulta))
	{   		
		while ($aula = $datos->fetch_object()) 
		{
			$saida[] = $aula;
		}
		$datos->close();
	}
	$conexion->close();
	echo json_encode($saida);
?>