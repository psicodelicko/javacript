//function normal
// function suma(num,num2){
//     return num+num2;
// }
let suma = (num,num2)=>num+num2;
console.log(suma(5,7));

let mayor = (num,num2) =>{
    if(num>num2){
        console.log(`El numero ${num} es mayor que ${num2}`)
    }else if(num2>num){
        console.log(`El numero ${num2} es mayor que  ${num}`)
    }else{
        console.log('Los numeros son iguales')
    }
}

console.log(mayor(1,2));