const { number } = require("mathjs");

const miFuncion = (val) => {
  if (typeof val === "number") {
    return 2 * val;
  } else {
    // return false;
    //throw === Lanzar
    throw new Error("Valor debe ser de tipo NUMERO");
  }
};

console.log(miFuncion(21));
console.log(miFuncion("21"));

// const elDoble = miFuncion("ala");
const numero = 8;
try {
  //Codigo que puede fallar
  console.log("Esta ejecutandose de manera correcta");
  //   const doble = miFuncion(8);
  const doble = miFuncion(numero);
  console.log(doble);
} catch {
  //En caso de fallo, quiero que ejecutes
  console.error("Error");
} finally {
  console.log("Esto se va a ejecutar si se produce un error como no");
}

//InternalError, sintaxError, typeError, RangeError, ReferenceError
