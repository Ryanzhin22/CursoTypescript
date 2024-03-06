"use strict";
function funcaoTest(valor1, valor2) {
    return valor2;
}
console.log(funcaoTest(10, "12"));
console.log(funcaoTest("10", 12));
console.log(funcaoTest(true, false));
class classeTeste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const class1 = new classeTeste(23);
const class2 = new classeTeste("Teste");
console.log(class1, class2);
