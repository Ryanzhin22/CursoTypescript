function funcaoTest<T,U>(valor1:T, valor2:U):U{
    return valor2
}

console.log(funcaoTest<number,string>(10,"12"))
console.log(funcaoTest<string,number>("10", 12))
console.log(funcaoTest<boolean,boolean>(true, false))

class classeTeste<T>{
    public valor:T
    constructor(valor:T){
        this.valor = valor
    }
}

const class1 = new classeTeste<number>(23)
const class2 = new classeTeste<string>("Teste")

console.log(class1, class2)