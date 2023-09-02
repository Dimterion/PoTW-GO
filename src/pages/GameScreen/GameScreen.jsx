import { useState, useEffect } from "react";
import GameScreenLoader from "../../components/Loaders/GameScreenLoader/GameScreenLoader";
import GameComponent from "../../components/GameComponent/GameComponent";
import gameContents from "../../utils/gameContents";

function GameScreen() {
  // LOCAL STORAGE SAVE TO ADD LATER
  // --->
  // const [optionId, setOptionId] = useState(
  //   localStorage.getItem("optionId") || gameContents[0].id
  // );
  //
  // localStorage.setItem("optionId", optionId);
  // <---
  // + TO ADD: BUTTONS TO SAVE/RESET PROGRESS (SET STATE TO THE INITIAL ONE); REPLACE STATE ON THE LINE BELOW WITH THIS ONE
  const [loading, setLoading] = useState(true);

  const [optionId, setOptionId] = useState(gameContents[93].id);

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
