// Contraseña
let contraseñaCorrecta = "12345";
let contraseñaIngresada = prompt("Por favor, ingrese su contraseña:");

let acceso = contraseñaIngresada === contraseñaCorrecta ? "Contraseña correcta." : "Contraseña incorrecta.";

console.log(acceso);
