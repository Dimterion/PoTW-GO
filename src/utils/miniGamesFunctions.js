export function rpsGameRoll(
  playerRoll,
  setDisplayRoll,
  setMessage,
  setPlayerWins,
  setOpponentWins
) {
  const rollNumber = Math.floor(Math.random() * 5);
  const rollName =
    rollNumber === 0
      ? "rock"
      : rollNumber === 1
      ? "paper"
      : rollNumber === 2
      ? "scissors"
      : rollNumber === 3
      ? "lizard"
      : "spock";

  if (
    (rollName === "paper" && playerRoll === "scissors") ||
    (rollName === "rock" && playerRoll === "paper") ||
    (rollName === "lizard" && playerRoll === "rock") ||
    (rollName === "spock" && playerRoll === "lizard") ||
    (rollName === "scissors" && playerRoll === "spock") ||
    (rollName === "lizard" && playerRoll === "scissors") ||
    (rollName === "paper" && playerRoll === "lizard") ||
    (rollName === "spock" && playerRoll === "paper") ||
    (rollName === "rock" && playerRoll === "spock") ||
    (rollName === "scissors" && playerRoll === "rock")
  ) {
    setMessage("You won!");
    setDisplayRoll({
      yourRoll: playerRoll,
      opponentRoll: rollName,
    });
    setPlayerWins((prevPlayerWins) => prevPlayerWins + 1);
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
    setOpponentWins((prevOpponentWins) => prevOpponentWins + 1);
  }
}
