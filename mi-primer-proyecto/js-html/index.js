const a = 4;
const b = 8;
console.log("Hola");
console.log(a * b);

const p = document.getElementById("parrafo");
console.log(p);

const f = document.getElementById("formulario");
console.log(f);

f.addEventListener("submit", (evento) => {
  console.log(evento);
  evento.preventDefault();
});
