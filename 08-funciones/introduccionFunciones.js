// Qé son las funciones, cómo se declaran y cómo se utilizan


const nombre = "Julio";
//saludar("Julio");
saludar(nombre);

function saludar (nombre){
    console.log("Hola ");
    console.log(`hola ${nombre}`)

}


let nombre_2 = "César";
console.log(nombre_2);

despedir(nombre_2);

function despedir(nombre){
    nombre = "Pedro";
    console.log( `Adiós ${nombre}`);

}


let persona = {
    nombre: "Juan",
    apellido: "Gonzales"
};

saludarPersona(persona);
console.log(persona);

function saludarPersona(objeto){
    objeto.apellido="Martín";
    console.log(`hola ${objeto.nombre} ${objeto.apellido}`);
}

//saludarPersona();

//saludar();

function imprimirNumero (numero = 7){ // Parámetros por defecto
    console.log(numero);
}

imprimirNumero();


function imprimir(...parametros){
console.log(parametros);
}


imprimir(1, 3, 9, 2, "hola", {id:9});


function suma(...nums){
  return nums.reduce((a, b)=> a +b);
}

const s = suma(1, 2, 3, 4, 9, 15, 16);

console.log(s);


function multiplicar(a = 0, b = 0){
console.log(variable);
let variable_interna = "adiós";
console.log(variable_interna);

    return a + b;
}

let variable = "hola";

console.log(multiplicar(4, 9));
