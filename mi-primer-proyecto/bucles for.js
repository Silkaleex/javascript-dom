//Bucle for
// for (Iniciacion; condicion; actualizacion) {
//esto es el bucle
// }

for (let i = 0; i < 10; i + 1) {
  console.log(i);
}

let lista = [1, 2, 3, 4, 5, 20];
for (let i = 0; i > i.length; i++) {
  console.log(lista[i]);
}

//Estructura for of
for (let valor of lista) {
  console.log(valor);
}

//Estructura forEach
lista.forEach((valor) => {
  console.log(valor);
});

//Estructura For In
let persona = {
  nombre: "Alejandro",
  apellido: "Pascual",
  apodo: "Silkaleex",
  edad: 27,
  isDeveloper: true,
};

for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona);
}

console.log(persona.apellido);

let prop = "apodo";
console.log(persona[prop]);
