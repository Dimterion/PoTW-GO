import { useState } from "react";
import "./portalsGame.css";

function PortalsGame() {
  const [colors, setColors] = useState(["red", "green", "blue", "alpha"]);
  const [resetPortals, setResetPortals] = useState(false);

  function portalClick(color) {
    if (colors.length === 4 && color === "red") {
      setColors((prevColors) => prevColors.slice(1));
    } else if (colors.length === 3 && color === "green") {
      setColors((prevColors) => prevColors.slice(1));
    } else if (colors.length === 2 && color === "blue") {
      setColors((prevColors) => prevColors.slice(1));
    } else if (colors.length === 1 && color === "alpha") {
      setColors((prevColors) => prevColors.slice(1));
    } else if (colors.length === 0 && color === "rgba") {
      console.log("win");
    } else {
      setColors(["red", "green", "blue", "alpha"]);
      setResetPortals(true);
    }
  }

  return (
    <article className="portalsGame-container">
      {!resetPortals ? (
        <div className="portalsGame-portalsButtons">
          {colors.includes("alpha") && (
            <button
              className="portalsGame-portalBtn portalsGame-portalAlphaBtn"
              onClick={() => portalClick("alpha")}
            ></button>
          )}
          {colors.includes("blue") && (
            <button
              className="portalsGame-portalBtn  portalsGame-portalBlueBtn"
              onClick={() => portalClick("blue")}
            ></button>
          )}
          {colors.includes("green") && (
            <button
              className="portalsGame-portalBtn  portalsGame-portalGreenBtn"
              onClick={() => portalClick("green")}
            ></button>
          )}
          {colors.includes("red") && (
            <button
              className="portalsGame-portalBtn portalsGame-portalRedBtn"
              onClick={() => portalClick("red")}
            ></button>
          )}
        </div>
      ) : (
        <button onClick={() => setResetPortals(false)}>Try again.</button>
      )}
      {colors.length === 0 && (
        <button
          className="portalsGame-portalBtn portalsGame-portalRgbaBtn"
          onClick={() => portalClick("rgba")}
        ></button>
      )}
    </article>
  );
}

export default PortalsGame;
