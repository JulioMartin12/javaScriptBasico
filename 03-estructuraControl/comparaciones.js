// Comparaciones

/* 
<
>
<=
>=


*/

//Igualdad

if(5 == 5){
    console.log("5 es igual a 5.");
}

if(5 === 5){
    console.log("5 es muy igual a 5.");
}

let a = 5;
console.log(typeof a);
let b = "5";
console.log(typeof b);

// == sólo compara el valor
// === compara el valor y el tipo


if(a == b){
    console.log("a es igual a b  ---- Débil.");
}


if(a === b){
    console.log("a es igual a b-----Fuerte.");
}
