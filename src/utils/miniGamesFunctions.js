export function rpsRoll(
  playerRoll,
  setDisplayRoll,
  setMessage,
  setWinCondition
) {
  const rollNumber = Math.floor(Math.random() * 3);
  const rollName =
    rollNumber === 0 ? "Rock" : rollNumber === 1 ? "Paper" : "Scissors";

  if (
    (rollName === "Rock" && playerRoll === "Paper") ||
    (rollName === "Paper" && playerRoll === "Scissors") ||
    (rollName === "Scissors" && playerRoll === "Rock")
  ) {
    setMessage("You won!");
    setDisplayRoll({
      yourRoll: playerRoll,
      opponentRoll: rollName,
    });
    setWinCondition((prevWinCondition) => prevWinCondition + 1);
  } else if (rollName === playerRoll) {
    setMessage("Tie!");
    setDisplayRoll({
      yourRoll: playerRoll,
      opponentRoll: rollName,
    });
  } else {
    setMessage("Your opponent won!");
    setDisplayRoll({
      yourRoll: playerRoll,
      opponentRoll: rollName,
    });
  }
}
