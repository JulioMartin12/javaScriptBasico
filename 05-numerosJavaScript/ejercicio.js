/* 
Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
*/

//- Una variable que contenga tu altura en centímetros (entero)
let alturaCm = 175;
console.log("Mi altura es: "+ alturaCm+ " Centímetros");


//- Una variable que contenga tu altura en metros (número de coma flotante)
let alturaM = 1.75;
console.log("Mi altura es: "+ alturaM+ " Metros");

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = 85.500;
console.log("Mi peso es: "+ peso+ " Kilogramos");

//- Una variable que contenga tu altura en metros redondeada hacia arriba

let alturaRedoHaciaArriba = Math.ceil(alturaM);
console.log(alturaRedoHaciaArriba);

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoRedoHaciaAbajo = Math.floor(peso);
console.log(pesoRedoHaciaAbajo);



//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let comprobacion = (Number.MAX_VALUE + 1) === (Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 1);
console.log(Number.MAX_VALUE);

console.log(comprobacion);