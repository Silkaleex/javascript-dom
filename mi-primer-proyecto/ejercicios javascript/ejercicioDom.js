class Estudiante {
  nombre = "Alejandro";
  asignaturas = ["Javascript", "CSS3", "HTML5"];
  recogerDatos() {
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas,
    };
  }
}
const estudiando = new Estudiante();
console.log(estudiando.recogerDatos());
