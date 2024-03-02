//let coisas:readonly[string,number,boolean]=["Corda", 10, true] - Métodos de modificação não existem mais e vira somente leitura
let coisas:[string,number,boolean]=["Corda", 10, true]
coisas.push("Chave", "4", "true") // é adicionado mas não posso referenciar ele pelo console.log()
coisas[2]=false

console.log(coisas)
console.log(coisas[2])

