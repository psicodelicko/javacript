class Trabajador extends Persona{
    constructor(nombre,edad){
        super(nombre,edad);
        this.trabaja = "Si"
    }

    info(){
        return `Me llamo ${this._nombre} y tengo ${this._edad} años y ${this.trabaja} trabaja`
    }
    trabajar(){
        return `Me llamo ${this._nombre} y ${this.trabaja} tengo que trabajar`
    }
}

const trabajador = new Trabajador("Diego",26)
console.log(trabajador.info())