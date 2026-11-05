class CuentaBancaria {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;

    }
     
}

class Cajero {
    verSaldo(cuenta)  {
        console.log(cuenta.#saldo);
    }
}

const miCuenta = new CuentaBancaria(1000);
const cajero = new Cajero();
cajero.verSaldo(miCuenta);