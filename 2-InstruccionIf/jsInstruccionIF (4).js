function mostrar()
{
//tomo la edad  
var edad;
edad = parseInt(document.getElementById("edad").value);

if (edad >= 13 && edad <=17){
alert("Usted es adolescente");
}
else if (edad <13){alert("es niño");
}
else (edad >=18);alert("es adulto");
}


}//FIN DE LA FUNCIÓN