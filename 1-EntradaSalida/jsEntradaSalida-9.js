/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{ //Se declara las variables
    var sueldo;
    var aumento;
    var sueldoAumentado;
    
    sueldo = parseint(document.getElementById("sueldo").value;
    aumento = (sueldo*10)/100
    sueldoAumentado = sueldo + aumento;
    
    document.getElementById("resultado").value = sueldoAumentado;
    
}
