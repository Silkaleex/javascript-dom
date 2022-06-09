//Funciones asincronas
function asincrona() {
  //Hacer una llamada a una Base de datos externa
  //Puede darnos algun error
}

//promesa
//const miPromesa = new Promise(resolve, reject => {})
const miPromesa = new Promise((resolve, reject) => {
  //Si esta todo correcto
  if (true) {
    resolve();
  } else {
    reject();
  }
});
miPromesa
  .then(() => console.log("Se ha ejecutado de forma correcta"))
  .catch(() => console.log("Error"))
  .finally(() => console.log("Yo me ejecuto siempre"));

//resolve: valor NO real, que permite resolverlo con exito
//reject: error, Rechazo
//finally: si se ejecuta de forma erronea, siempre se va a ejecutar

const funcion = new Promise((resolve, reject) => {
  const i = math.floor(math.random() * 2);
  if (i !== 0) {
    resolve();
  } else {
    reject();
  }
});
funcion
  .then(() => console.log("Se ha ejecutado de forma correcta"))
  .catch(() => console.log("Error"));
