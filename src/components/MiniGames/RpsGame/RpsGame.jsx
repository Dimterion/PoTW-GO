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
  const rolls = ["Rock", "Paper", "Scissors"];
  const buttons = rolls.map((roll) => {
    return (
      <button
        className="rpsGame-btn"
        key={roll}
        disabled={winCondition === 3 && true}
        onClick={(event) => {
          rpsGameRoll(roll, setDisplayRoll, setMessage, setWinCondition);
          event.target.parentNode.firstChild.style.animation =
            "rpsGame-article-slide 0.25s linear";
          setTimeout(() => {
            event.target.parentNode.firstChild.style.animation = "";
          }, 250);
        }}
      >
        {roll === "Rock" ? "✊" : roll === "Paper" ? "✋" : "✌"}
      </button>
    );
  });

  return (
    <article>
      <div>
        Your roll: {displayRoll.yourRoll}
        Opponent roll: {displayRoll.opponentRoll}
        Result: {message}
      </div>
      {buttons}
      {winCondition === 3 && <span>You won!</span>}
    </article>
  );
}

export default RpsGame;
