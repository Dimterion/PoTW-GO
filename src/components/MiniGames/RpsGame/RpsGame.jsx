import { useState } from "react";
import { rpsGameRoll } from "../../../utils/miniGamesFunctions";
import "./rpsGame.css";

function RpsGame() {
  const [displayRoll, setDisplayRoll] = useState({
    yourRoll: "",
    opponentRoll: "",
  });
  const [message, setMessage] = useState("");
  const [winCondition, setWinCondition] = useState(0);
  const playerRolls = ["rock", "paper", "scissors"];
  const buttons = playerRolls.map((playerRoll) => {
    return (
      <button
        className="rpsGame-btn"
        key={playerRoll}
        disabled={winCondition === 3 && true}
        onClick={(event) => {
          rpsGameRoll(playerRoll, setDisplayRoll, setMessage, setWinCondition);
          event.target.parentNode.firstChild.style.animation =
            "rpsGame-article-slide 0.25s linear";
          setTimeout(() => {
            event.target.parentNode.firstChild.style.animation = "";
          }, 250);
        }}
      >
        {playerRoll === "rock" ? "✊" : playerRoll === "paper" ? "✋" : "✌"}
      </button>
    );
  });

  return (
    <article className="rpsGame-container">
      <div className="rpsGame-mainContent">
        <span>Your roll: {displayRoll.yourRoll}</span>
        <span>Opponent roll: {displayRoll.opponentRoll}</span>
        <span>Current game: {message}</span>
        <span>Wins: {winCondition}</span>
      </div>
      {winCondition === 3 && <span>You won!</span>}
      <div>{buttons}</div>
    </article>
  );
}

export default RpsGame;
