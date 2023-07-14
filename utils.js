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

export { getRandomDiceArray, getPlaceholderHtml };
