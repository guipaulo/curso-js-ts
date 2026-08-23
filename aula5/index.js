// Constantes devem ser sempre inicializadas
// Não é possível alterar o valor de uma constante

const nome = "João";
const idade = 25;

console.log('Nome: ', nome);
console.log('Idade: ', idade);

const primeiroNumero = 10;
const segundoNumero = 2;

const soma = primeiroNumero + segundoNumero;
const multiplicacao = primeiroNumero * segundoNumero;

let resultadoTriplicado = multiplicacao * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log('Soma: ', soma);
console.log('Multiplicação: ', multiplicacao);

console.log(resultadoTriplicado);

console.log(typeof (nome));
console.log(typeof (idade));

// Operação numérica:
let num1 = 3;
let num2 = 5;

console.log(num1 + num2);

// Concatenação de strings:
let num3 = 3;
let num4 = '5';

console.log(num3 + num4);
console.log(typeof (num1 + num2));
console.log(typeof (num3 + num4));