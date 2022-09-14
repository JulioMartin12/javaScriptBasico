/* 
Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 
  segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos*/


function sinParametros(){
    return true;
}

console.log(sinParametros());

const miPromesa = new Promise ((resolve, reject) => {

})

setTimeout(function() {console.log("Hola soy una promesa")},5000);


function* generadoraPares(){
    let idPar = 0;
     while(true){
        idPar +=2;
        yield idPar;
     }
}

const gen = generadoraPares();


console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
