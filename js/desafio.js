
//Ejercicio 1//
//--Pedir un numero mediante un prompt y sumarle un numero en cada repetición, realizando una salidad para cada resultado --//

let ingresarNumero = parseInt(prompt("Ingrese un Numero")); 


for (let i=0; i<=5; i++) {
let resultado = ingresarNumero + i
alert(resultado +" + " + i + " = " + resultado);
}

//Ejercicio 2//
//--Pedir un texto mediante un prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingrese "ESC" --//

let ingresarPalabra = prompt("Escribe palabra magica para salir");
let resultado = ingresarPalabra;
let textoConcatenar =" ";

while (textoConcatenar != `ESC`) {
    textoConcatenar = prompt("Sigue intentando");
    resultado = resultado + " " + textoConcatenar;
    console.log(resultado)
   
}

//Ejercicio 3//
//--Pedir un numero por prompt, repetir la salida del mensaje "Hola" la cantidad de veces ingresadas-//

let numero1 = parseInt(prompt("Ingrese un numero"));

for (let i=1; i <= numero1; i++ ) {
  alert ("Hola");
}