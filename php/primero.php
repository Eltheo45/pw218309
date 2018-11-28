<?php 
$servidor="localhost";
$usuario = "root";
$password = "";
$basedatos ="pw09";

$conexion=mysql_connect($servidor,$usuario,$password,$basedatos);
$sql="select ncontrol, nombre apellido, edad from alumnos";
$resultado=mysql_query($conexion,$sql);
var arregloDatos = array();
if(mysql_num_rows($resultado) > 0){
	while($registro=mysqli_fetch_array($resultado)){
		arregloDatos []= $registro;
		//array_push($arregloDatos, $registro);
	}	
}
//print($arregloDatos); //en pantalla
//Y si quiero JSON
print json_encode($arregloDatos)

 ?>