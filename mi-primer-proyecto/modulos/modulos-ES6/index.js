// import { suma } from "./modulos2/matematicas";
import * as moduloMatematicas from "./modulos2/matematicas";
import getAutor, { libro } from "./modulos2/literatura";

const sum = moduloMatematicas.suma(4, 12);
console.log(sum);

const potencia = moduloMatematicas.eleva(2, 21);
console.log(potencia);

console.log(getAutor());
console.log(libro);
