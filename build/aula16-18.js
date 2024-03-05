"use strict";
class Computador {
    nome = "";
    ram = 0;
    cpu = 0;
    ligado = false;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
    info() {
        console.log(`Nome..: ${this.nome}`);
        console.log(`Ram...: ${this.ram}`);
        console.log(`CPU...: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? "Ligado" : "Desligado"}`);
        console.log("----------------------");
    }
    ligarComputador() {
        this.ligado = true;
    }
    desligarComputador() {
        this.ligado = false;
    }
}
const pc1 = new Computador("Rapidex", 16, 2.4);
const pc2 = new Computador("Pirocao", 32, 4.4);
pc1.ligarComputador();
pc2.ligarComputador();
pc2.desligarComputador();
pc1.info();
pc2.info();
