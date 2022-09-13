/* 
Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto 
  con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/

const objPersonal = {
    nombre : "Julio",
    apellido : "Martín",
    edad : 38,
    altura : 175,
    eresDesarrollador : true

}

console.log(objPersonal);

let edad = objPersonal.edad;

console.log(edad);

const lista = [objPersonal];

// Agrega amigos.
lista.push({ nombre : "Pablo",
apellido : "Zina",
edad : 42,
altura : 175,
eresDesarrollador : false},
{ nombre : "Luciano",
apellido : "Cejas",
edad : 41,
altura : 176,
eresDesarrollador : false}
);

console.log(lista);


// Ordena la edad de Mayor a menor.
 lista.sort((a,b) => b.edad- a.edad);
 console.log(lista);
