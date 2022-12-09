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

//function cargar_cards() {}
window.onload = function() {
  //console.log(valor);
  document.querySelector("#filtro_cards").addEventListener("click", () => {
    let valor = generarpalos();
    if (valor === "♦" || valor === "♥") {
      document.querySelector("#paloI .palo_izq").style.color = "red";
      document.querySelector("#paloD .palo_der").style.color = "red";
      document.querySelector("#paloI .palo_izq").innerHTML = valor;
      document.querySelector("#paloD .palo_der").innerHTML = valor;
      document.querySelector("#numero_r .numero").innerHTML = generaCartas();
    } else {
      document.querySelector("#paloI .palo_izq").style.color = "black";
      document.querySelector("#paloD .palo_der").style.color = "black";
      document.querySelector("#paloI .palo_izq").innerHTML = valor;
      document.querySelector("#paloD .palo_der").innerHTML = valor;
      document.querySelector("#numero_r .numero").innerHTML = generaCartas();
    }
    // document.querySelector("#paloD .palo_der").innerHTML = generarpalos();
  });
};
