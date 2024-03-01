# CursoTypescript
 Curso de Typescript em desenvolvimento através do canal CFB Cursos

## Aula 04

### WATCH 

-> tsc --watch |  tsc -w <br>
-> Watch faz com que o compilador compile automaticamente todas alterações feitas no arquivo Typescript <br>

### TYPE INFERENCE

-> Por ser uma linguagem fortemente tipada, é necessário tipar todos as variaveis criadas <br>
-> Existe o tipo ANY, mas não deve ser usado para tudo, se não o typescript perde o sentido <br> 
-> É possível definir uma variável de todos os tipos string, number, boolean, etc... <br>
-> Para fazer a tipagem basta colocar o tipo da variavel após sua definição Ex: "let nome:string", "const idade:number" <br>

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

-> Para definir uma sequência em um array, o seguinte comando é utilizado: `let coisas:[string,number,boolean]=["Corda", 10, true]` nesse caso, os 3 valores poderão ser adicionado somente na ordem "string,number e boolean" <br>
-> É possível adicionar mais elementos com o PUSH, POP ou `coisas[2]=false`, porém, ao puxar eles com o `console.log()` um erro será exibido <br>
-> `let coisas:readonly[string,number,boolean]=["Corda", 10, true]` ao fazer isso, a Tupla não poderá mais ser utilizada em métodos de modificação de array

