function getRandomDiceArray(numOfDices) {
  return new Array(numOfDices)
    .fill(0)
    .map(() => Math.floor(Math.random() * 6) + 1);
}

function getPlaceholderHtml(numOfDices) {
  return new Array(numOfDices)
    .fill(0)
    .map(
      (dice) => `
    <div class="placeholder-dice"></div>
    `
    )
    .join("");
}

const emojiJamesWins = `<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/nu4DN4nKos3m0" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a style="color:lightgrey" href="https://giphy.com/gifs/james-bond-daniel-craig-skyfall-nu4DN4nKos3m0">via GIPHY</a></p>`;

const emojiJamesLoses = `<div style="width:100%;height:0;padding-bottom:76%;position:relative;"><iframe src="https://giphy.com/embed/Mz6oZpw81uKQg" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/james-bond-007-Mz6oZpw81uKQg">via GIPHY</a></p>`;

const innerHtmlJames = `
<div class="choose-james-container">
  <h1>Who shall be YOUR James Bond?</h1>
  <form class="radio-button-container" id="choose-james-form">
    <div class="radio">
      <input id="daniel" type="radio" value="daniel" name="james" checked>
      <label for="daniel">Daniel Craig</label>
    </div>
    <div class="radio">
      <input id="pierce" type="radio" value="pierce" name="james">
      <label for="pierce">Pierce Brosnan</label>
    </div>
    <div class="radio">
      <input id="sean" type="radio" value="sean" name="james">
      <label for="sean">Sean Connery</label>
    </div>
    <button type="submit" id="choose-james-btn">OK</button>
  </form>
</div>
`;

export {
  getRandomDiceArray,
  getPlaceholderHtml,
  emojiJamesLoses,
  emojiJamesWins,
  innerHtmlJames,
};
