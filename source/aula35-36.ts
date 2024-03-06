// //let aa,bb,cc,dd
// let av=[10,20,30,40]

// // Forma sem usar desestruturação

// // aa=av[0]
// // bb=av[1]
// // cc=av[2]
// // dd=av[3]

// let [aa,bb,cc,dd] = av

// console.log(aa,bb,cc,dd)


let [aa,bb,cc,dd] = ["Verde", "Azul", "Vermelho", "Amarelo"]


const obj = {
    cor1: "Verde",
    cor2: "Amarelo",
    cor3: "Azul",
    cor4: "Branco"
}

let {cor1,cor2,cor3,cor4} = obj

// ------------------------- 


// Exemplo 1
let [n1,n2,...n3] = [10,20,30,40]

// Exemplo 2
const letras = () => {
    return ["a", "b", "c", "d"]
}

let [l1,l2,l3,l4] = letras()

// Exemplo 3
let texto = "Curso de Typescript"
let [...t] = texto.split(" ")