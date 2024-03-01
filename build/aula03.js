"use strict";
class Curso {
    canal = null;
    curso = null;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
const newCurso = new Curso("CFB", "Typescript");
console.log(newCurso);
console.log(newCurso.canal);
console.log(newCurso.curso);
