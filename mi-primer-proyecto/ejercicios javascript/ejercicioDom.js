class estudiante {
  nombre;
}
class asignaturas {
  javascript;
  Html;
  Css;
  obtenDatos() {
    super(estudiante);
    console.log(`Hola me llamo ${nombre} y estudio ${asignaturas}`);
  }
}
