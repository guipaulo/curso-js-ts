//               1       2        3
const alunos = ['Luiz', 'Maria', 'João'];
alunos[alunos.length] = 'Lucas';
//alunos[alunos.length] = 'Luiza';
console.log(alunos.length);

// Adicionando no fim:

alunos.push('Fábio');
console.log(alunos);

// Adicionando no começo:

alunos.unshift('Felipe');
alunos.unshift('Luiza');
console.log(alunos);

// Removendo do final
alunos.pop();
console.log(alunos);

// Removendo do começo

alunos.shift();
console.log(alunos);

console.log(alunos[50]); // undefined
console.log(typeof alunos);
console.log(alunos instanceof Array); // true