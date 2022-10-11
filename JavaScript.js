// Ejercicio #1
// Funcion
/*function CarrosCiudad(){
// Mensaje de Ingreso de datos
NumeroCarros = parseInt(prompt("Ingrese carros ingresados"));
// Contadores
ContarAmarilo = 0;
ContarRosa = 0;
ContarRojo = 0;
ContarVerde = 0;
ContarAzul = 0;
// For y condicionales
for (i=1;i<=NumeroCarros;i++){
    NumPlaca = prompt("Ingrese los numeros de la placa");
    Vec = NumPlaca.split("");
    Var = Vec.slice(-1).pop();
    if( (Var == "1") || (Var == "2") ){
        ContarAmarilo = ContarAmarilo + 1;
    }else if( (Var == "3") || (Var == "4") ){
        ContarRosa = ContarRosa + 1;
    }else if( (Var == "5") || (Var == "6") ){
        ContarRojo = ContarRojo + 1;
    }else if( (Var == "7") || (Var == "8") ){
        ContarVerde = ContarVerde + 1;
    }else if( (Var == "9") || (Var == "0") ){
        ContarAzul = ContarAzul + 1;
    }
}
// Mensaje de resultado
alert("Entraron carros Amarillos: "+ContarAmarilo+" Rosas: "+ContarRosa+" Rojos: "+ContarRojo+" Verdes: "+ContarVerde+" Azules: "+ContarAzul);
}
CarrosCiudad();*/

// Ejercicio #2
// Funcion
function Zoologico(){
// Mensaje de Ingreso de datos
NombreAnimal = prompt("Ingrese nombre del animal");
// Contadores y variables
EdadRango1 = 0; PorcentajeRango1 = 0;
EdadRango2 = 0; PorcentajeRango2 = 0;
EdadRango3 = 0; PorcentajeRango3 = 0;
// Condicionales y For
if(NombreAnimal == "elefantes"){
    for(i=1;i<=20;i++){
        EdadAnimal = parseInt(prompt("Ingrese la edad de los animales"));
        if((EdadAnimal == 0) || (EdadAnimal == 1) ){
            EdadRango1 = EdadRango1 + 1;
        }else if((EdadAnimal > 1) & (EdadAnimal < 3) ){
            EdadRango2 = EdadRango2 + 1;
        }else if(EdadAnimal >= 3){
            EdadRango3 = EdadRango3 + 1;
        }
    }
    PorcentajeRango1 = ( (EdadRango1 * 100) / 20 );
    PorcentajeRango2 = ( (EdadRango2 * 100) / 20 );
    PorcentajeRango3 = ( (EdadRango3 * 100) / 20 );
    // Mensaje de resultado
    alert("De 0 a 1 hay: "+PorcentajeRango1+"%"+" De 1 a 3 hay: "+PorcentajeRango2+"% "+"De 3 a infinito hay: "+PorcentajeRango3+"%");
}else{
    alert("Ese nombre no existe, escriba elefantes");
}

// Condicionales y for
if(NombreAnimal == "jirafas"){
    for(i=1;i<=15;i++){
        EdadAnimal = parseInt(prompt("Ingrese la edad de los animales"));
        if((EdadAnimal == 0) || (EdadAnimal == 1) ){
            EdadRango1 = EdadRango1 + 1;
        }else if((EdadAnimal > 1) & (EdadAnimal < 3) ){
            EdadRango2 = EdadRango2 + 1;
        }else if(EdadAnimal >= 3){
            EdadRango3 = EdadRango3 + 1;
        }
    }
    PorcentajeRango1 = ( (EdadRango1 * 100) / 15 );
    PorcentajeRango2 = ( (EdadRango2 * 100) / 15 );
    PorcentajeRango3 = ( (EdadRango3 * 100) / 15 );
    // Mensaje de resultado
    alert("De 0 a 1 hay: "+PorcentajeRango1+"%"+" De 1 a 3 hay: "+PorcentajeRango2+"% "+"De 3 a infinito hay: "+PorcentajeRango3+"%");
}else{
    alert("Ese nombre no existe, escriba jirafas");
}
// Condicionales y for
if(NombreAnimal == "chompances"){
    for(i=1;i<=40;i++){
        EdadAnimal = parseInt(prompt("Ingrese la edad de los animales"));
        if((EdadAnimal == 0) || (EdadAnimal == 1) ){
            EdadRango1 = EdadRango1 + 1;
        }else if((EdadAnimal > 1) & (EdadAnimal < 3) ){
            EdadRango2 = EdadRango2 + 1;
        }else if(EdadAnimal >= 3){
            EdadRango3 = EdadRango3 + 1;
        }
    }
    PorcentajeRango1 = ( (EdadRango1 * 100) / 40 );
    PorcentajeRango2 = ( (EdadRango2 * 100) / 40 );
    PorcentajeRango3 = ( (EdadRango3 * 100) / 40 );
    // Mensaje de resultado
    alert("De 0 a 1 hay: "+PorcentajeRango1+"%"+" De 1 a 3 hay: "+PorcentajeRango2+"% "+"De 3 a infinito hay: "+PorcentajeRango3+"%");
}else{
    alert("Ese nombre no existe, escriba chompances");
}
}
Zoologico();
