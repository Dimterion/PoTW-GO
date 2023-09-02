import { useState } from "react";
import PropTypes from "prop-types";
import { rpsGameRoll } from "../../../utils/miniGamesFunctions";
import rockImg from "../../../assets/images/rps_game_rock.jpg";
import paperImg from "../../../assets/images/rps_game_paper.jpg";
import scissorsImg from "../../../assets/images/rps_game_scissors.jpg";
import lizardImg from "../../../assets/images/rps_game_lizard.jpg";
import spockImg from "../../../assets/images/rps_game_spock.jpg";
import "./rpsGame.css";

function RpsGame({ winCondition, setWinCondition }) {
  const [displayRoll, setDisplayRoll] = useState({
    yourRoll: "",
    opponentRoll: "",
  });
  const [message, setMessage] = useState("");

  const playerRolls = ["rock", "paper", "scissors", "lizard", "spock"];

  const playerRollImage =
    displayRoll.yourRoll === "rock"
      ? rockImg
      : displayRoll.yourRoll === "paper"
      ? paperImg
      : displayRoll.yourRoll === "scissors"
      ? scissorsImg
      : displayRoll.yourRoll === "lizard"
      ? lizardImg
      : spockImg;

  const opponentRollImage =
    displayRoll.opponentRoll === "rock"
      ? rockImg
      : displayRoll.opponentRoll === "paper"
      ? paperImg
      : displayRoll.opponentRoll === "scissors"
      ? scissorsImg
      : displayRoll.opponentRoll === "lizard"
      ? lizardImg
      : spockImg;

  const buttons = playerRolls.map((playerRoll) => {
    return (
      <button
        className="rpsGame-btn"
        key={playerRoll}
        disabled={winCondition === 3 && true}
        onClick={(event) => {
          rpsGameRoll(playerRoll, setDisplayRoll, setMessage, setWinCondition);
          event.target.parentNode.parentNode.firstChild.style.animation =
            "rpsGame-article-slide 0.25s linear";
          setTimeout(() => {
            event.target.parentNode.parentNode.firstChild.style.animation = "";
          }, 250);
        }}
      >
        {playerRoll === "rock"
          ? "✊"
          : playerRoll === "paper"
          ? "✋"
          : playerRoll === "scissors"
          ? "✌"
          : playerRoll === "lizard"
          ? "🦎"
          : "🖖"}
      </button>
    );
  });

  return (
    <article className="rpsGame-container">
      <div className="rpsGame-mainContent">
        {displayRoll.yourRoll && (
          <>
            <img
              className="rpsGame-image"
              src={playerRollImage}
              alt={`Image of ${displayRoll.yourRoll}`}
            />
            <img
              className="rpsGame-image"
              src={opponentRollImage}
              alt={`Image of ${displayRoll.opponentRoll}`}
            />
          </>
        )}
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

RpsGame.propTypes = {
  winCondition: PropTypes.number,
  setWinCondition: PropTypes.func,
};

export default RpsGame;
