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
/*function Zoologico(){
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
Zoologico();*/


// Ejercicio #3
// Funcion
/*function SueldoTrabajadores(){
// Ingreso de datos
NumTrabajadores = parseInt(prompt("Ingrese el numero de trabajadores"));
// Condicionales
for (let i = 1; i <= NumTrabajadores; i++) {
HorasTrabajadas = parseInt(prompt("Ingrese el numero de horas trabajadas en la semana"));
if(HorasTrabajadas <= 40){
    Salario = (HorasTrabajadas * 20);
    alert("Por las horas trabajadas de: "+HorasTrabajadas+" Tendra un pago de: $"+Salario);
}else if(HorasTrabajadas > 40){
    HorasExtra = (HorasTrabajadas - 40) * 25;
    Salario = (HorasExtra + (40 * 20) );
    // Mensaje de resultado
    alert("Por las horas trabajadas de: "+HorasTrabajadas+" Tendra un pago de: $"+Salario);
}
}
}
SueldoTrabajadores();*/


// Ejercicio #4
//Funcion
/*function EdadesdeUnGrupo(){
// Ingreso de datos
NumeroMujeres = prompt("Ingrese el numero total de mujeres");
NumeroHombres = prompt("Ingrese el numero total de hombres");
// Acumuladores
AcumuladorHombre = 0;
AcumuladorMujer = 0;
for (i=1;i<=NumeroHombres;i++){
    EdadHombres = parseInt(prompt("Ingrese la edad del hombre"));
    AcumuladorHombre = AcumuladorHombre + EdadHombres;
}  
// Promedio Numero de hombres
var PromedioH = AcumuladorHombre / NumeroHombres;
var PromedioRH = PromedioH.toFixed(2);
// For y condicionales
for(i=1;i<=NumeroMujeres;i++){
    EdadMujeres = parseInt(prompt("Ingrese la edad del mujeres"));
    AcumuladorMujer = AcumuladorMujer + EdadMujeres;
}
// Promedio Numero de mujeres
PromedioM = (AcumuladorMujer / NumeroMujeres);
var PromedioRM = PromedioM.toFixed(2);
// Promedio de todo el grupo
PromedioG = ((AcumuladorMujer+AcumuladorHombre) / (NumeroHombres + NumeroMujeres) );
var PromedioRG = PromedioH.toFixed(2);
// Mensaje de resultado
alert("El promedio de edades de los hombres es: "+PromedioRH+" mujeres: "+PromedioRM+ " Promedio de todo el grupo: "+PromedioRG);
}
EdadesdeUnGrupo();*/


// Ejercicio #5
// Funcion
/*function CojuntoDeNdatos(){
// Ingreso de datos
NumTotal = parseInt(prompt("Ingrese el numero total del conjunto de datos"));
// Contadores y variables
Auxiliar = true;
// For y condicionales
for (i=1; i<=NumTotal;i++){
    Numeros = parseInt(prompt("Ingrese numero"));
    if(Auxiliar == true){
        NumeroMenor = Numeros;
        Auxiliar = false;
    }else if(Numeros < NumeroMenor){
        NumeroMenor = Numeros;
    }
}
// Mensaje de resultado
alert("El numero menor es : "+NumeroMenor); 
}
CojuntoDeNdatos();*/


// Ejercicio #6
// Funcion
function PesoPorPersonas(){
// Acumuladores y variables
NumeroPersonas = 5;
AcumuladorPeso = 0;
// For y condicionales
for(i=1;i<=NumeroPersonas;i++){
    for(j=1;j<=10;j++){
        //Ingreso de datos
       PesoBasculas = parseInt(prompt("Ingrese el peso de la bascula: "+j));
       AcumuladorPeso = AcumuladorPeso + PesoBasculas;
    }
    PesoAnterio = parseInt(prompt("Ingrese el promedio del mes pasado"));
    PromedioPeso = (AcumuladorPeso / 10).toFixed(2);
    PesoTotal = PromedioPeso - PesoAnterio;
    if(PromedioPeso > PesoAnterio){
        // Mensaje de Respuesta
        alert("Subio de peso "+PesoTotal+" Kg");
    }else if(PromedioPeso < PesoAnterio){
        // Mensaje de Respuesta
        alert("Bajo de peso "+PesoTotal+" Kg");
    }
}
}
PesoPorPersonas();
