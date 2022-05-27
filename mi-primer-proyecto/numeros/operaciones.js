let a = 3.5;
let b = 4.8;

//Suma(+)
console.log(a + b);
//Resta (-)
console.log(a - b);
//Multiplicacion(*)
console.log(a * b);
//Dividir(/)
console.log(a / b);

//Representacion de cadenas de texto
console.log(typeof a);
let a_d = toString();
console.log(a_d);
console.log(typeof a_d);
//Redonde de numeros decimales
let c = 3.89;
let d = c * 3;
console.log(d);
console.log(typeof d);

//toFixed(x) - Limitar el numero de decimales al valor x
let e = 189.23456;
let f = 2385.6543;
console.log(e.toFixed()); //189
console.log(f.toFixed()); //2386
console.log(typeof f.toFixed());
//toPrecision(x) - Limita el numero de difras significativas de x
console.log(e.toPrecision());
console.log(f.toPrecision());
console.log(typeof f.toPrecision());
