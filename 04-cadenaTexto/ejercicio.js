/* 
Crea un archivo JS que contenga las siguientes líneas

- Una cadena de texto con tu Nombre

- Otra cadena de texto con tu Apellido

- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

- Una variable que contenga la primera letra del Nombre

- Otra variable que contenga la última letra del Apellido

- Una cadena de texto que elimine los espacios de la variable "estudiante"

- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
*/


//- Una cadena de texto con tu Nombre
let nombre = "Julio";
console.log("Mi nombre es: " + nombre);

//- Otra cadena de texto con tu Apellido
let apellido = "Martín";
console.log(`Mi apellido es ${apellido}`);

//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`;
console.log(estudiante);

//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = nombre.toUpperCase() + " " + apellido.toUpperCase();
console.log(estudianteMayus);

//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMin = nombre.toLowerCase() + " "+ apellido.toLowerCase();
console.log(estudianteMin);


//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let cantidadLetrasEstudiante = estudiante.length;
console.log(cantidadLetrasEstudiante);

//- Una variable que contenga la primera letra del Nombre
let firstLetraNombre = nombre.charAt(0);
console.log(firstLetraNombre);

//- Otra variable que contenga la última letra del Apellido
let lastLetraNombre = apellido.charAt(apellido.length -1);
console.log(lastLetraNombre);

//- Una cadena de texto que elimine los espacios de la variable "estudiante"
console.log(estudiante.replace(" ", ""));

//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

let isContenido = estudiante.includes("Julio");
console.log(isContenido);


