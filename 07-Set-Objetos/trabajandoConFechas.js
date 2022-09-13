// Trabajando con fechas

const fecha = new Date();

console.log(fecha);

// Atención - Los meses inicializan en 0 (0 - Enero y 11 - Diciembre);
const fecha2 = new Date(1983, 10, 03);

console.log(fecha2);

const fecha3 = new Date(-1000000000); // Milisegundos
console.log(fecha3);

const fecha4 = new Date("October 13, 1979 12:15:15");
console.log(fecha4);

console.log(fecha < fecha2);

const fecha5 =new Date( 1987, 10, 20, 1, 23, 52, 192);
console.log(fecha5);

console.log(fecha2 === fecha5) // ERROR - No se puede comparar  de esta manera.

// Obtener el día, elmes y el año de una fecha.
// obtener la fecha .getDate()
console.log(fecha2.getDate());

// Obtener el mes .getMonth() (0 - Enero y 11 - Diciembre);
console.log(fecha2.getMonth());

//Obtener el año .getFullYear();
console.log(fecha2.getFullYear());


// .toLocaleDateString()
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

console.log(fecha3.toLocaleDateString('en-GB'));



