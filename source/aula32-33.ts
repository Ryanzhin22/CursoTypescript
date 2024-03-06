namespace Veiculos{

    export abstract class Carro{
        nome:string
        motor:Motores.Motor
        constructor(nome:string){
            this.nome = nome
            this.motor = new Motores.Motor(100,3)
        }
    }
}

namespace Motores{
    
    class Turbo{
        private potencia:number
        constructor(potencia:number){
            this.potencia = potencia
        }
        get getPotencia(){
            return this.potencia
        }
    }

    export class Motor{
        private ligado:boolean
        private cilindros: number
        private potencia:number
        constructor(potencia:number, cilindros:number,turbo?:Turbo) {
            this.potencia = potencia + (turbo ? turbo.getPotencia : 0)
            this.cilindros = cilindros
            this.ligado = false
        }
        set ligarMotor(ligado:boolean){
            this.ligado=ligado
        }
        get estadoMotor(){
            return this.ligado
        }
        get qtdePotencia(){
            return this.potencia
        }
        get qtdeCilindros(){
            return this.cilindros
        }
    }
}
