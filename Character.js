import { getRandomDiceArray, getPlaceholderHtml } from "./utils.js";

class Character {
  constructor(data) {
    Object.assign(this, data);
    this.currentDiceScore = [];
    this.diceHtml = getPlaceholderHtml(this.diceCount);
    this.isDead = false;
    this.maxHealth = this.health;
  }

  getCurrentDiceScore() {
    return (this.currentDiceScore = getRandomDiceArray(this.diceCount));
  }

  getDamage() {
    return this.currentDiceScore.reduce((sum, num) => sum + num);
  }

  getDiceHtml() {
    let diceArray = this.getCurrentDiceScore();
    return (this.diceHtml = diceArray
      .map(
        (num) => `
    <img src="./images/${num}die.jpg" alt="${num}" class="die"></img>`
      )
      .join(""));
  }

  getCharacterHtml() {
    const { name, avatar, health, maxHealth, imgBy } = this;
    const percent = (health / maxHealth) * 100;
    return `
        <div class="character-card">
          <h4 class="name">${name} </h4>
          <img class="avatar" src="${avatar}" alt="${name}"/>
          <p class="health">health: <b> ${health} </b></p>
          <div class="health-bar-outer">
              <div class="health-bar-inner ${percent < 30 ? "danger" : ""}"
              style="width:${percent}%;">
              </div>
          </div>
          <div class="dice-container">
            ${this.diceHtml}
          </div> 
        </div>  
        <div class="pic-author">Image:${imgBy}</div>  
    `;
  }
}

export default Character;
