function receta(){
    cantidad= prompt("libras de torta");
var cantidad, huevos, harina, azucar, levadura,leche,aceite,esencia_vainilla,canela_molida;

huevos= cantidad*6;
harina = cantidad*500;    
azucar= cantidad*400;
levadura= cantidad*20;
leche= cantidad*240;
aceite= cantidad*200;
esencia_vainilla=cantidad*20;
canela_molida=cantidad*20;

document.write("se necesita para un paste lo siguente:<br>" + huevos +" huevos<br>"+ harina+" gramos de harina <br>"
+azucar +" gramos de azucar <br> "+ levadura+ "gramos de levadura <br>" + leche+ "mililitros de leche <br>" + aceite+ "mililitros de aceite <br>" 
+esencia_vainilla + "mililitros de esencia de vainilla <br>" + canela_molida+ "gramos de canela molida <br>" );

}

function costos(){

    cantidad = Number(prompt("libras de torta"));
var cantidad, huevos, harina, azucar,levadura, leche, aceite, esencia_vainilla,canela_molida;
huevos= cantidad*4200;
harina = cantidad*9000;   
azucar=cantidad*4000;
levadura= cantidad*500;
leche=cantidad*8000;
aceite=cantidad*9500;
esencia_vainilla=cantidad*5600;
canela_molida=cantidad*500;
total= huevos+harina+azucar+levadura+leche+aceite+esencia_vainilla+canela_molida;
document.write("los costos para las libras de pastel son: "+ total);
}