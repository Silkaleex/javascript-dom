const sobreMi = {
  nombre: "Alejandro",
  apellidos: "Pascual",
  edad: 27,
  altura: 170,
  desarrollador: true,
};

const esto = [sobreMi.edad];
console.log(esto);

const amigos = [
  { nombre: "Fernando", edad: 25 },
  { nombre: "Facundo", edad: 33 },
  { nombre: "Belen", edad: 29 },
];
amigos.sort((a, b) => b.edad - a.edad);
console.log(amigos);
