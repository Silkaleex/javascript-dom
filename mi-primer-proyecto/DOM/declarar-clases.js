class persona {
  nombre;
  edad;
  isDeveloper;
  constructor(nombre, edad, isDeveloper) {
    this.nombre = nombre;
    this.edad = edad;
    this.isDeveloper = isDeveloper;
  }
  saludo() {
    console.log(`Hola mi nombre es ${this.nombre}, y tengo ${this.edad} años`);
  }
}

const nuevapersona = new persona("Alejandro", 27, true);
console.log(nuevapersona);
nuevapersona.saludo();

let numero = 60; //Inicializando
let persona2 = new persona("maria", 34, false); //Instanciar
çconsole.log(typeof persona2);
console.log(persona2 instanceof persona);

//intanceof => Similar a typeof pero para clases
