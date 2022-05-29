//.some()
const array = [-1234, 4, 1, 6, 78, 23, 45, 59, 989, 123, 257, 512];

const res = array.some((valor) => valor < -0);

console.log(res);

const existe = array.some((valor) => valor === 4);

console.log(existe);

const listasObjetos = [
  { nombre: "Raul", edad: 12 },
  { nombre: "Enrique", edad: 33 },
  { nombre: "Jose-Angel", edad: 77 },
  { nombre: "Luis", edad: 45 },
  { nombre: "Jorge", edad: 32 },
];

const existejavier = listasObjetos.some((valor) => valor === "Javier");

console.log(existejavier);

//Como obtener un objeto de manera Iterable
const str = "Hola Soy Juande";
console.log(str[5]);

const ar_str = array.from(str);
console.log(ar_str);

const set = new Set([4, 6, 8, "gofre", 9, 12, 36]);
const ar_set = array.from(set);
console.log(ar_set);

//no se usa mucho pero mejor saberlo por si acsaso

const keys = array.keys();
console.log(keys);

const ar_keys = array.keys();
console.log(ar_keys);
