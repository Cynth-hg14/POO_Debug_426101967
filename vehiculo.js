class Vehiculo {
    constructor(marca) {
        this.marca = marca;
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo) {
        super(marca);
        this.modelo = modelo;
    }

    detalles() {
        console.log(`Vehículo marca: ${this.marca}, modelo: ${this.modelo}`);
    }
}

const miCoche = new Coche("Toyota", "Corolla");
miCoche.detalles();
