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
