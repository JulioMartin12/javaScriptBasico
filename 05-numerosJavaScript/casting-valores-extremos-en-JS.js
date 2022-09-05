// Operador .valueOf() - Obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());


// NaN (Not a Number) - Infinity
let n = Number('adios');
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;

console.log(numerador / divisor);

let divisor_2 = null;
console.log(numerador / divisor_2);


// Cómo convertir los string a valores numéricos comn Number, parseInt y parseFloat

let numero = '5.89';
let num2 = null;

console.log(typeof numero);
console.log(numero + num2); // Error de concepto

console.log(Number(numero) + num2);

console.log(parseFloat(numero));
console.log(parseInt(numero));

let num3 = 4;
console.log(parseFloat(num3));
console.log(parseInt(num3));

// Números Hexadecimales (base 16)
let numHex = '0X3A5B7';
console.log(parseInt(numHex));

//  Obtener los valores máximos y mínimo en Javascript
let min_presicion = Number.EPSILON;
let min_val_JS = Number.MIN_VALUE;
let max_val_JS = Number.MAX_VALUE;

console.log(min_presicion);
console.log(min_val_JS);
console.log(max_val_JS);