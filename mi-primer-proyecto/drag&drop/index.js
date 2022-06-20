const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");

parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (event) => {
    // console.log("Arrastrando");
    console.log("Estoy arrastrando el parrafo: " + parrafo.innerText);
    console.log(parrafo.innerText);
    event.dataTransfer.setData("id", parrafo.id);
    const elemento_fantasma = document.querySelector(".img-fantasma");
    event.dataTransfer.setDragImage(elemento_fantasma, 0, 0);
  });
  parrafo.addEventListener("dragend", () => {
    //     console.log("Has dejado de arrastrar");
    parrafo.classList.remove("dragging");
  });
});

secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy"; //copy por defecto
    // console.log("Drag Over");
  });
  seccion.addEventListener("drop", (event) => {
    console.log("Drop");
    const id_parrafo = event.dataTransfer.getData("id");
    // console.log("Parrafo id: ", id_parrafo);
    const parrafo = document.getElementById(id_parrafo);
    seccion.appendChild(parrafo);
  });
});
const papelera = document.querySelector(".papelera");

papelera.addEventListener("dragover", (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "copy";
});

papelera.addEventListener("drop", (event) => {
  const id_parrafo = event.dataTransfer.getData("id");
  document.getElementById(id_parrafo).remove();
});
