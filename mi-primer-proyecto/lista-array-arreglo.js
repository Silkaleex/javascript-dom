//Lista, Array o Arreglo
const lista = [1, "", true, undefined, null];
const lista2 = new Array(2, "", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "Soy el pirmer index Numero 0";
console.log(lista);
console.log(lista2);
console.log(lista3);

const lista4 = [lista, lista2, lista3];
console.log(lista4);

//Objetos
const movil = {
  altura: 10,
  anchura: 5,
  marca: "Oppo",
  isblack: true,
  contactos: ["pedro", "Jose", "Antonio"],
  tarjeta: {
    marca: "Xiaomi",
    almacenamiento: 64,
  },
};

movil.newmobil = "samsung";
movil.año = "2000";

console.log(movil.newmobil);
console.log(movil.año);
console.log(movil.tarjeta.marca);
console.log(movil.marca);
console.log(movil.contactos);

//Fechas
//Librerias moments.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);

const fecha_cadena = new Date("may 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2021, 3, 17);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const año = ahora.getFullYear();

console.log(dia, mes, año);
