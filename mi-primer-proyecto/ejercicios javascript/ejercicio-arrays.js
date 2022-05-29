const { map } = require("mathjs");

const lista = ["pan", "leche", "fruta", "zumo", "garbanzos"];
lista.push("Aceite de girasol");
console.log(lista);

const eliminar = lista.filter((obj) => obj !== "Aceite de girasol");
console.log(eliminar);

const peliculasfavoritas = [
  { titulo: "The Crow", director: "Alex Proyas", fecha: "1994" },
  { titulo: "underwold", director: "Lakeshore Entertainment", fecha: "2003" },
  { titulo: "Drácula", director: "Bram Stoker", fehca: "1992" },
];

const revisionPeliculas = peliculasfavoritas.filter((obj) => obj.fecha > 2000);
console.log(revisionPeliculas);

const nuevoContenido = new Map();
nuevoContenido.set(
  'titulo: "The Batman", director: "Matt Reeves", fecha: "2022"'
);
nuevoContenido.set(
  'titulo: "War Horse", director: "Steven Spielberg", fecha: "2012"'
);
console.log(nuevoContenido);

const contenidoTotal = peliculasfavoritas.concat(nuevoContenido);
console.log(contenidoTotal);
