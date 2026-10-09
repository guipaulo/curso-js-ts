function saudacao() {
    let nome = "Guilherme";
    console.log(`Bom dia, ${nome}!`);
}
//console.log(nome); Erro
saudacao();

function boasVindas(nome) {
    console.log(`Seja bem-vindo, ${nome}!`);
}

boasVindas("Paulo");
boasVindas("Maria");
boasVindas("João");

function soma(a, b) {
    return a + b;
}
console.log(soma(5, 3));
console.log(soma(1, 4));
console.log(soma(10, 20));

const resultado = soma(2,2);
console.log(resultado);

function concatenar(p1, p2) {
    return p1 + p2;
}

console.log(concatenar("Olá, ", "mundo!"));

// const raiz = function(n) {
//     return n ** 0.5;
// };


// Arrow function

const raiz = (n) => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));