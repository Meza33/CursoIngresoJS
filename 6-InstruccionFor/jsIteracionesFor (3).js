function mostrar()
{

var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));

while (isNaN(repeticiones));{

    for (var i = 0; i < repeticiones ;i++) {
    document.write("Hola UNT-fra </br>");
    
}
}
//console.log(contador);}
//alert(contador);}

}//FIN DE LA FUNCIÓN

/*ejemplo:
    var numero;
    var mayor;
    var menor;

    for (var contador = 0; contador < 5; contador++) {

        numero = parseInt(prompt("Ingrese un numero: "));
        while (isNaN(numero)) {
            numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
        }

        if (contador == 0 || numero > mayor) {
            mayor = numero;
        }
        if (contador == 0 || numero < menor) {
            menor = numero;
        }

    }

    alert("El mayor numero es " + mayor + " y el menor es " + menor);


ejemplo2.
   var contador = 0;
    var numero;
    var mayor;
    var menor;

    while (contador < 5) {

        numero = parseInt(prompt("Ingrese un numero: "));
        while (isNaN(numero)) {
            numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
        }

        if( contador == 0 || numero > mayor){
            mayor = numero;
        }
        if( contador == 0 || numero < menor){
            mayor = numero;
        }

        contador++;
    }

    alert("El mayor numero es " + mayor + " y el menor es " + menor);

/*

ejemplo 3:  var numero;
    var mayor;
    var menor;
    var seguir;
    var flag = 0;

    do {

        numero = parseInt(prompt("Ingrese un numero: "));
        while (isNaN(numero)) {
            numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
        }

        if (flag == 0 || numero > mayor) {
            mayor = numero;
        }
        if (flag == 0 || numero < menor) {
            menor = numero;
            flag = 1;
        }

        seguir = prompt("Quiere continuar?: ");
    } while (seguir == 's');

    alert("El mayor numero es " + mayor + " y el menor es " + menor);
