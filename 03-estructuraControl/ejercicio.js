 /* +
 Crea los siguientes archivos JS:
- factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

- factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
 */
0
var total = 1;
for (let index = 1; index < 10; index++) {
    total *= index;
    
}

console.log("El factorial de !10= " + total);
total =1;
var contador = 1;
while (contador < 10) {
    total *= contador;
    contador ++;
    
}

console.log("El factorial de !10= " + total);


total = 1;
contador = 1;

while (true) {

    if (contador < 10) {
        total *= contador;
        contador++;
    }else{
        break;
    }

}

console.log("El factorial de !10= " + total);

