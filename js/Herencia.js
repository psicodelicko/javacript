class Persona{

    constructor(nombre,edad){
        this._nombre = nombre;
        this._edad = edad;
    }

    get nombre(){
        return this._nombre
    }

    get edad(){
        return this._edad;
    }

    info(){
        return `Me llamo ${this._nombre} y tengo ${this._edad} años`
    }

    dormir(){
        console.log("Estoy durmiendo")
    }

    comer(){
        console.log("Estoy comiendo")
    }

    despertar(){
        console.log("Ya estoy despierto")
    }
}   

const persona1 = new Persona('Diego',26);
console.log(persona1.info());
persona1.despertar();
persona1.comer();
persona1.dormir();