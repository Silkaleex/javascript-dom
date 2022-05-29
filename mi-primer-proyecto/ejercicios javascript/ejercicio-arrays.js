const lista = ["pan", "leche", "fruta", "zumo", "garbanzos"];
lista.push("Aceite de girasol");
lista.pop();
console.log(lista);

const eliminar = lista.filter((obj) => obj !== "Aceite de girasol");
console.log(eliminar);

const peliculasfavoritas = [
  {
    titulo: "The Crow",
    director: "Alex Proyas",
    fecha: new Date(11, 10, 1994),
  },
  {
    titulo: "underwold",
    director: "Lakeshore Entertainment",
    fecha: new Date(17, 10, 2003),
  },
  { titulo: "Drácula", director: "Bram Stoker", fecha: new Date(26, 5, 1987) },
  {
    titulo: "The Wolverine",
    director: "James Mangold",
    fecha: new Date(24, 7, 2013),
  },
  {
    titulo: "Harry Potter y las reliquias de la Muerte",
    director: "David Yates",
    fecha: new Date(15, 7, 2011),
  },
  {
    titulo: "Alicia en el país de las maravillas",
    director: "Tim Burton",
    fecha: new Date(25, 2, 2010),
  },
];

const revisionPeliculas = peliculasfavoritas.filter((obj) => obj.fecha > 2000);
console.log(revisionPeliculas);

const peliculasActuales = peliculasfavoritas.filter(
  (pelicula) => pelicula.fecha > new Date(2010, 0, 1)
);

const director = peliculasfavoritas.map((pelicula) => {
  return pelicula.director;
});

const titulo = peliculasfavoritas.map((pelicula) => {
  return pelicula.titulo;
});

const contenidoTotal = director.concat(titulo);
const contenido_total = [...director, ...titulo];
