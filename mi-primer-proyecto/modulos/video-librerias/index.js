//Instalar axios hace llamadas a servicios externos
import axios from "axios";
axios
  .get("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(function (response) {
    // handle success
    console.log("Sucess!");
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("error");
    console.log(error);
  })
  .then(function () {
    // always executed
  });
