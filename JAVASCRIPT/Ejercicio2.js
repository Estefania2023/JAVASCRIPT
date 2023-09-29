//Crea un script que ingresé las medidas de triángulo y me diga su clasificación
var ladoA =prompt("Ingrese la medida del lado A:");
var ladoB =prompt("Ingrese la medida del lado B:");
var ladoC =prompt("Ingrese la medida del lado C:");

if (ladoA === ladoB && ladoB === ladoC){
    document.write("triangulo equilatero ya tiene todos sus lados iguales." );

} else if (ladoA === ladoB || ladoB === ladoC ||ladoA == ladoC){
    document.write("triangulo isóceles." );
}else {
    document.write("triangulo escaleno " );
}
  