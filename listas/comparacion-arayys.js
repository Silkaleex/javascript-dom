//Comparar Listas .every()
const array = [1, -3, 5, -7, 9, -11, 13, -15, 17, 19, 21];

// const resultado = array.every((valor) => {
//   if (typeof valor === "number") {
//     return true;
//   } else {
//     return false;
//   }
// });

const resultado = array.every((valor) => valor > 0);

console.log(resultado);

//Comparacion de lista
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];

console.log(arr1 === arr2);

// const compararArrays = (array_1, array_2) => {
//   if (array_1.length != array_2.length) return false;
//   const res = array_1.every((valor, i) => {
//     if (valor === array_2[i]) return true;
//     return false;
//   });
// };

const compararArrays = (array_1, array_2) => {
  if (array_1.length != array_2.length) return false;
  const res = array_1.every((valor, i) => valor === array_2[i]);
  return res;
};

console.log(compararArrays(arr1, arr2));

const arr3 = [1, 2, 3, 4];
console.log(compararArrays(arr3));
