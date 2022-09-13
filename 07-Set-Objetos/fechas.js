/* 
Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

console.log(Date());

console.log(new Date("November 03, 1983"));

let masTarde = new Date() > new Date("November 03, 1983");
console.log(masTarde);


let diaNacimiento = new Date("November 03, 1983").getDate();
console.log(diaNacimiento);

let mesNacimiento = new Date("November 03, 1983").getMonth() + 1;
console.log(mesNacimiento);

let AnyoNacimiento = new Date("November 03, 1983").getFullYear();
console.log(AnyoNacimiento);
