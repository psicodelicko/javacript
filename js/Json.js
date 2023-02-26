const alumno = [
    {
        nombre : "Diego",
        nota : 6
    },
    {
        nombre : "Juan",
        nota : 6
        }
];
console.log(alumno);

let alum = {
    nombre : "gaspar",
    nota : 7

}
alumno.push(alum)
console.log(alumno);
for(let i =0; i<alumno.length;i++){
    console.log(`Nombre : ${alumno[i].nombre}`)
    console.log(`Nota : ${alumno[i].nota}`)
}
    