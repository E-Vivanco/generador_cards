/* eslint-disable */
import "bootstrap";
import "./style.css";
/*import "./assets/img/rigo-baby.jpg";*/
import "./assets/img/4geeks.ico";
/*"#filtro_cards" boton que activara random*/
function generaCartas() {
  let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
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
let var1 = document.querySelector("#paloI .palo_izq");
var1.innerHTML = generarpalos();
let var3 = document.querySelector("#numero_r .numero");
var3.innerHTML = generaCartas();
//document.body.appendChild(var3);
//console.log("aqui var4", var4);
//console.log("aqui la var3", var3);
//console.log(document.body.appendChild(var3));
let var2 = document.querySelector("#paloD .palo_der");
var2.innerHTML = generarpalos();

window.onload = function() {
  document.querySelector("#filtro_cards").addEventListener("click", () => {
    //var1.innerHTML = generarpalos();
    document.body.appendChild(var1);
    //var2.innerHTML = generarpalos();
    document.body.appendChild(var2);
    //var3.innerHTML = generaCartas();
    document.body.appendChild(var3);
  });
};
