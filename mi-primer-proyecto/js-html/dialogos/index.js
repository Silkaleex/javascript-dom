const boton = document.querySelector("#btn");
console.log(boton);

boton.addEventListener("click", () => {
  //console.log("click");
  //alert("Se ha echo click");
  //confirm("Estas de acuerdo") && console.log("De acuerdo");
  //confirm("Estas de acuerdo")
  //  ? console.log("Adelante")
  //  : console.log("vale no continuamos");
  const respuesta = confirm("¿seguro?");
  if (respuesta) {
    console.log("Muy bien continuemos con la seleccion!");
  } else {
    console.log("No continuaras con la seleccion");
  }
});

const botonInfo = document.querySelector("#info");
botonInfo.addEventListener("click", () => {
  const nombre = prompt("¿Cual es tu nombre");
  if (nombre) {
    console.log(`Tu nombre es ${nombre}`);
  } else {
    console.log("Por favor rellena el apartado");
  }
});

const lista = [
  {
    nombre: "Alejandro",
    edad: 27,
  },
  {
    nombre: "Pedro",
    edad: 1,
  },
  {
    nombre: "raquel",
    edad: 67,
  },
];

console.log(lista);
console.table(lista);
