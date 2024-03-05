"use strict";
function soma(n1 = 1, n2 = 3) {
    let soma = n1 + n2;
    return soma;
}
console.log(soma());
function novoUser(user, password, name) {
    let dados = { user, password, name };
    console.log(dados);
}
novoUser("Ryanzhin22", "ryancv3");
