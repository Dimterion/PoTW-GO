import { useState } from "react";
import { rpsRoll } from "../../../utils/miniGamesFunctions";
import "./rps.css";

function Rps() {
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
        key={roll}
        onClick={() => {
          rpsRoll(roll, setDisplayRoll, setMessage, setWinCondition);
        }}
      >
        {roll}
      </button>
    );
  });

  return (
    <section>
      <article>
        Your roll: {displayRoll.yourRoll}
        <br></br>Opponent roll: {displayRoll.opponentRoll}
        <br></br>
        Result: {message}
      </article>
      <br></br>
      {winCondition === 3 ? <article>You won!</article> : buttons}
      <br></br>
      <br></br>
    </section>
  );
}

export default Rps;
