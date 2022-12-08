/* eslint-disable */
import "bootstrap";
import "./style.css";
/*import "./assets/img/rigo-baby.jpg";*/
/*import "./assets/img/4geeks.ico";*/
/*"#filtro_cards" boton que activara random*/
function generaCartas() {
  let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let numer = parseInt(Math.floor(Math.random() * 11 + 1));
  return num[numer];
}
//console.log(generaCartas());

function generarpalos() {
  let cards1 = ["♠", "♣", "♦", "♥"];
  let tipo = parseInt(Math.floor(Math.random() * 3 + 1));
  return cards1[tipo];
}
//console.log(generarpalos())
let var1 = document.querySelector("#paloI");

let var3 = document.querySelector("#numero_r");

let var2 = document.querySelector("#paloD");

window.onload = function() {
  document.querySelector("#filtro_cards").addEventListener("click", () => {
    var1.innerHTML = generarpalos();
    var2.innerHTML = generarpalos();
    var3.innerHTML = generaCartas();
  });
};
