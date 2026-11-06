
class CuentaBancaria {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    // Método público para consultar el saldo
    getSaldo() {
        return this.#saldo;
    }
}

class Cajero {
    verSaldo(cuenta) {
        console.log(cuenta.getSaldo());
    }
}

const miCuenta = new CuentaBancaria(1000);
const cajero = new Cajero();

cajero.verSaldo(miCuenta);
