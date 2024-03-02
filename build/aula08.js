"use strict";
let dados = {
    nome: "Douglas",
    idade: 25,
    status: "Ativo",
    cumprimento: () => { console.log(`Olá, ${dados.nome}`); },
    info: (p) => { console.log(p); }
};
dados.nome = "José";
console.log(dados);
console.log(typeof (dados));
dados.cumprimento();
dados.info(dados.nome);
