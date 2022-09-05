// Sesión 4 -String (Cadena de caracteres)

let str_sng = 'Hola soy un texto con comillas simples';
let str_dbl = "Hola soy un texto con comillas dobles";

console.log(str_sng);
console.log(str_dbl);

let str_comillas = "El otro día me dijo literalmente \"ve a sacar la basura\".";
let str_comillas_simples = 'El otro día me dijo literalmente "ve a sacar la basura".';
console.log(str_comillas);
console.log(str_comillas_simples);

// comillas invertidas (backtichs) nos permiten introducir códigos
// tambièn permite salto de líneas
let_str_backticks = `Hola esto es un string con bacticks.`
console.log(let_str_backticks);

let nombre = "Julio";
let saludo = `hola, ${nombre} bienvenido.`;
console.log(saludo)


// Plantilla HTML

let plantilla = `
<html>
<h1>Pgina web de ${nombre} </h1>
<p>Este es un pàrrafo </p>
</html>
`
console.log(plantilla);

//Introducción de variables en html

let libros = ["Hola como estamos", "La vida es bella", "Hay que hacer las cosas"];