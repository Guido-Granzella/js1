//uso de let, const, cuadro alert, prompt, confirm, parseInt


alert ("Buenos dias, os presento la mejor app web, salu2")
alert ("Recorda siempre utilizar minúsculas")

let nombre= prompt ("Decinos tu nombre:")
let apellido= prompt ("Decinos tu apellido:")
let pass= parseInt (prompt ("Ingrese su pass:"))
const edad= prompt ("¿Que edad tenés?")
let fingerPrint= confirm ("Ingrese su huella")


//uso de IF


if (nombre === "guido" && apellido === "granzella" && pass === 1234) {
    console.log ("¿Que onda " + nombre + " " + apellido + "?");
}
else {
    console.warn ("¡" + nombre +" "+ apellido + " tenes el acceso denegado!");
}


console.log ("Bueno, continuemos entonces.")


//encadenado (if, else if)


let precio= prompt ("¿Cuánto crees que vale tu cursada?")

if (precio<50) {alert ("Poné más ratón")}
else if (precio>50, precio<100) {alert ("Estás cerca, pero falta")}
else if (precio>=100) {alert ("Podemos hacer negocio master")}


alert ("Gracias por hacer negocios")


// ciclo estático y dinámico (for)


console.log ("Vamos a contar...")

for (let i = 0; i <= 10; i++) {
    console.log ("Iteración n°:", i)}

console.log ("Ahora indicanos hasta que número querés contar")

let final= parseInt (prompt ("Ingresa el número final de la cuenta"))

for (let i = 0; i <= final; i++) {
    console.log ("Iteración n°:", i)}


// while


let persona = ""
let password = ""
let login = false


while(login === false) {
    persona = prompt("Ingresa tu nombre:") 
    password = prompt("Ingresa tu contraseña:") 
    if (persona === "guido" && password === "1234") {
        console.log("Bienvenido nuevamente", persona) 
        login = true
    } else {
        alert("No se reconoce persona y/o contraseña.")
    }
}