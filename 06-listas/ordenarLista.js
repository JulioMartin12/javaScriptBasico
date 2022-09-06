// .sort() -> MODIFICA EL ARRAY
const array = [2, 5, 9, 15, 1, 2, 0, 4];

console.log(array);

array.sort((a,b) => {
 if (a < b){
    return +1;
 }else {
    return -1;
 }
});

console.log(array);

// Ordenar únicamente array numéricos

const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546];

arrayNumerico.sort((a, b) => b - a);

console.log(arrayNumerico);

//Interesante en array de objetos
const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucía", edad: 3},
    {nombre: "Amaia", edad: 29},
];

listaObjetos.sort((a, b) =>  a.edad - b.edad);
//{
/*  if (a.edad < b.edad){
  return -1;
 }else{
    return 0;
 } */
//}
//)

console.log(listaObjetos);