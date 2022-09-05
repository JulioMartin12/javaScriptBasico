// +++++++++++++++++++++++Bucles+++++++++++++++++++++++++++

//For

/* for(inicializacion; condicion; actualizacion){

}
 */

let array = [0,1,2,3,4,5,6,7,8,9];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(array[index]);
    
}



array.forEach(element => {
    console.log(element);
});


let persona = {
    nombre: "julio",
    apellido: "Martín",
    edad: 38,
    sexo: "Masculino"
}

for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}