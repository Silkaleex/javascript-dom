//Inheritance - Herencia
class persona {
  _nombre;
  _edad;
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludo() {
    console.log(
      `Hola mi nombre es ${this._nombre}, y tengo ${this._edad} años`
    );
  }
}
class desarrollador extends persona {
  constructor(nombre, edad, lenguaje) {
    super(nombre, edad); //coge atributos del elemento padre
    this.lenguaje = lenguaje;
  }
  saludo() {
    //override
    super.saludo();
    console.log(`Y soy desarollador web ${this.lenguaje}`);
  }
}
const nuevodev = new desarrollador("Juanma", 47, "Javascript");
console.log(nuevodev);
nuevodev.saludo();
//Polimorfismo => Poli:muchos;Morfismo:formas
