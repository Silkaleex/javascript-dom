// localStorage.setItem("nombre", "Silkaleex");
// localStorage.setItem("edad", "27");

// console.log(localStorage.getItem("nombre"));

// localStorage.setItem(
//   "persona",
//   JSON.stringify({ nombre: "Alejandro", apellidos: "Pascual" })
// );

// console.log(JSON.parse(localStorage.getItem("persona")));

//JSON.stringify -> Convierte un objeto/Array en string
//JSON.parse -> Convierte un objeto/Array convertido a través de stringify en un objeto de javascript
localStorage.removeItem("nombre");

sessionStorage.setItem("nombre-sesion", "Alejandro");

/*Cookies*/
document.cookie = "nombreCookie=AlejandroCookie";
document.cookie =
  "nombreCaducidad=Nombre;expires" + new Date(2023, 0, 1).toUTCString();
console.log(document.cookie);
