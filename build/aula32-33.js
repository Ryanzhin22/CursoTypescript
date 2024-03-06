"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor(100, 3);
        }
    }
    Veiculos.Carro = Carro;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        potencia;
        constructor(potencia) {
            this.potencia = potencia;
        }
        get getPotencia() {
            return this.potencia;
        }
    }
    class Motor {
        ligado;
        cilindros;
        potencia;
        constructor(potencia, cilindros, turbo) {
            this.potencia = potencia + (turbo ? turbo.getPotencia : 0);
            this.cilindros = cilindros;
            this.ligado = false;
        }
        set ligarMotor(ligado) {
            this.ligado = ligado;
        }
        get estadoMotor() {
            return this.ligado;
        }
        get qtdePotencia() {
            return this.potencia;
        }
        get qtdeCilindros() {
            return this.cilindros;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
