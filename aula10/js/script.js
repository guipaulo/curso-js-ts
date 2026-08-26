//alert('Com nossa mensagem.') Faz um alerta na tela - Retorna undefined

//confirm('Deseja realmente sair?') Faz uma confirmação na tela - Retorna true ou false

//prompt('Digite seu nome:') Faz uma pergunta na tela - Retorna o valor digitado pelo usuário

let num1 = prompt('Digite o primeiro número:');
let num2 = prompt('Digite o segundo número:');

console.log(num1);
console.log(num2);

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;

alert(`O resultado da soma é: ${resultado}`);