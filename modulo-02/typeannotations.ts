/**
 * Type Annotation: let nomeDaVariavel: typeAnnotation = valor.
 */

//Variáveis:
let nome: string = 'Meu nome';
console.log(nome);

//Arrays:
let animais: string[] = ['Elefante', 'Cachorro', 'Gato', 'Panda'];
console.log(animais);

//Objeto:
let carro: {
    nome: string,
    ano: number,
    preco: number
}
carro = {nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 80.000};

//Functions:
function adicionarNumeros(num1: number, num2: number) {
    return num1 + num2;
}

console.log(adicionarNumeros(1, 2));


