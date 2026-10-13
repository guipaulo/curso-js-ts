/**
 * Primitivos (imutáveis) - strings, number, boolean, null, undefined (valores copiados)
 * Referência (mutável) - arrays, object, function (passados por referência)
 * Valores primitivos são copiados (independentes), mas valores por referência são compartilhados (dependentes)
 */

let nome = 'Luiz';
nome = 'Otávio';
console.log(nome);
console.log(nome[0]); // O

let a = [1, 2, 3];
let b = a; // Atribuição por referência (imutável)
console.log(a, b);
a.push(4);
console.log(a);
console.log('--- PASSANDO VALORES POR REFERÊNCIA ---');
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda'
}

const pessoa2 = pessoa; // Atribuição por referência
console.log(pessoa, pessoa2);
pessoa.nome = 'João';
console.log(pessoa, pessoa2); // A alteração em pessoa reflete em pessoa2

console.log('--- PASSANDO VALORES POR VALOR ---');

const pessoa3 = {...pessoa}; // Atribuição por valor
pessoa3.nome = 'Luiza';
console.log(pessoa, pessoa2, pessoa3); // A alteração em pessoa3 não reflete em pessoa e pessoa2
