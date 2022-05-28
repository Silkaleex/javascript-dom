//.sort() => Modifica el ARRAY
const array = [2, 54, 9, 20, 10, 1, 81, 565, 92];
console.log(array);

array.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    retun + 1;
  } else {
    return 0;
  }
});

console.log(array);

//Ordenas Unicamente los arrays numericos
const arrayNumerico = [1, 6, 78, 782, 23, 57, 88, 123, 352];
arrayNumerico.sort((a, b) => a - b);

console.log(arrayNumerico);

////////////////////////////
const objetos = [
  { nombre: "Catalina", edad: "72" },
  { nombre: "Furgencio", edad: "88" },
  { nombre: "Lolita", edad: "1" },
  { nombre: "Casimiro", edad: "33" },
  { nombre: "Eustaquia", edad: "51" },
  { nombre: "Fernando", edad: "44" },
];

// objetos.sort((a, b) => {
//   if (a.edad < b.edad) {
//     return -1;
//   } else if (a.edad > b.edad) {
//     return +1;
//   } else {
//     return 0;
//   }
// });

objetos.sort((a, b) => a.edad - b.edad);
console.log(objetos);
