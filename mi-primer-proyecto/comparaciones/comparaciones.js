//Comparaciones
let a = 5; //number
console.log(typeof a);
let b = "5"; //string
console.log(typeof b);

if (5 == 5) {
  console.log("5 es igual a 5");
}
if (5 === 5) {
  console.log("5 es muy igual a 5");
}
// == solo compara el valor
// === compara el valor y el tipo

let c = 3;
let d = 4;

if (c != d) {
  console.log("c es distinto de d");
}

if (c !== d) {
  console.log("c es distinto de d");
}

//comparaciones mayor que y menor que
let max = 10;
let min = 5;

if (max > min) {
  console.log("max es mayor que min");
}
if (max >= min) {
  console.log("max es mayor o igual que min");
}
if (max < min) {
  console.log("max es menor que min");
}
if (max <= min) {
  console.log("max es menor o igual que min");
}
