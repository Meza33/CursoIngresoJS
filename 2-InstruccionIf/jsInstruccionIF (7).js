function mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;
//forma negada
//if (!(edad>=18) && !(estadoCivil == "Soltero"))
//{alert("Es muy pequeño para No ser Soltero")}
edad = parseInt(document.getElementById("edad").value);
estadoCivil= document.getElementById("estadoCivil").value;
if(edad<=17 && estadoCivil !="Soltero"){alert("es muy pequeño para no ser soltero");


}


}//FIN DE LA FUNCIÓN