import characterData from "./data.js";
import Character from "./Character.js";

const james = new Character(characterData.pierce);
const villain = new Character(characterData.sean);
const shot = new Audio("./shot.mp3");
const bond = new Audio("./bond.mp3");
const attackBtn = document.getElementById("attack-button");

window.onload = bond.play();

document.addEventListener("click", function (e) {
  if (e.target === attackBtn) {
    attack();
  }
  if (e.target.id === "play-again") {
    window.location.reload();
  }
});

//endless music loop
// bond.addEventListener(
//   "ended",
//   function () {
//     this.currentTime = 0;
//     this.play();
//   },
//   false
// );

render();

function render() {
  document.getElementById("hero").innerHTML = james.getCharacterHtml();
  document.getElementById("villain").innerHTML = villain.getCharacterHtml();
}

function playSound() {
  shot.currentTime = 0;
  shot.play();
}

function attack() {
  playSound();
  setTimeout(function () {
    rollDices();
    updateHealth();
    checkIfDead();
    render();
  }, 300);
}

function rollDices() {
  james.getDiceHtml();
  villain.getDiceHtml();
}

function updateHealth() {
  james.health = james.health - villain.getDamage();
  villain.health = villain.health - james.getDamage();
}

function checkIfDead() {
  if (james.health < 1) {
    james.isDead = true;
    james.health = 0;
  }
  if (villain.health < 1) {
    villain.isDead = true;
    villain.health = 0;
  }

  if (james.isDead || villain.isDead) endGame();
}

function endGame() {
  attackBtn.disabled = true;
  setTimeout(renderEndMessage, 1500);
}

function renderEndMessage() {
  let message;
  let emoji;

  if (james.isDead) {
    message = "James has been killed";
    emoji = "☠️";
  }
  if (villain.isDead) {
    message = "James has defeated all villains";
    emoji = "👍";
  }
  attackBtn.style.display = "none";
  document.querySelector("main").innerHTML = `
    <div class="end-game" style="background-color: ${
      james.isDead ? "red" : "blue"
    }">
      <h2>GAME OVER</h2>
      <h1>${message}</h1>
      <div class="end-emoji">${emoji}</div><br>
      <button id="play-again">Play again</button>
    </div>`;
}
