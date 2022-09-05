/* 
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/


let nombre = "Julio Martín";
console.log("Mi nombre es: " + nombre + ".");

let edad = 38;
console.log("Tengo " + edad + " años.");

let developer = true;
console.log("¿Eres desarrollador? " + developer)


const  fecha_nacimiento = new Date(1983, 10, 03);
console.log("Mi fecha de nacimiento es: " + fecha_nacimiento);

const libro_favorito = {
 titulo:"IT",
 autor: "Stephen King",
 fecha: "11/4/1999",
 url:"www.StephenKingIT.com"

}

console.log("Mi libro favorito es: " + libro_favorito.titulo);


