//Sets o conjuntos
//Set:conjunto no ordenado, de valores unicos o elementos unicos
//No permite almacenar valores o numeros que ya existen
//hay objetos que se podran escribir pero no se identifican igual
//Por ejemplo:{id:5}
const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "hola", { id: 5 }, { id: 5 }];
const miSet = new Array(array);

console.log(array);
console.log(miSet);

//Añadir elementos .add()
miSet.add(9);
console.log(miSet);
miSet.add(4);
console.log(miSet);
//eliminar dentro de nuestros conjuntos .delete()
miSet.delete("hola");
console.log(miSet);

//Contiene .has()
console.log(array.includes(2));
console.log(miSet.has(40));
//propiedad para verificar nuestro array .size()
console.log(miSet.size());

//Iteracion dentro de los valores de un array
miSet.array.forEach((valor) => {
  console.log(valor);
});

const it_miSet = miSet.values();
console.log(it_miSet);

const ar_miset = [...miSet];
console.log(ar_miset[1]);
//Vaciar Array .clear()
miSet.clear();
console.log(miSet);
