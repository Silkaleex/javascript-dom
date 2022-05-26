//value of
let a = 2;
let b = new Number(a);
console.log(a);
console.log(b);
console.log(a + b);
console.log(b.valueOf());
console.log(a.valueOf() + b.valueOf());

let str = "Soy un String";
console.log(str);
console.log(str.valueOf());

//Nan:Not at Numer - infinity
let n = Number("adios");
console.log(n);
console.log(isNan(n));

let numerador = 19;
let divisor = 0;

let divisor_2 = null;
console.log(numerador / divisor);
console.log(numerador / divisor_2);
//como convertir los string a valores numericos con number, parseInt y parseFloat
let numero = "5.89";
let num2 = 2;

console.log(typeof numero);
console.log(numero + num2);
console.log(Number(numero) + 2);

console.log(parseInt(numero));
console.log(parseFloat(numero));

let numero3 = 4;
console.log(parseInt(numero3));
console.log(parseFloat(numero3));

//Numeros Hexadecimales(base 16)
let numHex = "0x3a5b7";
console.log(parseInt(numHex));
//obtener valores maximo y minimo en Javascrpt
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;
console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);
