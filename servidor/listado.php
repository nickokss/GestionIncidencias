<?php
	// Facemos a conexión coa base de datos
	require("conexion.php");

	// Collemos as incidencias para amosalas
	$consulta = "SELECT i.codigo, i.data, a.nome, p.alcume AS comunica, r.alcume AS resolve, i.descricion, i.resolta  
				   FROM incidencias AS i 
			 INNER JOIN aulas AS a ON i.aula = a.codigo
			 INNER JOIN profesores AS p ON i.profeComunica = p.codigo
			 INNER JOIN profesores AS r ON i.profeResolve = r.codigo
			   ORDER BY data DESC";

	$saida = array();
	if ($datos = $conexion->query($consulta))
	{   		
		while ($incidencia = $datos->fetch_object()) 
		{
			$saida[] = $incidencia;
		}
		$datos->close();
	}
	$conexion->close();
	echo json_encode($saida);
?>