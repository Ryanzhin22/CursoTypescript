function aSoma(...valor:number[]){
    let soma:number=0;
    valor.forEach((val)=>{
        soma += val
    })
    return soma
}

console.log(aSoma(1,2,3,4,3,5,6))