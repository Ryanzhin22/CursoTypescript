interface curso{
    titulo:string,
    desc?:string,
    aulas:number,
    maxAlunos:number,
    iniciarCurso?(teste:string):void
}

interface cursoProgramacao extends curso{
    aulas:number,
    maxAlunos:number,
}

interface cursoArtes extends curso{
    aulas:number,
    maxAlunos:number,
}

let curso1:cursoProgramacao
let curso2:cursoArtes

curso1={titulo: "Typescript",desc: "Curso de Typescript",aulas: 25,maxAlunos: 10
}

curso2={titulo: "Java", aulas: 20, maxAlunos: 5}

console.log(curso1, curso2)