//Bifurcaciones if & else
let saldo = 50;
let efectivo = 20;

if (efectivo < saldo) {
  console.log("Puedes sacar dinero");
} else {
  console.log("No puedes sacar dinero");
}

if (true) {
  console.log("Es verdadero");
}

if (false) {
  console.log("Es verdadero");
} else {
  console.log("No es verdadero");
}
//if else + else if
let nota = 5;

if (nota === 5) {
  console.log("enhorabuena has aprobado!");
} else if (nota === 4) {
  console.log("No aprobaste, a la proxima sera");
} else if (nota === 3) {
  console.log("No aprobaste, necesitas estudiar mucho mas");
} else if (nota === 2) {
  console.log("Muy mal, necesitas mejorar");
} else if (nota === 1) {
  console.log("bastante mal, necesitas mejorar mas");
} else if (nota === 0) {
  console.log("Empieza de nuevo,ponte las pilas");
} else {
  console.log("¡ERROR!, introduce tu nota entre el 1 y el 5");
}

//Sentencia Switch
switch (nota) {
  case 5:
    console.log("enhorabuena has aprobado!");
    break;
  case 4:
    console.log("No aprobaste, a la proxima sera");
    break;
  case 3:
    console.log("No aprobaste, necesitas estudiar mucho mas");
    break;
  case 2:
    console.log("Muy mal, necesitas mejorar");
    break;
  case 1:
    console.log("bastante mal, necesitas mejorar mas");
    break;
  case 0:
    console.log("Empieza de nuevo,ponte las pilas");
    break;
  default:
    console.log("¡ERROR!");
    break;
}
