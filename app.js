//Pedir el nombre , apellido y edad del usuario
var nombre = prompt("por favor, ingresa tu nombre");
var apellido = prompt("por favor, ingresa tu apellido");
var edad = parseInt(prompt("por favor, ingresa tu edad"));

//calcular la edad dentro de 10 años
var edadEn10Anos = edad + 10;

//mostrar el saludo y la edad dentro de 10 años
alert ("¡Hola" + nombre +" "+ apellido + "¡Tendras" + edadEn10Anos + "años en 10 años mas.");


//pedir la base y la altura del rectangulo
var base = parseFloat (prompt("Porfavor, ingresa la base del rectangulo:"));
var altura = parseFloat (prompt("Porfavor, ingresa la altura del rectangulo:"));

//calcular el area del rectangulo
var area = base * altura;

//mostrar el resultado
alert("El area del rectangulo es: " + area);