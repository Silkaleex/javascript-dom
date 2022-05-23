let input = "Acuario";
let db = "acuario";

//toLowerCase() toUpperCase()
//Minuscula, Mayuscula
console.log(input.toLowerCase() === db.toLocaleLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());

//concatenar Unir dos frases

let dueño = "Hola me llamo Alex";
let mascota = "Y esta es mi perro que se llama Richi";
console.log(dueño.concat(", ", mascota));

let a = "primera linea";
let b = "segunda linea";
console.log(a + " " + b);
console.log(`${a} ${b}`);

//Eliminar espacios
let eliminacion = "Hola tengo varios espacios";
console.log(eliminacion.length);
//trim
console.log(eliminacion.trim().length);
console.log(eliminacion.trimStart().length);
console.log(eliminacion.trimEnd().length);

//saber que objeto hay en un posicion
let d = "hola soy un numero";
console.log(d.charAt(4));
console.log(d[4]);

//posiciones
let posicion =
  "Hola Soy el animal mas rapido del mundo, y aquel animal el mas veloz";
console.log(posicion.indexOf("animal"));
console.log(posicion.charAt(12));
console.log(posicion.lastIndexOf("animal"));
//Motrar palabras repetidas
//https://www.regexr.com
console.log(posicion.match(/el/g));
ç;
//include verifica si hay una palabra o un objeto
// en un string o cadena de caracteres

//¿Existe una palabra en el texto?
console.log(posicion.includes("sol"));

//Saber si un texto empieza con una palabra
console.log(posicion.startsWith(hola));
//Saber si un texto termina con una palabra
console.log(posicion.endsWith(veloz));
