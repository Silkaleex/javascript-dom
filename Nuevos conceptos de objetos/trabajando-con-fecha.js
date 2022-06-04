const fecha = new Date();

console.log(fecha);

//Enero Mes 0, se empieza por dicho numero en todo
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192);

console.log(fecha2);

const fecha3 = new Date(-10000); //Milisegundos
console.log(fecha3);

const fecha4 = new Date("octubre 14,1979 12:15:15");
console.log(fecha4);

//Comparar fechas
console.log(fecha > fecha2);

const fecha5 = new Date(1987);
console.log(fecha5);

console.log(fecha2 === fecha5); //Error no se pueden comparar fechas de este metodo
console.log(fecha2.getTime() === fecha5.getTime()); //Asi es como se hace las comparaciones

//Obtener dia mes y año de una fecha
//Obtener dia .getDate()
console.log(fecha2.getDate());

//Obtener mes .getMonth()
console.log(fecha2.getMonth() + 1); //Para que enero no sea 0 y empieze por 1

//Obtener Año .getFullYear()
console.log(fecha2.getFullYear());
console.log(fecha2);
//.toLocaleDateString()
console.log(fecha2.toLocaleDateString());
