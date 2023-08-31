export function rpsGameRoll(
  playerRoll,
  setDisplayRoll,
  setMessage,
  setWinCondition
) {
  const rollNumber = Math.floor(Math.random() * 3);
  const rollName =
    rollNumber === 0 ? "rock" : rollNumber === 1 ? "paper" : "scissors";

  if (
    (rollName === "rock" && playerRoll === "paper") ||
    (rollName === "paper" && playerRoll === "scissors") ||
    (rollName === "scissors" && playerRoll === "rock")
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
