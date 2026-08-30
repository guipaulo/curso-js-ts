// Iteração com strings

let umaString = 'Um texto';

console.log(umaString[4]); // 'e'
console.log(umaString[-3]); // undefined

console.log(umaString.charAt(4)); // 'e'

console.log(umaString.concat(' em', ' um', ' lindo dia.')); // 'Um texto em um lindo dia.'
console.log(`${umaString} em um lindo dia.`); // 'Um texto em um lindo dia.'

console.log(umaString.indexOf('texto')); // 3
console.log(umaString.indexOf('Texto')); // -1
console.log(umaString.indexOf('o', 3)); // 6

// indexOf() retorna o índice da primeira ocorrência do valor especificado, começando a busca no índice fornecido. Retorna -1 se o valor não for encontrado.
console.log(umaString.lastIndexOf('o')); // 6
console.log(umaString.lastIndexOf('a'));

// lastIndexOf() retorna o índice da última ocorrência do valor especificado, começando a busca no índice fornecido. Retorna -1 se o valor não for encontrado.
console.log(umaString.lastIndexOf('o', 5)); // 3


console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[a-z]/g));

console.log(umaString.replace('Um', 'Outro'));

let outraString = 'O rato roeu a roupa do rei de roma.';

console.log(outraString.replace(/r/g, '#'));

console.log(outraString.length)

console.log(outraString.slice(2, 6));

console.log(outraString.split(' '));