# CursoTypescript
Resumos das aulas do Curso de Typescript desenvolvido através do canal CFB Cursos - Em desenvolvimento <br>
Curso Typescript: https://www.youtube.com/watch?v=vcpLrIzIKjI&list=PLx4x_zx8csUhtPMrkiGvFJVE5LX8Qat5s&index=1&pp=iAQB <br>
Canal CFB Cursos: https://www.youtube.com/@cfbcursos

## Aula 01

### Ambiente

-> Necessário instalar: <br>
-> Visual Studio Code <br>
-> Node.js <br>
-> Typescript (por npm) <br>

## Aula 02

### COMPILAR TS

-> É possível compilar um arquivo Typescript usando o comando `tsc nomeArquivo.ts` <br>
-> Também é possível usar o watch

## Aula 03

### CONFIGURANDO ARQUIVO

-> O comando `tsc --init` faz com que um arquivo Typescript de configurações seja inicializado na pasta do projeto <br>
-> O `target` com o resultado de "ESNext" faz com que o typescript compile os arquivos na última versão do ECMAscript <br>
-> O `rootDirs` com o resultado de ["./source"] faz com que todos os arquivos Typescript fiquem na pasta source <br>
-> O `outDir` com resultado de ["./build"] faz com que todos arquivos compilados em Javascript fiquem na pasta build

## Aula 04

### WATCH 

-> É possível usar o watch usando os comandos: `tsc --watch` |  `tsc -w` <br>
-> Watch faz com que o compilador compile automaticamente todas alterações feitas no arquivo Typescript <br>

### TYPE INFERENCE

-> Por ser uma linguagem fortemente tipada, é necessário tipar todos as variaveis criadas <br>
-> Existe o tipo ANY, mas não deve ser usado para tudo, se não o typescript perde o sentido <br> 
-> É possível definir uma variável de todos os tipos string, number, boolean, etc... <br>
-> Para fazer a tipagem basta colocar o tipo da variavel após sua definição Ex: `let nome:string`, `const idade:number` <br>

## Aula 05

### DEFINIR TIPO DE ARRAY

-> Para definir o tipo de um array basta colocar o seguinte formato `let array string:[] = []` <br>
-> O array pode ter mais de um tipo assim como as variáveis (Union Types)

### UNION TYPES

-> Union types é quando você tem uma variável e precisa dar a ela mais de um tipo <br>
-> Para fazer o Union Type em uma variável basta fazer `let nomeNumeros:string|number|boolean` ou `let nomeNumeros:any` <br>
-> O Union type deve ser evitado e ser usado apenas em casos necessários, pois se não Typescript perde seu significado 

## Aula 06

### ARRAY

-> Existem diversas formas de definir o tipo de um Array no Typescript: <br>
-> `let aNumeros:number[] = [20,30,40]` <br> 
-> `let bNumeros:Array<number|string>=[20,30,40]` <br>
-> `let cNumeros:(number|string)[]=[20,30,40,"Ryan"]`

### ARRAY READONLY 

-> É um tipo de array onde ele só pode ser lido <br>
-> Seus métodos se baseiam na leitura, métodos como "push, pop, shift, unshift" não podem ser chamados <br>
-> `let dNumeros:ReadonlyArray<number>=[100,200,300]` <br>
-> Não existe no Javascript

## Aula 07

### Tuplas 

-> Em TypeScript, uma tupla é uma estrutura de dados que permite armazenar uma coleção ordenada de elementos, onde cada elemento pode ser de um tipo diferente. <br>
-> Para definir uma sequência em um array, o seguinte comando é utilizado: `let coisas:[string,number,boolean]=["Corda", 10, true]` nesse caso, os 3 valores poderão ser adicionado somente na ordem "string,number e boolean" <br>
-> É possível adicionar mais elementos com o PUSH, POP ou `coisas[2]=false`, porém, ao puxar eles com o `console.log()` um erro será exibido <br>
-> `let coisas:readonly[string,number,boolean]=["Corda", 10, true]` ao fazer isso, a Tupla não poderá mais ser utilizada em métodos de modificação de array

## Aula 08

### Objeto

-> Se uma variável segue esse padrão `let dados={nome: "Douglas", idade: 25, status: "Ativo"}` o Typescript já entende que ele é um objeto, não sendo necessário nomear ele como um <br>
-> É possível fazer funções em objetos seguindo essa estrutura `cumprimento:()=>{console.log(`Olá, ${dados.nome}`)},` <br>
-> Se uma função tem um parâmetro, é necessário passar a tipagem dele também `info:(p:string)=>{console.log(p)}`
    
## Aula 09

### ENUM

-> Em TypeScript, enum é uma estrutura de dados que permite definir um conjunto de constantes nomeadas. <br>
-> Eles podem seguir uma estrutura automática onde os valores serão automaticamente incrementados `enum dias {domingo,segunda,terca,quarta,quinta,sexta,sabado}` cada elemento tem o respectivo valor: 0,1,2,3,4,5,6 sendo terça=2 <br>
-> console.log(dias.domingo) output: `0`, console.log(dias['domingo']) output: `0`, console.log(dias[0]) output: `domingo` <br>
-> Também é possível definir os valores da estrutura `enum tipoUsuario{USER=100, ADMIN=200, SUPER=300}` <br>
-> Utilizando enum com strings (de forma textual) só é possível retornar o valor passado nos enumeradores.

## Aula 10

### NULL

-> Valor NULO <br>
-> O nulo é UM TIPO, portanto uma variável pode receber a tipagem `null`. Exemplo: `let aNome:string|null`, porém, ela ainda precisa ser definida com o tipo nulo, não podendo ficar vazia: `aNome=null` <br>

### UNDEFINED

-> Valor Indefinido <br> 
-> Undefined não é um tipo que se pode colocar em uma variável <br>
-> Quando uma variável não receber valor, ela é UNDEFINED (valor não associado)

### UNKNOWN

-> Valor Desconhecido
-> Ao mostrar no console a variável `let aNome3:unknown` seu output é `undefined` <br>
-> Ao mostrar no console a variável `let aNome3:unknown=10` seu output é `10` <br>
-> Ao colocar o valor de nome em outra variável SEM TIPO, seu tipo automaticamente vai para unknown e seu output passa a ser `10` também <br>
-> Porém, ao colocar o valor de nome em outra variável COM TIPO, o typescript não permitirá. Por mais que ele tenha recebido um número, ele NÃO É DO TIPO NUMBER. <br>
-> Só pode ser atribuido em variáveis do tipo UNKNOWN e ANY <br>
-> Unknown pode receber qualquer valor

## Aula 11

### TYPE ASSERTION

-> Ao tentar associar uma variável originalmente do tipo unknown a outra com outro tipo, o Typescript não permitirá <br>
-> Por isso será necessário fazer um Type Assertion `varNumber = <number>varUnknown` <br>
-> Type Assertion funciona para o tipo UNKNOWN, portanto se precisar utilizar isso em variáveis que são seguem outras tipagens, será necessário primeiramente converter para UNKNOWN: `varNumber=<number><unknown>varString`

### TYPECAST 

-> O Typecast irá ser útil para a conversão de tipos <br>
-> Caso seja necessário ir de String para Number: `varNumber = Number.parseInt(varString)` <br>
-> Caso seja necessário ir de Number para String: `varString = varNumber.toString()`

## Aula 12

### FUNÇÕES VOID

-> `function logar(user:string,password:string):void{ // conteúdo }` <br>
-> A palavra-chave `void` é usada para indicar que uma função não retorna nenhum valor, ou seja, ela pode fazer uma operação mas o resultado não pode ser acomplado em nenhuma variável. <br>

### FUNÇÕES COM TIPO

-> `function soma2(n1:number, n2:number):number{ // conteúdo + return em NUMBER }` <br>
-> Da mesma forma que o `void` não retorna nada, o `number` irá retornar um valor numérico capaz de ser associado a uma variável <br>

### CONVERSÃO DE VALOR COM RESULTADO DE FUNÇÃO

-> Ao fazer uma função (exemplo numérica) e colocar o valor em uma variável, é possível mudar o tipo da variável da seguinte forma: `let somaString:string = soma(8,2).toString()`

## Aula 13

### PARÂMETROS PADRÕES

-> É possível fazer um parâmetro padrão para um função, caso não seja passada nada para o mesmo <br>
-> `function soma(n1:number=1, n2:number=3):number{ //conteudo }` <br>
-> No caso acima, a variável n1 receberá por padrão 1 e a n2 receberá 3, caso nenhum valor for passado

### PARÂMETROS OPCIONAIS

-> Também é possível definir um parâmetro opcional. Caso o parâmetro não seja preenchido, o sistema retornará o mesmo como UNDEFINED <br>
-> `function novoUser(user:string, password:string, name?:string):void{ //conteudo }` <br>
-> Se caso `name` não for passado, seu valor padrão será UNDEFINED

## Aula 14

### ARROW FUNCTION

-> As arrow function não são lidas primeiro no código como as functions padrões do Javascript, e sua sintaxe também é diferente <br>
-> Assim como no Javascript é possível utilizar de funções anônimas no seu código <br>
-> Elas tem a seguinte estrutura: `const teste = (txt:string):void => { //conteudo }` 

## Aula 15

### PARÂMETRO REST

-> Para utilizar o Rest no Typescript será necessário definir seu tipo e que ele é um ARRAY <br>
-> Essa é a estrutura de uma função com REST `function Soma(...valor:number[]){ //Conteudo}` <br>
-> O REST serve para passar uma quantidade ilimitada de parâmetros para uma função

## Aula 16

### CLASSES

-> Assim como no Javascript podemos criar classes
-> Para criar uma classe basta fazer assim: `class Computador{ nome:string, ram:number, cpu:number, ligado:boolean }`
-> Para iniciar uma classe basta fazer: `const pc1 = new Computador`
-> Para definir um parâmetro da classe: `pc.name="Gamer"`

## Aula 17

### FUNÇÃO CONSTRUTORA

-> É a função chamada no ato da instanciação da classe <br>
-> Para chamar o constructor basta fazer dentro da class: `constructor(nome:number){this.nome=nome}` <br>
-> O `this` faz referência a classe onde a propriedade está <br>
-> Agora para iniciar uma classe nova passando o nome da mesma será necessário: `const pc1 = new Computador("Gamer")`

## Aula 18

### MÉTODOS

-> Ao invés de ficar digitando `console.log()` para cada elemento da classe construida é muito mais fácil criar um método `info(){console.log('nome: this.nome'}` e colocar todas as informações necessárias lá dentro  <br>
-> É perigoso deixar as informações todas abertas, pois qualquer um pode ir e modificar as classes instanciadas, portanto é necessário proteger e modificá-las através de métodos

## Aula 19

### MODIFICADORES DE ACESSO

-> Público: um método ou propriedade com public pode ser acessado em qualquer lugar, dentro ou fora da classe, ou pelos filhos da classe.  <br>
- `public nome:string`  <br>
-> Privado: quando definido como privado, o método ou propriedade não pode mais ser acessado fora da classe. Fazendo com que o programa fique muito mais controlável, definindo valores válidos para cada propriedade. <br>
- `private ram:number` <br>
-> Protected: Não pode ser alterada fora da classe, mas pode ser alterado por filhas da classe <br>
- `protected ligado:boolean`

## Aula 20

### HERANÇA - EXTENDS

-> Para uma classe herdar a outra é necessária a seguinte estrutura: Criação da Superclass (estrutura padrão), criação da classe filha: `class ClasseFilha extends SuperClasse{}` <br>
-> A "ClasseFilha" tem todos os métodos e propriedades do pai sem precisar digitar nada nas mesma, podendo ser instanciada passando parâmetros que só seriam possíveis passar na superclass

## Aula 21

### HERANÇA - SUPER

-> Ao não usar um construtor na classe filho, ele automaticamente pega o construtor da classe pai <br>
-> A classe `super()` sempre faz referência a classe pai da atual <br>
-> É necessário passar os parâmetros da classe pai no `super(param1, param2)` da classe filha  <br>
-> Usamos o constructor da classe filha para passar novos parâmetros e utilizar os antigos da classe pai

## Aula 22

### HERANÇA - PROTECTED

-> Para acessar um parâmetro da classe pai na classe filha, protegendo o mesmo de ser modificado externamente, é necessário usar o PROTECTED no que será utilizado.

## Aula 23 e 24

### HERANÇA - PROTECTED PT2

-> Para usar um método da classe pai na classe filha, fazendo modificações no mesmo, basta chamá-lo pelo super: `super.info()` e logo em seguida fazer as moficações necessárias: `console.log(cpf...)`

## Aula 25

### GETTER E SETTER

-> Getter: Vai PEGAR um elemento (GET) <br>
-> Setter: Vai SETTAR um elemento, modificando seu valor (SET) <br>
-> Ao aplicar `get` ou `set` em um método, não é necessário usá-lo como função, pois ele vira uma propriedade <br>
-> É possível modificar o acesso de um get ou set (Private, public ou protected)

## Aula 26 

### CLASSES ABSTRATAS

-> Uma classe abstrata não pode ser instanciada, pode apenas ser herdada e servindo como base para outras classes <br>
-> Não é possível criar um objeto com uma classe abstrata: Classe: `abstract class Conta{//conteudo}` Instanciar: `const c3 = new Conta("Nome")` = Erro <br>
-> Também é possível aplicar `readonly` as propriedades onde a mesma não poderá ser modificada nem mesmo dentro da classe pai.

## Aula 27

### OBJETOS LITERAIS

-> Para criar um objeto literal basta seguir a seguinte estrutura: `let curso1:{titulo:string, desc:string}` <br>
-> Para preencher o objeto literal faça o seguinte: `curso1={titulo:"Typescript", desc:"Curso de Typescript"}` <br>
-> Porém, para criar mais "cursos" será necessário repetir essas mesmas estruturas várias vezes, e isso poderia ser facilitado com a criação de uma Interface

### INTERFACE

-> Parecido com um objeto litaral para criar uma interface basta fazer: `interface curso{titulo:string, desc:string}` <br>
-> Para criar vários cursos de forma mais fácil é só fazer: `let curso1:curso` e preencher com os valores: `curso1={titulo: "Typescript",desc: "Curso de Typescript",aulas: 25,maxAlunos: 10
}` podendo ser feito quantas vezes forem necessárias <br>
-> Também é possível adicionar uma propriedade opcional, da mesma forma feita anteriormente `interface curso{titulo:string, desc?:string}`, deixando a descrição como um valor que pode ou não ser preenchido.

## Aula 28

### INTERFACE PT2

-> É possível criar funções em interfaces <br>
-> É possível usar o `extends` em interfaces também, criando interfaces que herdam a base <br>
-> É possível aplicar um INTERFACE à uma CLASSE da seguinte maneira `Conta implements Tributos{}` <br>
-> A interface passa a ser uma regra do que deve ser adicionado na classe, pois caso haja coisas que estejam dentro da interface não estejam dentro da classe, irá dar erro <br>
-> A interface é uma "assinatura" da classe, obrigando a mesma a passar tudo que for necessário
