/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("paloizq va aqui", paloizq);
  let palo1 = document.querySelector("#paloI");
  let paloizq = palo1.children[0].children[0];
  paloizq.addEventListener("click", function() {
    ubicar_palo_i();
  });

  //console.log("paloder va aqui", paloder);
  let palo2 = document.querySelector("#paloD");
  let paloder = palo2.children[0].children[0];
  paloder.addEventListener("click", function() {
    ubicar_palo_d();
  });

  //console.log("El numero va aqui", numero);
  let num_random = document.querySelector("#numero_r");
  let numero = num_random.children[0].children[0];
  numero.addEventListener("click", function() {
    num_rand();
  });

  //console.log(num_random.children[0].children[0]);
  //  num_rand();
  //console.log(palo2.children[0].children[0]);
  //let paloder = palo2.children[0].children[1];
  //console.log(paloder);
  //console.log("Hello Rigo from the console!");
};
