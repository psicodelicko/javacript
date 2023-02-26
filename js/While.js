function enviar(){
    // alert("hola")
    let tabla = parseInt(prompt("Que tabla quieres que calcule"));
document.write(`empezamos con la tabla del ${tabla} <br/>`);
let i = 1;
while(i<=10){
    let resultado = tabla*i;
    document.write(`${tabla}*${i} = ${resultado}<br/>`)
    i++
}
//Evalua la condicion al final, ingresa al menos la primera vez al ciclo
// do{
//     let resultado = tabla*i;
//     document.write(`${tabla}*${i} = ${resultado}<br/>`)
//     i++;
// }while(i<=10);
}