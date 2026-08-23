// Declarações com "var" podem ser redeclaradas e atualizadas. Por isso, não é recomendado o seu uso.
var nome = 'Paulo';
var nome = 'Guilherme';

console.log(nome);

let nome2 = 'Paulo'; // Declarações com "let" podem ser atualizadas, mas não redeclaradas.
nome2 = 'Guilherme';

console.log(nome2);

// NÃO FAÇA ISSO!
nome = 'Paulo Guilherme';

