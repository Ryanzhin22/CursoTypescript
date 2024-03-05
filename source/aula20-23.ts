class Conta{
    protected numero:number
    protected titular:string
    protected saldo:number
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
    public saldoConta():number{
        return this.saldo
    } 
    protected deposito(valor:number){
        this.saldo += valor
    }
    protected saque(valor:number){
        if(valor <= this.saldo){
            this.saldo -= valor
        }else{
            console.log("saldo insuficiente")
        }
    }
}

class ContaPF extends Conta{
    cpf:number
    constructor(cpf:number, titular:string){
        super(titular)
        this.cpf = cpf
        console.log(`Conta PF Criada: ${this.titular}`)
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
            this.saldo += valor
        }

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
            this.saldo += valor
        }

    }
}

const c1 = new ContaPF(42322124204, "Ryan")
const c2 = new ContaPJ(14123167864, "Ryanzhin22")

c1.deposito(100)
c1.deposito(100)
c1.deposito(100)
c2.deposito(2000)
console.log(c1.saldoConta())
console.log(c2.saldoConta())

// c1.info() // Pegando info da classe filha
// c2.info()