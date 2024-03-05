let aValor: number;
let bValor: string;
let cValor: unknown;

// cValor=10;
// aValor = <number>cValor

// console.log(cValor)
// console.log(typeof(cValor))

// bValor="String"
// aValor=<number><unknown>bValor

// TYPECAST

aValor = 10
bValor = "10"

aValor = Number.parseInt(bValor)

console.log(aValor)
console.log(typeof(aValor))

aValor = 10
bValor = '10'

bValor = aValor.toString()

console.log(bValor)
console.log(typeof(bValor))