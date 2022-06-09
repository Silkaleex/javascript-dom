//Que son las funciones como se declaran y utilizan
//¿que son?
//Bloques de codigo que se ejecutan con un fin especifico
const nom = "Alejandro";

// saludar("Alejandro");
saludar(nom);
function saludar(nombre) {
  console.log(nom);
  console.log(`Hola ${nombre}`);
}

////////////////////////////////////////////////////////
let nombre_2 = "Alejandro";
console.log(nombre_2);

despedir(nombre_2);

function despedir(nombre) {
  nombre = "Juan";
  console.log(`Adiós ${nombre}`);
}

/////////////////////////////////////////////////////////
let persona = { nombre: "Juan", apellido: "Villar" };

saludarPersona(persona);

function saludarPersona(objeto) {
  objeto.apellido = "Sanchez";
  console.log(`Hola ${objeto.nombre}, ${objeto.apellido}`);
}

/////////////////////////////////////////////////////////////////////////////////
function imprimeNumero(numero = 7) {
  //Parametros por defecto
  console.log(numero);
}

imprimeNumero(9);

//////////////////////////////////////////////////////////////
function imprimir(...parametros) {
  console.log(parametros);
}

imprimir("a", 1, "b", 2, "c", 3);

////////////////////////////////////////////////////////////////////////////////////
function suma(...nums) {
  console.log(...nums);
  return nums.reduce((a, b) => a + b);
}

const d = suma(1, 2, 3, 4, 5);
console.log(d);

///////////////////////////////////////////////////////////////
let variable = "Hola";

function multiplicar(a = 0, b = 0) {
  console.log(variable);
  return a * b;

  let variable_interna = "Adios";
  console.log(variable_interna);
}
console.log(multiplicar(4, 9));

// console.log(variable_interna); Error si se pone una variable dentro de una funcion
//se quedara dentro de una funcion
