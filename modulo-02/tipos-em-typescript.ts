/**
 * Tipos em TypeScript:
 */

//boolean:

//O "Boolean" é diferente do "boolean". É recomendado sempre utilizarmos o "boolean".

//Ex 01:
let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;

console.log(tarefaConcluida);
console.log(tarefaPendente);

//Ex 02:
let concluido: boolean = true;

if(concluido){
    console.log("A tarefa foi concluída com sucesso!");
}else {
    console.log("A tarefa está pendente!");
}

//number e bigint:
let num1: number = 100.0;
let num2: number = 0x78CF;
let num3: number = 0o577;
let num4: number = 0b110001;

let big1: bigint = 900145879597845649n; //Precisamos alterar o "ts.config.json" para utilizar o ESNEXT para utilizarmos o bigint.

console.log(typeof(num1)) //Descobrindo o tipo de um determinado valor.
console.log(typeof(num2))
console.log(typeof(num3))
console.log(typeof(num4))

//string:

//É sempre recomendado utilizarmos aspas simples nas strings em JavaScript.
let comida: string = 'Macarrão';
let nome2: string = 'Kimmy';

console.log(`O meu nome é ${nome2} e eu gosto de ${comida}.`);
console.log(`O meu nome é ${nome2.toUpperCase()} e eu gosto de ${comida.toUpperCase()}.`);

//array

let frutas: string[] = ['Abacaxi', 'Maçã', 'Laranja', 'Mamão']; //Forma 01 para declarar arrays.
let frutas2: Array<string> = ['Abacaxi', 'Maçã', 'Laranja', 'Mamão']; //Forma 02 para declarar arrays.

console.log(frutas[0]);
console.log(frutas2[0]);

//Adicionando um elemento no array com o "push":
frutas2.push('Melão');
console.log(frutas2);

//Tamanho de um array:
console.log(frutas2.length);

//Spread operator:
let listaNumeros: Array<number> = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10]; //Inserirá a primeira variável na segunda. É como se fosse um "concat()" no Java.

//Arrays com laços de iteração:
let linguagensArrays: Array<string> = ['Java', 'JavaScript', 'Python', 'PHP'];

function funcaoLinguagens(linguagens: string[]){
    for (let index = 0; index < linguagens.length; index++){
        console.log(linguagensArrays[index]);
    }
}

funcaoLinguagens(linguagensArrays);

//tuple:

//As tuplas permitem o armazenamento de vários campos de diferentes tipos.

//Tuplas simples:
let pessoa: [string, string, number];
pessoa = ['Testando da Silva', 'Mecânico', 100];
console.log(pessoa);

//Acessando o valor em uma tupla:
let pessoa2: [string, string, number];
pessoa2 = ['Testando da Silva', 'Mecânico', 100];
console.log(pessoa2[0]); //Acessando o primeiro índice da tupla.

//Utilizando tuplas com labels:
let pessoa3: [nome: string, profissao:string, idade:number];
pessoa3 = ['Testando da Silva', 'Mecânico', 100];
console.log();


//Tupla homogênea (todos os valores do mesmo tipo):
let listaFrutas: [string, ...string[]] = ['Maçã', 'Banana', 'Melancia']; //Podemos atribuir o primeiro valor da tupla, e, após isso, inserir um array daquele valor, assim, não precisamos declarar, por exemplo, 50 vezes o tipo "string".
console.log(...listaFrutas); //Como estamos utilizando o "spread operator" na declaração da tupla, é recomendada a utilização do "spread operator" na exibição dessa tupla.

//Tupla heterogênea (valores de tipos diferentes):
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);

//Funções com tuplas:
function listarPessoas(nomes: string[], idades: number[]){
    return [...nomes, idades];
}

let resultado = listarPessoas(['Testando', 'Testando2'], [10, 11]);
console.log(resultado);

//Labeled Tuples com Spread Operator em uma função:

//Isso é, basicamente, quando criamos dois métodos construtores em uma determinada classe, assim, podemos escolher qual método construtor será utilizado.
type Nome = | [primeiroNome: string, sobrenome: string]
            | [primeiroNome: string, nomeMeio: string, sobrenome: string];

function criarPessoa(...nome: Nome){
    return [...nome];
}

console.log(criarPessoa('Testando', 'Testando', 'Testando'));


//enums:

//enums numéricos:
enum Idioma {
    PORTUGUES,
    ESPANHOL,
    INGLES,
    FRANCES
}

console.log(Idioma);

//enums do tipo string: (Não é muito recomendado utilizarmos esse enum).
enum Dia {
    SEGUNDA = 'SEG',
    TERCA = 'TER',
    QUARTA = 'QUA',
    QUINTA = 'QUI',
    SEXTA = 'SEX',
    SABADO = 'SABADO',
    DOMINGO = 'DOMINGO'
}

console.log(Dia);

//Acessando o valor de um enum:

console.log(Idioma.FRANCES); //Como é um enum numérico, será retornado o número desse enum.
console.log(Dia.DOMINGO); //Como é um enum de string, será retornado o nome do enum.