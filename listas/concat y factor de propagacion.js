//unir Arrays
const lista1 = ["Hola"];
const lista2 = ["Adios"];
console.log(lista1.concat(lista2));
console.log(lista1 + lista2);

const lista3 = lista1.concat(lista2);
console.log(lista3);

//como unir 2 listas con contact en el factor de propagacion
console.log(...lista3);

const lista4 = [...lista1, ...lista2];
console.log(lista4);

//Error no es el concepto de propagacion
const lista5 = [lista1, lista2];
console.log(lista5);
