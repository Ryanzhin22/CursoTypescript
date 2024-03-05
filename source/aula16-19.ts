class Computador{
    private id:number
    public nome:string=""
    private ram:number=0
    private cpu:number=0
    protected ligado:boolean=false

    constructor(nome:string,ram:number,cpu:number){
        this.nome=nome
        this.ram=ram
        this.cpu=cpu
        this.ligado = false
        this.id = 0
    }

    info():void{
        console.log(`Nome..: ${this.nome}`)
        console.log(`Ram...: ${this.ram}`)
        console.log(`CPU...: ${this.cpu}`)
        console.log(`Ligado: ${this.ligado ? "Ligado" : "Desligado"}`)
        console.log("----------------------")
    }

    ligarComputador():void{
         this.ligado = true
    }

    desligarComputador():void{
        this.ligado = false
    }

    upgradeRam(qtde:number):void{
        if(qtde > 0 && qtde <= 256){
            this.ram = qtde
        } else{
            console.log(`Quantidade: ${qtde}, não é permitida para memória ram`)
        }
    }

}

const pc1 = new Computador("Rapidex",16,2.4)
const pc2 = new Computador("Pirocao",32,4.4)

pc1.ligarComputador()
pc2.ligarComputador()

pc1.upgradeRam(128)

pc1.info()
pc2.info()