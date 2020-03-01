/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{ 
  //1 Paso declaramos las variables. 
  var sueldo;
  var  resultado;
  var sueldoaumentado;

  // 2 Paso paseamos las variables

  sueldo=parseInt(document.getElementById("sueldo").value);
  resultado = (sueldo*10)/100;

  sueldoaumentado = resultado + sueldo;
   
  document.getElementById("resultado").value=sueldoaumentado;
    
}
