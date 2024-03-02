let aNumeros:number[] = [20,30,40]
let bNumeros:Array<number|string>=[20,30,40]
let cNumeros:(number|string)[]=[20,30,40,"Ryan"]

aNumeros.push(50)
aNumeros.unshift(10)

aNumeros.pop()
aNumeros.shift()

console.log(aNumeros)

let dNumeros:ReadonlyArray<number>=[100,200,300]
// dNumeros.push - NÃO EXISTE