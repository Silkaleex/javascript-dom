class persona {
  //Privated -> #
  //Privated -> Solo se puede acceder dentro de la clase
  #nombre;
  #edad;
  //Projected -> _
  //Projected -> Solo se pude acceder desde dentro
  //de la clase y desde clases descencientes
  _isDEveloper = true;
  constructor(nom, ed) {
    this.#nombre = nom;
    this.#edad = ed;
  }
  saludo() {
    console.log(`Hola mi nombre es ${this.nombre}, y tengo ${this.edad} años`);
  }
  dimeNombre() {
    //Funcion Getter
    //nos permite acceder de forma controlada
    //a algun atributo protegido
    return this.#nombre;
  }

  #obtenEdad() {
    return this.#edad;
  }

  getEdad() {
    return this.#edad;
  }

  setEdad(nuevaedad) {
    this.#edad = nuevaedad;
  }
}

// const persona = new persona("Tomas", 56);
// console.log(persona);
// console.log(persona.nombre);

// persona.salud();
// console.log(persona.obtenNombre());
// console.log(persona.#obtenEdad());
// console.log(persona._isDEveloper);

////////////////////////////////////////////

//Getter -> metodos que nos permiten obtener
//  atributos/metodos privados o protegidos
const edad = persona.getEdad();
console.log(edad);
//Setter -> Nos permiten cambiar el valor de alguno
//  de los metodos privados o protegidos
persona.setEdad(34);
console.log(persona.edad());
