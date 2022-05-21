//Casos muy especificos - break, continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < lista.length; i++) {
  if (lista[i] === 5) {
    continue;
  }
  //Vuelve al punto de inicio y lo vuelve a ejecutar
  console.log(lista[i]);
  let j = 50;
  const k = 100;

  console.log(j);
  console.log(k);

  if (lista[5] > 5) {
    break; //Para el bucle
  }
}

//Cual es el ambito de bucle
console.log(k);
console.log(i);
console.log(j);
