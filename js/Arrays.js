let nombres = ["juan","Diego","Gaspar"];
let apellidos = ["salinas","araya"];

// nombres.push(nombre); agrega un valor a la lista
// apellidos.push(apellido);
// nombres.shift(); elimina el primero

//Muestra arte del array
console.log(nombres.slice(2,3))
//Recorrer array
/*for(n of nombres){
    console.log(n);
}*/

//Recorrer array mostrando el indice y su valor
for(n in nombres){
    console.log(`${n} : ${nombres[n]}`);
}

console.log(nombres)
console.log(apellidos)