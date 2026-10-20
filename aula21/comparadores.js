/**
 * > - Maior que
 * < - Menor que
 * >= - Maior ou igual a
 * <= - Menor ou igual a
 * == igualdade (valor)
 * != diferente
 * === igualdade restrita (valor e tipo)
 * !== diferença restrita
 */

const expressao = 10 >= 5; // TRUE

console.log(expressao);

const expressao2 = 10 >= 11 // FALSE

console.log(expressao2);

// Comparação com variáveis

const val1 = 10;
const val2 = 5;

console.log(10 < 5); // FALSE
console.log(10 > 5); // TRUE

const num1 = 10;
const num2 = '10';

console.log(num1 == num2); // TRUE
console.log(num1 === num2); // FALSE


const num3 = 5;
const num4 = '5';

console.log(num3 != num4); // FALSE
console.log(num3 !== num4); // TRUE