// é possivel tirar os numeros depois do "="
enum dias{
    domingo,
    segunda,
    terca,
    quarta,
    quinta,
    sexta,
    sabado
}

// console.log(dias.domingo)
// console.log(dias['domingo'])
console.log(dias[1])

const d=new Date()
// console.log(d.getDay())
// console.log(dias[d.getDay()])

enum cores{
    branco="#fff",
    preto="#000",
    vermelho="#F00",
    verde="#0F0",
    azul="#00F",
}

console.log(cores.branco)
console.log(cores['branco'])

enum tipoUsuario{
    USER=100,
    ADMIN=200,
    SUPER=300
}

console.log(tipoUsuario.USER)

let tp:tipoUsuario = 100
let tp2:tipoUsuario = tipoUsuario.USER

console.log(tp, tp2)
console.log(tipoUsuario[100])