import { useState } from "react";
import PropTypes from "prop-types";
import { rpsGameRoll } from "../../../utils/miniGamesFunctions";
import rockImg from "../../../assets/images/rps_game_rock.jpg";
import paperImg from "../../../assets/images/rps_game_paper.jpg";
import scissorsImg from "../../../assets/images/rps_game_scissors.jpg";
import lizardImg from "../../../assets/images/rps_game_lizard.jpg";
import spockImg from "../../../assets/images/rps_game_spock.jpg";
import questionMark from "../../../assets/images/question_mark.jpg";
import "./rpsGame.css";

function RpsGame({
  playerWins,
  setPlayerWins,
  opponentWins,
  setOpponentWins,
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
      : displayRoll.yourRoll === "spock"
      ? spockImg
      : questionMark;

  const opponentRollImage =
    displayRoll.opponentRoll === "rock"
      ? rockImg
      : displayRoll.opponentRoll === "paper"
      ? paperImg
      : displayRoll.opponentRoll === "scissors"
      ? scissorsImg
      : displayRoll.opponentRoll === "lizard"
      ? lizardImg
      : displayRoll.opponentRoll === "spock"
      ? spockImg
      : questionMark;

  const buttons = playerRolls.map((playerRoll) => {
    return (
      <button
        className="rpsGame-rollBtn"
        key={playerRoll}
        disabled={(playerWins === 2 || opponentWins === 2) && true}
        onClick={(event) => {
          rpsGameRoll(
            playerRoll,
            setDisplayRoll,
            setMessage,
            setPlayerWins,
            setOpponentWins
          );
          event.target.parentNode.parentNode.children[0].children[0].style.animation =
            "rpsGame-playerRollImg 0.5s linear";
          event.target.parentNode.parentNode.children[0].children[1].style.animation =
            "rpsGame-opponentRollImg 0.5s linear";
          setTimeout(() => {
            event.target.parentNode.parentNode.children[0].children[0].style.animation =
              "";
            event.target.parentNode.parentNode.children[0].children[1].style.animation =
              "";
          }, 500);
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
      <div className="rpsGame-playersInfo">
        <div className="rpsGame-playerInfo">
          <img
            className="rpsGame-playerImg"
            src={playerImg}
            alt={playerImgAlt}
          />
          <span className="rpsGame-playerScore">{playerWins}</span>
        </div>
        <div className="rpsGame-opponentInfo">
          <img
            className="rpsGame-opponentImg"
            src={opponentImg}
            alt={opponentImgAlt}
          />
          <span className="rpsGame-opponentScore">{opponentWins}</span>
        </div>
      </div>
      <div className="rpsGame-mainContent">
        {displayRoll.yourRoll ? (
          <div>
            <div className="rpsGame-rollsImages">
              <img
                className="rpsGame-playerRollImg"
                src={playerRollImage}
                alt={`Image of ${displayRoll.yourRoll}`}
              />
              <img
                className="rpsGame-opponentRollImg"
                src={opponentRollImage}
                alt={`Image of ${displayRoll.opponentRoll}`}
              />
            </div>
            <div>{buttons}</div>
          </div>
        ) : (
          <div>
            <h2>Rock, Paper, Scissros, Lizard, Spock!</h2>
            <h3>Choose wisely!</h3>
            <button
              className="rpsGame-startBtn"
              onClick={() => {
                setDisplayRoll({
                  yourRoll: " ",
                  opponentRoll: " ",
                });
              }}
            >
              Start
            </button>
          </div>
        )}
        <span>{message}</span>
      </div>
      {playerWins === 2 && <span>Soai wins! Flawless victory.</span>}
      {opponentWins === 2 && <span>Evren wins! Gnomality.</span>}
      {(playerWins === 2 || opponentWins === 2) && (
        <button
          className="rpsGame-restartBtn"
          onClick={() => {
            setPlayerWins(0);
            setOpponentWins(0);
            setMessage("");
            setDisplayRoll({
              yourRoll: "",
              opponentRoll: "",
            });
          }}
        >
          Play Again
        </button>
      )}
    </article>
  );
}

RpsGame.propTypes = {
  playerWins: PropTypes.number,
  setPlayerWins: PropTypes.func,
  opponentWins: PropTypes.number,
  setOpponentWins: PropTypes.func,
  playerImg: PropTypes.string,
  playerImgAlt: PropTypes.string,
  opponentImg: PropTypes.string,
  opponentImgAlt: PropTypes.string,
};

export default RpsGame;
