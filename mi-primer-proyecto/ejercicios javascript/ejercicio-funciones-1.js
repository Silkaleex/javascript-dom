function valor() {
  return true;
}
//un metodo mas largo de hacerlo
const tiempo = setTimeout(espera, 5000);

function espera() {
  console.log("Hola soy una promesa!");
}

function arrancando() {
  clearTimeout(tiempo);
}
//Creandolo de una forma mas rapida y entendible
async function damePromesa() {
  return setTimeout(() => console.log("Hola soy una promesa"), 5000);
}
///////////////////////////////////////////////
function* Pares() {
  let id = 0;
  while (true) {
    yield (id += 2);
  }
}

const verificando = Pares();
console.log(verificando.next().value);
console.log(verificando.next().value);
console.log(verificando.next().value);
console.log(verificando.next().value);
