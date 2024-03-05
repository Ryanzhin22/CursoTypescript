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
}
const pc1 = new Computador("Rapidex", 16, 2.4);
const pc2 = new Computador("Pirocao", 32, 4.4);
console.log(pc1);
console.log(pc2);
