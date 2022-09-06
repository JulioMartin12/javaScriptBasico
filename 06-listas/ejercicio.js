/* Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación) */



//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["Azucar", "Yerba", "Sal", "Jugo", "Arroz"];
console.log(listaCompra);

//- Modifica la lista de la compra y añádele "Aceite de Girasol"

/* 
Otra forma de hacerlo.

listaCompra[0] = "Pan";
listaCompra[1] = "Leche";
listaCompra[2] = "Queso";
listaCompra[3] = "Fideos";
listaCompra.push("Aceite de Girasol");
 */

listaCompra.splice(0, 1, "Pan");
listaCompra.splice(1, 1, "Leche");
listaCompra.splice(2, 1, "Queso");
listaCompra.splice(3, 1, "Fideos");

listaCompra.splice(3, 0, "Aceite de Girasol");

console.log(listaCompra);
 



//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
console.log(listaCompra.splice(listaCompra.indexOf('Aceite de Girasol'), 1));
console.log(listaCompra);



//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const listaPeliculas = [
    {titulo: "El señor de los anillos",
     director: "Peter Jackson",
     fecha: 2001  
    },
    {titulo: "Avengers: Endgame",
     director: "Anthony y Joe Russo",
     fecha: 2019  
    },
    {titulo: "Forest Gump",
     director: "Robert Zemeckis",
     fecha: 1994  
    }
];

console.log(listaPeliculas);

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const nuevaListaPeliculas = listaPeliculas.filter( peli => peli.fecha >= 2010);
console.log(nuevaListaPeliculas);

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const nuevaListaDirectores = listaPeliculas.map(director => director.director);
console.log(nuevaListaDirectores);

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const nuevaListaTitulos = listaPeliculas.map(titulo => titulo.titulo);
console.log(nuevaListaDirectores);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const listaConcatDirectoresTitulos = nuevaListaDirectores.concat(nuevaListaPeliculas);
console.log(listaConcatDirectoresTitulos);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listaDirectoresTitulos =[...nuevaListaDirectores, ...nuevaListaTitulos];
console.log(listaDirectoresTitulos)
