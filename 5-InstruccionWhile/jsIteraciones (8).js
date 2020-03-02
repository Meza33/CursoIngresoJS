function mostrar()
{
	var negativo=1;

	var respuesta='si';
	while(respuesta == "si"){
		numeroIngresado = prompt("Ingrese un numero ");
		numeroIngresado = parseInt(numeroIngresado);
		//validar que el dato este correcto
		while (isNaN(numeroIngresado)) {
			numeroIngresado = prompt("Lo que ingresaste no era un numero, volver a ingresarlo");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if(numeroIngresado>=0){
			positivo = positivo + numeroIngresado;
		}else{
			negativo = negativo * numeroIngresado;
		}
		respuesta = prompt("Desea continuar: escriba si para continuar");
	}



document.getElementById('suma').value=positivo;
}//FIN DE LA FUNCIÓN



/* trabajo practico ferrete function Sumar () 
{

    //Declarando las variables
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;

    //El numero ingresado en la pantalla llegue a la variable
    precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);

    //Operacion suma
    resultado = precioUno + precioDos + precioTres;

    //Mostrar resultado
    alert(resultado);
}
function Promedio () 
{

	//Declarando las variables
    var precioUno;
    var precioDos;
    var precioTres;
    var resultadoSuma;
    var cantidadVariables;
    var promedio;

    //El numero ingresado en la pantalla llegue a la variable
    precioUno = parseFloat(document.getElementById("PrecioUno").value);
    precioDos = parseFloat(document.getElementById("PrecioDos").value);
    precioTres = parseFloat(document.getElementById("PrecioTres").value);

    //Operciones
    resultadoSuma = precioUno + precioDos + precioTres;
    cantidadVariables = 3;
    promedio = resultadoSuma / cantidadVariables; 

    alert(promedio);
}
function PrecioFinal () 
{

	//Declarando las variables
    var precioUno;
    var precioDos;
    var precioTres;
    var totalValor;
    var ivaDelTotal;
    var totalValorConIva;

    //El numero ingresado en la pantalla llegue a la variable
    precioUno = parseFloat(document.getElementById("PrecioUno").value);
    precioDos = parseFloat(document.getElementById("PrecioDos").value);
    precioTres = parseFloat(document.getElementById("PrecioTres").value);

    //Operacion 
    totalValor = precioUno + precioDos + precioTres;
    ivaDelTotal = (totalValor * 21) / 100;
    totalValorConIva = totalValor + ivaDelTotal;

    alert(totalValorConIva);

} /*