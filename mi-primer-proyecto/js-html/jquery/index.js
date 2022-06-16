//$(selector).accion();

//$("h1").hide();

//Se puede hacer de una manera o otra
// $(document).ready(() => {});
// $(() => {});
$(() => {
  //Selectores:
  //id="el-1" => "#el-1"
  //Class="el-1" => ".el-1"
  //$("#el-1").hide();
  $(".hide-btn").click(() => {
    console.log("Ocultando...");
    // $("h1").hide();
    $("h1").fadeOut();
  });
  $(".show-btn").click(() => {
    console.log("Mostrando...");
    // $("h1").show();
    $("h1").fadeIn();
  });
  $("li").dblclick(() => {
    $("h1").css({ color: "green" });
  });
  $(".new-element").click(() => {
    // $("ul").append("<li>New Element</li>");//se añade al final
    $("ul").prepend("<li>New Element</li>"); //Se añade al principio
  });

  $("li").mouseenter((elem) => {
    console.log("Ha entrado el raton (Hover)");
    elem.target.style.color = "yellow";
  });

  $("li").mouseleave((elem) => {
    elem.target.style.color = "black";
  });
});
