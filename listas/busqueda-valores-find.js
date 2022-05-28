//Iterar los valores de una lista
const array = ["Hola", 40, 11, 0, true, undefined, "montaña"];
//Forma antigua(Poco eficaz)
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//ES6 se usa frecuentemente forEach()
let suma = 0;
const arrayNumbs = [3, 5, 8, 10, 20, 50, 60];
arrayNumbs.forEach((valor) => {
  suma += valor;
  console.log(valor);
});

console.log(suma);

//Busqueda de un valor dentro de una lista .find()
//Buscar el elemento 40
const variable = array.find((valor) => {
  if (valor === 90) {
    return true;
  }
});
console.log(variable);

const listaObjetos = [
  { nombre: "pedro", edad: 50 },
  { nombre: "Juan", edad: 40 },
  { nombre: "Paula", edad: 65 },
  { nombre: "Oscar", edad: 84 },
  { nombre: "Lola", edad: 30 },
];

// const objeto = listaObjetos.find((o) => {
//   if (o.nombre === "pedro") {
//     return true;
//   }
// });

//console.log(objeto);

const objeto = listaObjetos.find((o) => o.nombre === "pedro");
console.log(objeto.edad);

const { edad } = listaObjetos.find((o) => o.nombre === "pedro");
console.log(edad);
