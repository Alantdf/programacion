// Definir la temperatura
let temperatura = 18; 

if (temperatura < 0) {
    console.log("Frío");
} else if (temperatura >= 0 && temperatura <= 15) {
    console.log("Fresco");
} else if (temperatura >= 16 && temperatura <= 25) {
    console.log("Templado");
} else if (temperatura > 25) {
    console.log("Caliente");
}
