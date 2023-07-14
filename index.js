import characterData from "./data.js";

const jamesBondArray = [
  characterData.daniel,
  characterData.pierce,
  characterData.sean,
];

const villainsArray = [];

document.getElementById("hero").innerHTML = `
        <div class="character-card">
          <h4 class="name"> ${characterData.daniel.name} </h4>
          <img class="avatar" src="${characterData.pierce.avatar}"/>
          <p class="health">health: <b> ${characterData.daniel.health} </b></p>
          
          <div class="dice-container">
            ${characterData.daniel.diceCount}
          </div>
        </div>     
      `;

document.getElementById("villain").innerHTML = `
        <div class="character-card">
          <h4 class="name"> ${characterData.pierce.name} </h4>
          <img class="avatar" src="${characterData.daniel.avatar}"/>
          <p class="health">health: <b> ${characterData.daniel.health} </b></p>
          
          <div class="dice-container">
            ${characterData.daniel.diceCount}
          </div>
        </div>     
      `;

// <div class="health-bar-outer">
//               <div class="health-bar-inner ${
//                 percent < 26 ? "danger" : ""
//               }"
//               style="width:${percent}%;">
//               </div>
//           </div>
