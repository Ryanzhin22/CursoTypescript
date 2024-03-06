"use strict";
let [aa, bb, cc, dd] = ["Verde", "Azul", "Vermelho", "Amarelo"];
const obj = {
    cor1: "Verde",
    cor2: "Amarelo",
    cor3: "Azul",
    cor4: "Branco"
};
let { cor1, cor2, cor3, cor4 } = obj;
let [n1, n2, ...n3] = [10, 20];
console.log(n1, n2, n3);
