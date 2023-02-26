class Vehiculo{
//Constructor
    constructor(marca,motor,color){
        this.marca = marca;
        this.motor = motor;
        this._color = color;
        this._velocidad = 0;
    }
    get velocidad(){
        return this._velocidad;
    }

    set cambiaColor(color){
        this._color = color;
    }

    get obtenerDatos(){
        return`El auto de marca ${this.marca} y es de color ${this._color}`
    }

    encender(){
        console.log("Encendiendo....")
        console.log("Bienvenido de nuevo")
    }

    arrancar(){
        for(let i =0; i<10; i++){
            this._velocidad =i
            console.log(`${this._velocidad} km/h`)
        }  
    }

    frenar(){
        console.log("Frenando....")
    }
}

const miAuto = new Vehiculo("Mercedez Beznz",2.0,"Negro")
console.log(miAuto.obtenerDatos)
console.log("Ingrese una opcion");
console.log("1. encender\n");
console.log("2. arrancar\n");
console.log("3. frenar\n");
console.log("4. Apagar\n");
opcion = parseInt(prompt("Ingrese una opcion"));
    switch (opcion){
        case 1:
            miAuto.encender();
            break;
        case 2:
            miAuto.arrancar();
            break;
        case 3:
           miAuto.frenar();
            break;
        case 4:
             break;
        default:
            console.log("Error ingrese una opcio valida");
            break

        }
