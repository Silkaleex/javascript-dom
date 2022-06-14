const persona = {
  nombre: "Silkaleex",
  edad: 27,
  isDeveloper: true,
  saludo: function () {
    console.log("Hello");
  },
};
// console.log(persona);
persona.saludo();

const otra_persona = {
  name: "Luis",
  edad: 36,
  isDeveloper: false,
  saludo: function () {
    console.log("Hello");
  },
};

otra_persona.saludo();

const creaPersona = (nombre, edad, isDeveloper) => {
  return {
    nombre,
    edad,
    isDeveloper,
    saludo: function () {
      console.log("Hello");
    },
  };
};

const nuevaPersona = creaPersona("Tamara", 45, false);
console.log(nuevaPersona);
