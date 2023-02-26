console.log("Ingrese una opcion");
console.log("1. Cargar\n");
console.log("2. Impremir\n");
console.log("3. Salir\n");
opcion = parseInt(prompt("Ingrese una opcion"));
switch (opcion){
    case 1:
        console.log("Cargando...");
        break;
    case 2:
        console.log("Mensaje imprimiendo");
        break;
    case 3:
        console.log("Saliendo");
        break;
    default:
        console.log("Error ingrese una opcio valida");
        break

}