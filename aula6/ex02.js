const nome = 'Paulo Guilherme';
const sobrenome = 'Silva de Araújo';
const idade = 25;
const peso = 67;
const alturaEmMetros = 1.65;

let imc;
let anoNascimento;
imc = peso / (alturaEmMetros * alturaEmMetros);

console.log('Meu nome é:', nome, sobrenome);
console.log('Minha idade é:', idade, 'anos');
console.log('Meu peso é:', peso, 'kg');
console.log('Minha altura é:', alturaEmMetros, 'm');
console.log('Meu IMC é:', imc);
anoNascimento = 2026 - idade;

console.log('O ano de nascimento é:', anoNascimento);

// Outra forma de imprimir o texto:
console.log(`Meu nome é: ${nome} ${sobrenome}, tenho ${idade} anos, meu peso é: ${peso} kg, minha altura é: ${alturaEmMetros} m e meu IMC é: ${imc}`);
console.log(`nasceu em ${anoNascimento}`);