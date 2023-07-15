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

const emojiJamesWins = `<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/nu4DN4nKos3m0" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/james-bond-daniel-craig-skyfall-nu4DN4nKos3m0">via GIPHY</a></p>`;

const emojiJamesLoses = `<div style="width:100%;height:0;padding-bottom:76%;position:relative;"><iframe src="https://giphy.com/embed/Mz6oZpw81uKQg" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/james-bond-007-Mz6oZpw81uKQg">via GIPHY</a></p>`;

export {
  getRandomDiceArray,
  getPlaceholderHtml,
  emojiJamesLoses,
  emojiJamesWins,
};
