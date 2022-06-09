function* generaId() {
  let i = 0;
  while (true) {
    id++;
    if (id === 10) {
      return id;
    }
    yield i;
  }
}

//yield envia un numero, espera hasta que se le vuelva a llamar

const gen = generaId();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
