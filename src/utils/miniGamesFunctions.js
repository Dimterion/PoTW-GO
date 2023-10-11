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
    setMessage("Round for Soai!");
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
    setMessage("Round for Evren!");
    setDisplayRoll({
      yourRoll: playerRoll,
      opponentRoll: rollName,
    });
    setOpponentWins((prevOpponentWins) => prevOpponentWins + 1);
  }
}

export function portalClick(
  color,
  colors,
  setColors,
  setPlayerWins,
  setResetPortals
) {
  if (colors.length === 4 && color === "red") {
    setColors((prevColors) => prevColors.slice(1));
  } else if (colors.length === 3 && color === "green") {
    setColors((prevColors) => prevColors.slice(1));
  } else if (colors.length === 2 && color === "blue") {
    setColors((prevColors) => prevColors.slice(1));
  } else if (colors.length === 1 && color === "alpha") {
    setColors((prevColors) => prevColors.slice(1));
  } else if (colors.length === 0 && color === "rgba") {
    setPlayerWins(1);
  } else {
    setColors(["red", "green", "blue", "alpha"]);
    setResetPortals(true);
  }
}
