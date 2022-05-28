//Metodos avanzados
//.map() .filter() .reduce()
const array = ["oviedo", "Alicante", "Barcelona", "Vigo", "a-coruña"];

const val = array.forEach((v) => {
  console.log(v);
  return 4;
});

// const newArray = array.map((valor, indice) => {
//   return `${indice + 1} - ${valor}`;
// });

const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`);
console.log(newArray);

const listaObjetos = [
  { nombre: "Jesus", edad: 40 },
  { nombre: "Jaime", edad: 66 },
  { nombre: "Concha", edad: 33 },
  { nombre: "veronica", edad: 12 },
  { nombre: "Jose", edad: 3 },
];
// const mayores = listaObjetos.filter((obj) => {
//   if (obj.edad > 30) {
//     return true;
//   } else {
//     return false;
//   }
// });
const mayores = listaObjetos.filter((obj) => obj.edad > 30);
console.log(mayores);

const nuevaLista = listaObjetos.filter((obj) => obj.nombre !== "Jaime");
console.log(nuevaLista);

//Reduce
// agr= agregador, cur(currentvalue)=valor actual
//4 valores (acumulado, cur,i,arrayOriginal)
const valores = [3, 56, 88, 12, 5];
const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
  console.log(acumulado);
  console.log(cur);
  console.log(i);
  console.log(arrayOriginal);
  return acumulado + cur;
});
console.log(suma);
