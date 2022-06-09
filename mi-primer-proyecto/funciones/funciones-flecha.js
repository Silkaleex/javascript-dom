//Funciones flecha - Funciones flecha
//Solo se pueden usar una vez depues de ser inicializadas
//Function puede ser declarada en cualquier punto, es recomendable ponerlas al principio
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const array2 = array.map((valor) => valor * 2); //funcion anonima

// const dobledelValor = (valor) => {
//   return valor * 2;
// };

const dobleValor = (valor) => valor * 2;
console.log(dobleValor(6));

const array3 = array.map(dobleValor);

console.log(array3);

function doble(valor) {
  return valor * 2;
}
