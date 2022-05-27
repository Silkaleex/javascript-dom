//Arrays
let a = "Hello World";
let arreglo = [1, "Mar", 3, 4, "Manzana", 6, a];
console.log(arreglo);

//Posicionamiento en Arrays
//Array[indice] => 0,1,2,3,4,5,6,...

consoel.log(arreglo[0]);
consoel.log(arreglo[1]);
consoel.log(arreglo[2]);
consoel.log(arreglo[3]);

//Metodos para introducir valores
//.push()unshift() => Mutan el valor a nuestro Array
//Valores al final .push()
arreglo.push("perro", "libro");
console.log(arreglo);

//Valores al principio .unshift()
arreglo.unshift("r", true);
console.log(arreglo);

const arreglo2 = ["arbol", "gato", "coche"];
//Elimina valores al final -> .pop()
arreglo2.pop();
console.log(arreglo2);

//Elimina Valores al principio -> .shift()
arreglo2.shift();
console.log(arreglo2);

//Eliminar, modificar o añadir valores en nuestro array
//.splice(x,y,z)
const array3 = [1, 2, 3, 4, 5, 6];
array3.splice();

//Elimina valores .splice(indice,numValoresAEliminar)
array3.splice(2, 1);
console.log(array3);

//Añadir valores .splice(indice, 0, valores)
array3.splice(2, 0, "hola");
console.log(array3);
//Modificar valores
array3.splice(2, 1, 6);
console.log(array3);
