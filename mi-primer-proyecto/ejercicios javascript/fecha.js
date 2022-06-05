const hoy = new Date();
console.log(hoy);

const fechaDeNacimiento = new Date("January 30, 1995 00:00:00");
console.log(fechaDeNacimiento);

console.log(hoy > fechaDeNacimiento);

console.log(fechaDeNacimiento.getDate());

console.log(fechaDeNacimiento.getMonth() + 1);

console.log(fechaDeNacimiento.getFullYear());
