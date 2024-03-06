abstract class Conta{
    private readonly numero:number
    protected titular:string
    private saldo:number
    constructor(titular:string){
        this.numero = this.gerarNumeroConta()
        this.titular = titular
        this.saldo = 0
    }
    private gerarNumeroConta():number{
        return Math.floor(Math.random()*100000)+1
    }
    protected info():void{
        console.log(`Titular: ${this.titular}`)
        console.log(`Número.: ${this.numero}`)
    }
    get saldoConta():number{
        return this.saldo
    } 
    private set saldoConta(saldo:number){
        this.saldo = saldo
    }
    protected deposito(valor:number){
        if(valor < 0){
            console.log("Saldo inválido")
            return
        }
        this.saldoConta += valor
    }
    protected saque(valor:number){
        if(valor < 0){
            console.log("Saldo inválido")
            return
        }
        if(valor <= this.saldo){
            this.saldoConta -= valor
        }else{
            console.log("saldo insuficiente")
        }
    }
}

interface Tributos{
    baseTributo:number
    CalcularTributo(taxa:number):void
}

class ContaPF extends Conta implements Tributos{
    baseTributo=10
    cpf:number
    constructor(cpf:number, titular:string){
        super(titular)
        this.cpf = cpf
        console.log(`Conta PF Criada: ${this.titular}`)
    }
    CalcularTributo(taxa: number): number {
        return taxa*this.baseTributo
    }
    info(){
        console.log("-----------------------")
        console.log(`Tipo da Conta: PF`)
        super.info()
        console.log(`CPF....: ${this.cpf}`)
    }
    public deposito(valor: number):void {
        if(valor>1000){
            console.log("Valor muito alto para esse tipo de conta")
        }else{
            super.deposito(valor)
        }

    }
    public saque(valor:number){
        super.saque(valor)
    }
}

class ContaPJ extends Conta{
    cnpj:number
    constructor(cnpj:number, titular:string){
        super(titular)
        this.cnpj = cnpj
        console.log(`Conta PJ Criada: ${this.titular}`)
    }
    info(){
        console.log("-----------------------")
        console.log(`Tipo da Conta: PJ`)
        super.info()
        console.log(`CNPJ...: ${this.cnpj}`)
    }
    public deposito(valor: number): void {
        if(valor>10000){
            console.log("Valor muito alto para esse tipo de conta")
        }else{
            super.deposito(valor)
        }
    }
    public saque(valor:number){
        super.saque(valor)
    }
}

const c1 = new ContaPF(42322124204, "Ryan")
const c2 = new ContaPJ(14123167864, "Ryanzhin22")

c1.deposito(1000)
c2.deposito(5000)
console.log(c1.saldoConta)
console.log(c2.saldoConta)
c1.saque(500)
c2.saque(2500)
console.log(c1.saldoConta)
console.log(c2.saldoConta)
// console.log(c1.saldoConta)

// c1.info() // Pegando info da classe filha
// c2.info()