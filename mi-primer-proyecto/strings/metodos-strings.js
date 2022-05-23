//Metodos cadenas de caracteres
//como obtener la longitud
let string = "Me llamo Alejandro Pascual";
console.log(str.length);

//Cadena de caracteres
//Slice() substring() subsrt()
let slice_string = string.slice(5, 10);
console.log(slice_string);

let substring_string = string.substring(5, 10);
console.log(subtring_str);

let subtring_string = string.substr(5, 10);
console.log(substring_string);

//Reemplazar
let cadena = "Hola que tal, buenas tardes";

console.log(cadena);

console.log(cadena.replace(tardes, dias));

let texto =
  "Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido";
console.log(texto.replace("un", "tu"));
//Si usamos /g(global), reemplaza todas las instancias
console.log(/un/g, "tu");
