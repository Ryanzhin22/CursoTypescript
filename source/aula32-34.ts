namespace Veiculos{

    enum Cores{"Preto", "Branco", "Vermelho", "Amarelo", "Azul", "Prata"}

    export abstract class Carro{
        private nome:string
        private motor:Motores.Motor
        private cor:String
        constructor(nome:string, motor:Motores.Motor, cor:Cores){
            this.nome = nome
            this.cor = Cores[cor]
            this.motor = motor
        }
        public ligar(){
            this.motor.ligarMotor = true
        }
        public desligar(){
            this.motor.ligarMotor = false
        }
        get minhaCor(){
            return this.cor
        }
        get meuNome(){
            return this.nome
        }
        get estouLigado(){
            return (this.motor.estadoMotor ? "Sim" : "Não")
        }
        get minhaPotencia(){
            return this.motor.qtdePotencia
        }
    }

    export class CarroEsportivo extends Carro{
        constructor(nome:string,cor:Cores){
            super(nome,new Motores.Motor(6,300, new Motores.Turbo(100)),cor)
        }
    }

    export class CarroPopular extends Carro{
        constructor(nome:string,cor:Cores){
            super(nome,new Motores.Motor(3,100),cor)
        }
    }
}

namespace Motores{
    
    export class Turbo{
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

const carro1 = new Veiculos.CarroEsportivo("Rapido", 2)
const carro2 = new Veiculos.CarroPopular("Nus", 0)


carro1.ligar()
console.log(`Nome: ${carro1.meuNome}, Cor: ${carro1.minhaCor}, Potência: ${carro1.minhaPotencia}, Ligado: ${carro1.estouLigado}`)
console.log(`Nome: ${carro2.meuNome}, Cor: ${carro2.minhaCor}, Potência: ${carro2.minhaPotencia}, Ligado: ${carro2.estouLigado}`)