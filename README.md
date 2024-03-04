# CursoTypescript
Resumos das aulas do Curso de Typescript desenvolvido através do canal CFB Cursos - Em desenvolvimento <br>
Curso Typescript: https://www.youtube.com/watch?v=vcpLrIzIKjI&list=PLx4x_zx8csUhtPMrkiGvFJVE5LX8Qat5s&index=1&pp=iAQB <br>
Canal CFB Cursos: https://www.youtube.com/@cfbcursos

## Aula 01

### Ambiente

-> Necessário instalar:
-> Visual Studio Code
-> Node.js
-> Typescript (por npm)

## Aula 02

### COMPILAR TS

-> É possível compilar um arquivo Typescript usando o comando `tsc nomeArquivo.ts`
-> Também é possível usar o watch

## Aula 03

### CONFIGURANDO ARQUIVO

-> O comando `tsc --init` faz com que um arquivo Typescript de configurações seja inicializado na pasta do projeto
-> O `target` com o resultado de "ESNext" faz com que o typescript compile os arquivos na última versão do ECMAscript
-> O `rootDirs` com o resultado de ["./source"] faz com que todos os arquivos Typescript fiquem na pasta source
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

-> Valor NULO
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
