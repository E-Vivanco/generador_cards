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
  paloizq.addEventListener("onload", function() {
    ubicar_palo_i(paloizq);
  });

  //console.log("paloder va aqui", paloder);
  let palo2 = document.querySelector("#paloD");
  let paloder = palo2.children[0].children[0];
  paloder.addEventListener("onload", function() {
    ubicar_palo_d();
  });

  //console.log("El numero va aqui", numero);
  let num_random = document.querySelector("#numero_r");
  let numero1 = num_random.children[0].children[0];
  numero1.addEventListener("onload", function() {
    number();
  });
  //p_iz = Math.floor(Math.random() * 10 + 1);
  //console.log(p_iz);
  //function ubicar_palo_i(val) {
  //  p_iz = Math.floor(Math.random() * 10 + 1);
  //  val = paloizq.appendChild(p_iz);
  //  console.log(val);
  //}
};

let p_iz = Math.floor(Math.random() * 10 + 4);
console.log("quevalor?", p_iz);
function ubicar_palo_i(val) {
  p_iz = Math.floor(Math.random() * 10 + 4);
  val = paloizq.body.appendChild(p_iz);
  console.log(val);
}
function ubicar_palo_d() {
  paloder;
}
function number() {
  numero1;
}
