function soma(n1:number=1, n2:number=3):number{
    let soma = n1 + n2
    return soma
}

console.log(soma())

function novoUser(user:string, password:string, name?:string):void{
    let dados={user,password,name}
    console.log(dados)
}

novoUser("Ryanzhin22", "ryancv3")