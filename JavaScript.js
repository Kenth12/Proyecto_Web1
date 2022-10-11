// Ejercicio #1
// Funcion
function CarrosCiudad(){
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
CarrosCiudad();


