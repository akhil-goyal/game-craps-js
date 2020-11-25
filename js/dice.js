// This function returns a random Number between/including 1 and "sides" (defaults to 6)
function getRandomDiceRoll(sides=6) {
  return Math.floor( Math.random() * sides ) + 1
}
