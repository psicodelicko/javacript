function tabla(){
    let tabla = parseInt(prompt("Que tabla quieres que calcule"));
    document.write(`empezamos con la tabla del ${tabla} <br/>`);
    for(let i = 1; i<=10; i++){
        let resultado = tabla*i;
        // if(i==10){
        //     break
        // }
        document.write(`${tabla}*${i} = ${resultado}<br/>`)
    }
}