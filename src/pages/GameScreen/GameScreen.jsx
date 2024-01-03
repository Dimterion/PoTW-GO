import { useState, useEffect } from "react";
import GameScreenLoader from "../../components/Loaders/GameScreenLoader/GameScreenLoader";
import GameComponent from "../../components/GameComponent/GameComponent";
import gameContents from "../../utils/gameContents";

function GameScreen() {
  // Local storage save - consider adding at some point + buttons to save/reset progress (set state to the initial one).
  // --->
  // const [optionId, setOptionId] = useState(
  //   localStorage.getItem("optionId") || gameContents[0].id
  // );
  //
  // localStorage.setItem("optionId", optionId);
  // <---
  // Replace state with the one above; need to add various conditions to the state as well (to track conditions match during the game).
  const [loading, setLoading] = useState(true);
  const [optionId, setOptionId] = useState(gameContents[0].id);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return loading ? (
    <GameScreenLoader content={gameContents[optionId]} />
  ) : (
    <GameComponent content={gameContents[optionId]} setOptionId={setOptionId} />
  );
}

export default GameScreen;
