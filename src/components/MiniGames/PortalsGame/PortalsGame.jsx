import { useState } from "react";
import PropTypes from "prop-types";
import { portalClick } from "../../../utils/miniGamesFunctions";
import "./portalsGame.css";

function PortalsGame({ setPlayerWins, text }) {
  const [colors, setColors] = useState(["red", "green", "blue", "alpha"]);
  const [showAlphaPortal, setShowAlphaPortal] = useState(true);
  const [resetPortals, setResetPortals] = useState(false);

  return (
    <article className="portalsGame-container">
      {!resetPortals ? (
        <div className="portalsGame-portalsButtons">
          {colors.includes("alpha") && (
            <button
              className="portalsGame-portalBtn portalsGame-portalAlphaBtn"
              onClick={() =>
                portalClick(
                  "alpha",
                  colors,
                  setColors,
                  setPlayerWins,
                  setResetPortals
                )
              }
            ></button>
          )}
          {colors.includes("blue") && (
            <button
              className="portalsGame-portalBtn  portalsGame-portalBlueBtn"
              onClick={() =>
                portalClick(
                  "blue",
                  colors,
                  setColors,
                  setPlayerWins,
                  setResetPortals
                )
              }
            ></button>
          )}
          {colors.includes("green") && (
            <button
              className="portalsGame-portalBtn  portalsGame-portalGreenBtn"
              onClick={() =>
                portalClick(
                  "green",
                  colors,
                  setColors,
                  setPlayerWins,
                  setResetPortals
                )
              }
            ></button>
          )}
          {colors.includes("red") && (
            <button
              className="portalsGame-portalBtn portalsGame-portalRedBtn"
              onClick={() =>
                portalClick(
                  "red",
                  colors,
                  setColors,
                  setPlayerWins,
                  setResetPortals
                )
              }
            ></button>
          )}
        </div>
      ) : (
        <button onClick={() => setResetPortals(false)}>Try again.</button>
      )}
      {colors.length === 0 && showAlphaPortal && (
        <button
          className="portalsGame-portalBtn portalsGame-portalRgbaBtn"
          onClick={() => {
            portalClick(
              "rgba",
              colors,
              setColors,
              setPlayerWins,
              setResetPortals
            );
            setShowAlphaPortal(false);
          }}
        ></button>
      )}
      {colors.length === 0 && !showAlphaPortal && <p>{text}</p>}
    </article>
  );
}

PortalsGame.propTypes = {
  setPlayerWins: PropTypes.func,
  text: PropTypes.string,
};

export default PortalsGame;
