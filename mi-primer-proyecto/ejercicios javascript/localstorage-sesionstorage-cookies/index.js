localStorage.setItem("nombre", "Alejandro");
localStorage.setItem("apellido", "Pascual");

localStorage.setItem(
  "persona",
  JSON.stringify({ nombre: "Alejandro", apellidos: "Pascual" })
);
console.log(JSON.parse(localStorage.getItem("persona")));

sessionStorage.setItem("nombre", "Alejandro");

document.cookie = "nombreCookie=EstaEsunaCookie";
document.cookie =
  "nombreCaducidad=Nombre;expires" +
  new Date(2022, 17, 06, 13, 00, 00).toUTCString();
console.log(document.cookie);

//Otra Manera de Hacerlo

// const nombre = "Alejandro";
// const apellido = "Pascual";

// const datos = {
//   nombre,
//   apellido,
// };

// // sessionStorage.setItem("datos", JSON.stringify(datos))
// // localStorage.setItem("datos", JSON.stringify(datos))

// const now = new Date();
// // document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}`
