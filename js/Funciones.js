//funcion sin parametro y sin retorno

function mostrar(){
    alert("Hola desde la funcion")
}

function numMayor(val1 = prompt("Ingrese un numero"),val2= prompt("Ingrese otro numero")){
    let mayor = 0;
    if(val1>val2){
        mayor= val1
    }else if(val2>val1){
        mayor= val2
    }else{
        mayor="Ambos numeros son iguales"
    }
    console.log(mayor)
    return mayor
}
