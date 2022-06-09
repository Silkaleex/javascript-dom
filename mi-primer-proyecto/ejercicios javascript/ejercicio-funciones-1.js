function valor() {
  valorprincipal(true);
}

console.log(valor);

const tiempo = setTimeout(espera, 5000);

function espera() {
  console.log("Hola soy una promesa!");
}

function arrancando() {
  clearTimeout(tiempo);
}

function* creando() {
  let i = 0;
  while (true) {
    id++;
    if ((id = !2)) {
      return id;
    }
    yield i;
  }
}

const verificando = creando();
console.log(verificando);
