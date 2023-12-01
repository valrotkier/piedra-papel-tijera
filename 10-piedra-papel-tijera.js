function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Ganadas: ${puntaje.ganadas}, Perdidas: ${puntaje.perdidas}, Empates: ${puntaje.empates}`;
}
//nuevo
let puntaje = JSON.parse(localStorage.getItem("puntaje")) || {
  ganadas: 0,
  perdidas: 0,
  empates: 0,
};
/* Este codigo es lo mismo que arriba dsp del ||
if (!puntaje) {
    puntaje = {
        ganadas: 0,
        perdidas: 0,
        empates: 0,
    }*/
updateScoreElement();

//fnuevo
function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "piedra";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "papel";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "tijera";
  }

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let resultado = "";
  if (playerMove === "tijera") {
    if (computerMove === "piedra") {
      resultado = "PERDISTE";
    } else if (computerMove === "papel") {
      resultado = "GANASTE";
    } else if (computerMove === "tijera") {
      resultado = "EMPATE";
    }
  } else if (playerMove === "papel") {
    if (computerMove === "piedra") {
      resultado = "GANASTE";
    } else if (computerMove === "papel") {
      resultado = "EMPATE";
    } else if (computerMove === "tijera") {
      resultado = "PERDISTE";
    }
  } else if (playerMove === "piedra") {
    if (computerMove === "piedra") {
      resultado = "EMPATE";
    } else if (computerMove === "papel") {
      resultado = "PERDISTE";
    } else if (computerMove === "tijera") {
      resultado = "GANASTE";
    }
  }

  //nuevo
  if (resultado === "GANASTE") {
    puntaje.ganadas += 1;
  } else if (resultado === "PERDISTE") {
    puntaje.perdidas += 1;
  } else {
    puntaje.empates += 1;
  }
  localStorage.setItem("puntaje", JSON.stringify(puntaje));

  updateScoreElement();
  //nuevo

  //agarro el paragraph y muestro el resultado
  document.querySelector(".js-result").innerHTML = resultado;

  document.querySelector(".js-moves").innerHTML = `Vos
<img src="./img/${playerMove.toLowerCase()}-emoji.png" class="move-icon">
<img src="./img/${computerMove.toLowerCase()}-emoji.png" class="move-icon">
Computadora`;

  `Elegiste ${playerMove} - Computadora eligio ${computerMove}.`;
} //nuevo al final del alert
