//Carga y sobrecarga de functiones
function saludar() {
  hola();
}

function hola() {
  console.log("Hola! soy la funcion hola()");
}

saludar();
//1.Golbal()
//2.Saludar() Global()
//3.Hola() Saludar() Global()
//4.Saludar() Global()
//5.Global()

// function recursivo() {
//   recursivo();
// }

//Sobrecarga = Maximun call stack size exceeded
