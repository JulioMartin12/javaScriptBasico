// Métodos más utilizados con de caracteres

// Cómo obtener la longitud de un string

let str = "Hola soy un string"
console.log(str.length);

// Obtener partes de cadenas de caracteres
// slice() substring() substr()

let slice_str = str.slice(5, 10);
console.log(slice_str);

let substring_str =  str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(5, 10); //deprecated
console.log(substr_str);


// Remplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Julio.";
console.log(cadena);

// Al utilizar string sólo reemlaza la primera intancia.
console.log(cadena.replace('Julio','Martín'));

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles";

// Al utilizar string sólo reemplaza la primera intancia
console.log(texto_largo.replace("los", "cinco"));

// Al utilizar la expresión regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/los/g,'cinco'));

