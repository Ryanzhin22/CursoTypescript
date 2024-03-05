"use strict";
class Conta {
    numero;
    titular;
    saldo;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldo = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número.: ${this.numero}`);
    }
    saldoConta() {
        return this.saldo;
    }
    deposito(valor) {
        this.saldo += valor;
    }
    saque(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log("saldo insuficiente");
        }
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF Criada: ${this.titular}`);
    }
    info() {
        console.log("-----------------------");
        console.log(`Tipo da Conta: PF`);
        super.info();
        console.log(`CPF....: ${this.cpf}`);
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log("Valor muito alto para esse tipo de conta");
        }
        else {
            super.deposito(valor);
            this.saldo += valor;
        }
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ Criada: ${this.titular}`);
    }
    info() {
        console.log("-----------------------");
        console.log(`Tipo da Conta: PJ`);
        super.info();
        console.log(`CNPJ...: ${this.cnpj}`);
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log("Valor muito alto para esse tipo de conta");
        }
        else {
            super.deposito(valor);
            this.saldo += valor;
        }
    }
}
const c1 = new ContaPF(42322124204, "Ryan");
const c2 = new ContaPJ(14123167864, "Ryanzhin22");
c1.deposito(100);
c1.deposito(100);
c1.deposito(100);
c2.deposito(2000);
console.log(c1.saldoConta());
console.log(c2.saldoConta());
