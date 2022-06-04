const obj = {
  id: 6,
  nombre: "Eduardo",
  apellidos: "Lopez",
  idDeveloper: true,
  libros_favoritos: ["El Metodo", "El Codigo de la manifestacion"],
  "4-juegos": [1, 2, 3, 4],
};

console.log(obj["4-juegos"]);
console.log(obj.id);

const prop = isDeveloper;
console.log(obj[prop]);

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Israel";
console.log(obj2.nombre);

console.log(obj.nombre);

let val1 = 4;
let val2 = vall;

val2 = 6;
console.log(val1);
console.log(val2);

//////////////////////////////////////////////////////
//Duplicado
const obj3 = { ...obj };
console.log(obj3.nombre);

obj.nombre = "Esteban";
console.log(obj.nombre);
console.log(obj3.nombre);
///////////////////////////////////////////////////////
//Como ordenar una lista de objetos en funcion de una propiedad
const listaPeliculas = [
  { titulo: "Lo que el viento se llevo", anyo: 1939 },
  { titulo: "Titanic", anyo: 1997 },
  { titulo: "Moana", anyo: 2016 },
  { titulo: "El efecto Mariposa", anyo: 2004 },
  { titulo: "Ted", anyo: 2012 },
];

console.log(listaPeliculas);
//Ordenar .sort()
//Muta o Cambia el valor de la lista original ¡Cuidado!
listaPeliculas.sort((a, b) => a.anyo - b.anyo);
console.log(listaPeliculas);
