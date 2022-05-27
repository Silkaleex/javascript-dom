//Como obtener una pista a partir de otra .slice()
const array = ["Hola", 1, 2, "casa", 4];
//No modifica el Array original
console.log(array.slice(0));
const array2 = array.slice(2, 3);
console.log(array2);

const array3 = array.slice(1, -2);
console.log(array3);
