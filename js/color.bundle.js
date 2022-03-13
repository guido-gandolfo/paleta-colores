//version 5.9 para javascript viejo
"use strict";

var color = document.querySelector("#color");
var salida = document.querySelector("#salida"); //evento

color.addEventListener("input", function () {
  var valor = color.value;
  console.log(valor); // coloca el codigo del color que se va seleccionando

  salida.innerHTML = valor;
  salida.style.background = valor;
});