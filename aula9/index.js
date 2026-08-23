// Operadores aritméticos (+ - * /)
/**
 * + Adição e Concatenação
 * - Subtração
 * * Multiplicação
 * / Divisão
 * ** Exponenciação
 * % Resto da divisão
 */

const num1 = 10;
const num2 = 5;
const num3 = 2;
const num4 = '3';

const soma = num1 + num2;
console.log(`Soma: ${soma}`);

console.log(`Concatenação: ${num1 + num4}`);
console.log(`Exponenciação: ${num1 ** num3}`);
console.log(`Resto da divisão: ${num1 % num3}`);

// Podemos multiplicar varios numeros em uma única operação
const multiplicacao = num1 * num2 * num3;
console.log(`Multiplicação: ${multiplicacao}`);

// Podemos também fazer várias operações em uma única expressão
const resultado = (num1 + num2) * num3;
console.log(`Resultado: ${resultado}`);

/*Precedência de operadores*/
// 1. ()
// 2. ** (exponenciação)
// 3. *, /, % (multiplicação, divisão, resto)
// 4. +, - (adição, subtração)

// Operador de incremento (++)
let contador = 1;
console.log(`Contador: ${contador}`);
contador++;
console.log(`Contador: ${contador}`);
contador++;
console.log(`Contador: ${contador}`);

++contador;
console.log(`Contador: ${contador}`);
++contador;
console.log(`Contador: ${contador}`);

// Operador de decremento (--)
let contador2 = 10;
console.log(`Contador2: ${contador2}`);
contador2--;
console.log(`Contador2: ${contador2}`);
contador2--;
console.log(`Contador2: ${contador2}`);

--contador2;
console.log(`Contador2: ${contador2}`);
--contador2;
console.log(`Contador2: ${contador2}`);

// Quando se usa o operador de incremento ou decremento antes da variável, o valor é atualizado ANTES de ser usado na expressão.
// Quando se usa o operador de incremento ou decremento depois da variável, o valor é atualizado DEPOIS de ser usado na expressão.

let contador3 = 1;
console.log(contador3++); // 1
console.log(contador3); // 2

let contador4 = 1;
console.log(++contador4); // 2
console.log(contador4); // 2

let contador5 = 5;
console.log(contador5--); // 5
console.log(contador5); // 4

let contador6 = 5;
console.log(--contador6); // 4
console.log(contador6); // 4

// Incrementar ou decrementar mais de uma unidade:
let contador7 = 1;
contador7 = contador7 + 2;
console.log(`Contador7: ${contador7}`);
contador7 += 2;
console.log(`Contador7: ${contador7}`);

let passo = 2;
contador7 += passo;
console.log(`Contador7 com passo ${passo}: ${contador7}`);

contador7 -= passo;
console.log(`Contador7 com passo ${passo}: ${contador7}`);