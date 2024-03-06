"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Vermelho"] = 2] = "Vermelho";
        Cores[Cores["Amarelo"] = 3] = "Amarelo";
        Cores[Cores["Azul"] = 4] = "Azul";
        Cores[Cores["Prata"] = 5] = "Prata";
    })(Cores || (Cores = {}));
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.cor = Cores[cor];
            this.motor = motor;
        }
        ligar() {
            this.motor.ligarMotor = true;
        }
        desligar() {
            this.motor.ligarMotor = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get meuNome() {
            return this.nome;
        }
        get estouLigado() {
            return (this.motor.estadoMotor ? "Sim" : "Não");
        }
        get minhaPotencia() {
            return this.motor.qtdePotencia;
        }
    }
    Veiculos.Carro = Carro;
    class CarroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), cor);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(3, 100), cor);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
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
    Motores.Turbo = Turbo;
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
const carro1 = new Veiculos.CarroEsportivo("Rapido", 2);
const carro2 = new Veiculos.CarroPopular("Nus", 0);
carro1.ligar();
console.log(`Nome: ${carro1.meuNome}, Cor: ${carro1.minhaCor}, Potência: ${carro1.minhaPotencia}, Ligado: ${carro1.estouLigado}`);
console.log(`Nome: ${carro2.meuNome}, Cor: ${carro2.minhaCor}, Potência: ${carro2.minhaPotencia}, Ligado: ${carro2.estouLigado}`);
