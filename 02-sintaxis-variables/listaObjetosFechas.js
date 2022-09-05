
//Listas, array o arreglo
const lista = [1, "hola",undefined, true, null ];
const lista2 = new Array(2, "hola", true, undefined, null);
const lista3 = new Array(3);

lista3[0] = "soy el primer elemento, index 0";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "nokia",
    isWhite: false,
    contacto: ["Juan", "Claudia", "Jónas"],
    tarjeta: {
        marca: "Naranja",
        almacenamiento: 36
    }
}

console.log(movil.tarjeta.marca)

movil.anyo = 2022;
movil.marca = "Samsung";
console.log(movil.anyo);
console.log(movil.marca);

//Fechas
//Librerías de apoyo Moment.js

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);

const fecha_cadena = new Date("September 03 2022");
console.log(fecha_cadena);
_
const fecha_valores = new Date(2022, 8, 03);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anio = ahora.getFullYear();

console.log(dia, mes, anio);