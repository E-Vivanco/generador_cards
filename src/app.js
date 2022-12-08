/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document
    .querySelector("#paloI", "#paloD", "#filtro_cards")
    .addEventListener("cargar_pagina()", () => {
      document.querySelector("#numero_r").innerHTML = generaCartas();
    });
};
let generaCartas = () => {
  let cards1 = ["♠", "♣", "♦", "♥"];
  let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let numer = parseInt(Math.round(Math.random() * 13));
  let tipo = parseInt(Math.round(Math.random() * 4));

  return cards1[tipo] + num[numer];
};

/*  //write your code here
  //console.log("paloizq va aqui", paloizq);
  let palo1 = document.querySelector("#paloI");
  let paloizq = palo1.children[0].children[0];
  paloizq.addEventListener("onload", function() {
    ubicar_palo_i(paloizq);
    ubicar_palo_d(paloizq);
  });

  //console.log("paloder va aqui", paloder);
  //let palo2 = document.querySelector("#paloD");
  //let paloder = palo2.children[0].children[0];
  //paloder.addEventListener("onload", function() {
  //  ubicar_palo_d();
  //});

  //console.log("El numero va aqui", numero);
  let num_random = document.querySelector("#numero_r");
  let numero1 = num_random.children[0].children[0];
  numero1.addEventListener("onload", function() {
    number(numero1);
  });
  //p_iz = Math.floor(Math.random() * 10 + 1);
  //console.log(p_iz);
  //function ubicar_palo_i(val) {
  //  p_iz = Math.floor(Math.random() * 10 + 1);
  //  val = paloizq.appendChild(p_iz);
  //  console.log(val);
  //*/

/*function cargar_pagina(ubicar_palo_i, number) {
    function ubicar_palo_i(val1) {
      let p_iz = Math.floor(Math.random() * 4 + 1);
      let val2 = val1.body.appendChild(p_iz);

      let carta = document.createElement("div");
      carta.className = "card_heart";
      console.log(carta);
      let palo = carta[p_iz];
      return val2;
    }
    function ubicar_palo_d(val2) {
      let p_iz = Math.floor(Math.random() * 4 + 1);
      let val3 = val2.body.appendChild(p_iz);
      let palo = carta[p_iz];
    }
    function number(val0) {
      let p_iz = Math.floor(Math.random() * 10 + 4);
      let val4 = val0.body.appendChild(p_iz);
      return val3;
    }
  }
*/

//let p_iz = Math.floor(Math.random() * 4 + 1);
//console.log("quevalor?", p_iz);
//let carta = document.createElement("div");
//console.log((carta.className = "card_heart"));
//console.log(document.body.appendChild(carta));
//console.log(document.#paloD.append(1))
//carta.className = "card_heart";
//console.log(carta);
