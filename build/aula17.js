"use strict";
class Computador {
    nome = "";
    ram = 0;
    cpu = 0;
    ligado = false;
}
const pc1 = new Computador;
pc1.nome = "Rapidex";
const pc2 = new Computador;
pc2.nome = "Gamer";
console.log(pc1.nome);
console.log(pc2.nome);
