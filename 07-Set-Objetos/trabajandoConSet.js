// Set o conjuntos (en castellano)
const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "hola", {id:5}, {id:5}];

console.log({id:5} === {id:5});

const miSet =new Set(array);
console.log(array);
console.log(miSet); //No permite almacenar valores repetidos

//.add() para añadir elementos

miSet.add(12);
console.log(miSet);
miSet.add(12);
console.log(miSet);

// .delete() para eliminar elementos.

miSet.delete("hola");
console.log(miSet);

// .clear() //borra la lista de elementos.
/* miSet.clear();
console.log(miSet); */

// .has() para verificar si existe un valor igual que el .include() del array.
// console.log(array.include(2));

console.log(miSet.has(12));

// .size es una propiedad no es un metodo , que nos dice el tamaño del Set.
console.log(miSet.size);

miSet.forEach(valor => {
    console.log(valor);
})


const it_set=miSet.values();
console.log(it_set)

const arr_miSet= [...miSet];
console.log(arr_miSet);


