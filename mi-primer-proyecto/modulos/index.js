//Formas de importar y exportar modulos
//1. common JS - require
//2. Import ES6 - import

// const moduloMatematicas = require("./modulo/matematicas");
// console.log(moduloMatematicas.factorial);
// const factorial = moduloMatematicas.factorial;
// const { factorial, suma } = moduloMatematicas;
// const suma = moduloMatematicas.suma;

const { factorial, suma } = require("./modulo/matematicas");

const fact = factorial(5);
// const fact = moduloMatematicas.factorial(5);
console.log(fact);

const sum = suma(33, 33, 3);
// const sum = moduloMatematicas.suma(33, 33, 3);
console.log(sum);

// console.log(module);
