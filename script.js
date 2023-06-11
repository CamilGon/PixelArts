const secaoCores = document.getElementById("color-palette");
const quadro = document.getElementById("pixel-board");

function pegaSelecao(target) {
    target.classList.add("selected");
    seleciona = document.querySelector(".selected");
  }
function tiraSelecao() {
  seleciona.classList.remove("selected");
}

let capCor;
function armazenaCor() {
  const armazena = window.getComputedStyle(seleciona, null).getPropertyValue('background-color'); // https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
  return armazena;
}
secaoCores.addEventListener("click", (event) => {
  tiraSelecao();
  pegaSelecao(event.target);
  capCor = armazenaCor();
});

function pintaPixel(armazena) {
  const divPixel = armazena;
  if (armazena.className === "pixel") {
    divPixel.style.backgroundColor = capCor;
  }
}
let seleciona = document.getElementsByClassName("selected")[0];
quadro.addEventListener("click", (event) => {
  pintaPixel(event.target);
});

const limpar = document.getElementById("clear-board");
function lpixel() {
  const quadrados = document.getElementsByClassName("pixel");
  for (let index = 0; index < quadrados.length; index += 1) {
    quadrados[index].style.backgroundColor = '';
  }
}
capCor = armazenaCor();
limpar.addEventListener("click", () => {
  lpixel();
});
