/**
 * && AND
 * || OR
 * ! NOT
 */
// ------ AND ------
console.log(true && true); // TRUE
console.log(false && true); // FALSE
console.log(true && false); // FALSE
console.log(false && false); // FALSE

// ------ OR ------
console.log(true || true); // TRUE
console.log(false || true); // TRUE
console.log(true || false); // TRUE
console.log(false || false); // FALSE

// ------ NOT -------
console.log(!true) // FALSE
console.log(!false) // TRUE

const usuario = 'Paulo';
const senha = 123456;

console.log(usuario === 'Paulo' && senha === 123456);

// Outras formas de comparação

console.log(true && true && true) // TRUE
console.log(true && false && true) // FALSE
console.log(true || false || false) // TRUE
console.log(false || false || false) // FALSE