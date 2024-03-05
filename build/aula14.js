"use strict";
const teste = (txt) => {
    console.log(txt);
};
const Soma = (n1) => {
    let soma = 0;
    n1.forEach((num) => {
        soma += num;
    });
    return soma;
};
teste("Cfbcursos");
teste("Youtube");
console.log(Soma([1, 3, 5, 6]));
