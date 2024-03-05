"use strict";
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
}
class ContaPF extends Conta {
}
class ContaPJ extends Conta {
}
const c1 = new ContaPF(123458, "Ryan");
const c2 = new ContaPJ(113211, "Ryanzhin22");
console.log(c1);
console.log(c2);
