import { useState } from "react";
import PropTypes from "prop-types";
import { rpsGameRoll } from "../../../utils/miniGamesFunctions";
import rockImg from "../../../assets/images/rps_game_rock.jpg";
import paperImg from "../../../assets/images/rps_game_paper.jpg";
import scissorsImg from "../../../assets/images/rps_game_scissors.jpg";
import lizardImg from "../../../assets/images/rps_game_lizard.jpg";
import spockImg from "../../../assets/images/rps_game_spock.jpg";
import "./rpsGame.css";

function RpsGame({
  winCondition,
  setWinCondition,
  playerImg,
  playerImgAlt,
  opponentImg,
  opponentImgAlt,
}) {
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
          event.target.parentNode.parentNode.children[1].children[0].children[0].style.animation =
            "rpsGame-playerRollImg 0.25s linear";
          event.target.parentNode.parentNode.children[1].children[0].children[2].style.animation =
            "rpsGame-opponentRollImg 0.25s linear";
          setTimeout(() => {
            event.target.parentNode.parentNode.children[1].children[0].children[0].style.animation =
              "";
            event.target.parentNode.parentNode.children[1].children[0].children[2].style.animation =
              "";
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
      <div className="rpsGame-playersImages">
        <img className="rpsGame-playerImg" src={playerImg} alt={playerImgAlt} />
        <img
          className="rpsGame-opponentImg"
          src={opponentImg}
          alt={opponentImgAlt}
        />
      </div>
      <div className="rpsGame-mainContent">
        {displayRoll.yourRoll ? (
          <div className="rpsGame-rollsImages">
            <img
              className="rpsGame-playerRollImg"
              src={playerRollImage}
              alt={`Image of ${displayRoll.yourRoll}`}
            />
            <b>VS</b>
            <img
              className="rpsGame-opponentRollImg"
              src={opponentRollImage}
              alt={`Image of ${displayRoll.opponentRoll}`}
            />
          </div>
        ) : (
          <div>
            <h2>Rock, Paper, Scissros, Lizard, Spock!</h2>
            <h3>Choose wisely!</h3>
            <h4>Let the game begin!</h4>
          </div>
        )}
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
  playerImg: PropTypes.string,
  playerImgAlt: PropTypes.string,
  opponentImg: PropTypes.string,
  opponentImgAlt: PropTypes.string,
};

export default RpsGame;
