// Function simulates a dice that can fail (fall off the table)
// Function produces a random number between 1 and 7
// 1 - 6: Dice value
// 7: Dice falls off the table
// Random number evaluation is delayed by 1 second
function rollDice() {
  return new Promise((resolve, reject) => {
    console.log("*** Rolling the dice...");
    setTimeout(() => {
      let diceValue = Math.floor(Math.random() * 7) + 1;
      console.log(`*** Dice value: ${diceValue}`);
      if (diceValue === 7) {
        reject(new Error("*** Dice fell off the table"));
      } else {
        resolve(diceValue);
      }
    }, 1000);
  });
}

// Roll dice twice and calculate the sum of the two dice values
sum = 0;
(async () => {
  try {
    sum = await rollDice();
    sum += await rollDice();
    console.log(`*** Sum of two dice rolls: ${sum}`);
  } catch (err) {
    console.error(err.message);
  }
})();
