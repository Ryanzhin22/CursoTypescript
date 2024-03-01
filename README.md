# CursoTypescript
 Curso de Typescript em desenvolvimento através do canal CFB Cursos

## Aula 04

WATCH --------------------------

-> tsc --watch |  tsc -w <br>
-> Watch faz com que o compilador compile automaticamente todas alterações feitas no arquivo Typescript <br>

TYPE INFERENCE ----------------

-> Por ser uma linguagem fortemente tipada, é necessário tipar todos as variaveis criadas <br>
-> Existe o tipo ANY, mas não deve ser usado para tudo, se não o typescript perde o sentido <br> 
-> É possível definir uma variável de todos os tipos string, number, boolean, etc... <br>
-> Para fazer a tipagem basta colocar o tipo da variavel após sua definição Ex: "let nome:string", "const idade:number" <br>

## Aula 05

DEFINIR TIPO DE ARRAY -------------------

-> Para definir o tipo de um array basta colocar o seguinte formato `let array string:[] = []` 
-> O array pode ter mais de um tipo assim como as variáveis (Union Types)

UNION TYPES ---------------------------

-> Union types é quando você tem uma variável e precisa dar a ela mais de um tipo
-> Para fazer o Union Type em uma variável basta fazer `let nomeNumeros:string|number|boolean` ou `let nomeNumeros:any`
-> O Union type deve ser evitado e ser usado apenas em casos necessários, pois se não Typescript perde seu significado
