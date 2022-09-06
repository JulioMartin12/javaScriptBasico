// Cómo trabajar con listas (arrays, arreglos, vectores...)

//let array = new Array();
let var1 = 45;
let array =[1, "hola", false, {id:5}, null, undefined, var1];

console.log(array);

// Accede a los valores de un array a través de su posición.
// array[indice] => 0, 1, 2, 3,....


console.log(array[1]); 
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

// Método para introducir nuevos valores en nuestos arrays.
//.push() .unshift() => Mutan el valor de nuestro array

// Valores al final el metodo Push, podemos poner màs de un elemento dentro del push
array.push("final");
console.log(array);

// Valores al principio Unshift
array.unshift("Inicio", 101, 102);
console.log(array);

// Métodos para eliminar valores en nuestros arrays
// .pop() .shift() => Mutal el valor del array


const array2 = [1, 2, "hola", false];
// Valores al final -> Pop
array2.pop();
console.log(array2);

// Valores al principio -> Shift
array2.shift();
console.log(array2);

// Métodos para eliminar, modificar o añadir valores en nuestro array
// .splice(x, y, z)
const array3 = [1, 2, 3, 4, 5, 6];


// Eliminar valores, splice(indice,numValoresAEliminar)
array3.splice(2, 3);
console.log(array3);

// Añadir valores, splice(indice, 0, valores)

array3.splice(2, 0, "hola", 3);
console.log(array3);

// Modificar valores .splice(indice, 1, valores)
array3.splice(2, 1, 3);
console.log(array3);