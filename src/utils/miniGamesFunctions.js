export function rpsRoll(condition, setDisplayRoll, setMessage) {
  const rollNumber = Math.floor(Math.random() * 3);
  const roll =
    rollNumber === 0 ? "Rock" : rollNumber === 1 ? "Paper" : "Scissors";

  if (
    (roll === "Rock" && condition === "Paper") ||
    (roll === "Paper" && condition === "Scissors") ||
    (roll === "Scissors" && condition === "Rock")
  ) {
    setMessage("You won!");
    setDisplayRoll({
      yourRoll: condition,
      opponentRoll: roll,
    });
  } else if (roll === condition) {
    setMessage("Tie!");
    setDisplayRoll({
      yourRoll: condition,
      opponentRoll: roll,
    });
  } else {
    setMessage("Your opponent won!");
    setDisplayRoll({
      yourRoll: condition,
      opponentRoll: roll,
    });
  }
}
