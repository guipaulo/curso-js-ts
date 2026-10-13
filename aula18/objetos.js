const array = [1,2,3,4,5];

array.push(6); // É POSSÍVEL

console.log(array);

// array = [7,8,9]; NÃO É POSSÍVEL

// const pessoa1 = {
//     nome: 'Paulo',
//     sobrenome: 'Araújo',
//     idade: 25
// }

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Souza',
    idade: 30
}

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);

function criarPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa3 = criarPessoa('João', 'Silva', 20);
console.log(pessoa3.nome);
console.log(pessoa3.sobrenome);
console.log(pessoa3.idade);

const pessoa4 = criarPessoa('Ana', 'Costa', 28);
const pessoa5 = criarPessoa('Carlos', 'Pereira', 35);
const pessoa6 = criarPessoa('Fernanda', 'Almeida', 22);

console.log(pessoa4.nome);
console.log(pessoa5.nome);
console.log(pessoa6.nome);

// Criando pessoa com arrow function
const criaPessoaArrow = (nome, sobrenome, idade) => (
    {
        nome,
        sobrenome,
        idade
    }
);

const pessoa7 = criaPessoaArrow('Lucas', 'Mendes', 27);
console.log('\nPessoa 7 COM ARROW FUNCTION:');
console.log(pessoa7.nome);
console.log(pessoa7.sobrenome);
console.log(pessoa7.idade);

const pessoa1 = {
    nome: 'Paulo',
    sobrenome: 'Araújo',
    idade: 25,

    fala() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
console.log(pessoa1.idade);