import { useState } from "react";
import { nanoid } from "nanoid";
import GameComponent from "../components/GameComponent";
import gameContents from "../utils/gameContents";

function GameScreen() {
  const [optionId, setOptionId] = useState(gameContents[0].id);

  const contents = gameContents.map((content) => {
    return (
      <GameComponent
        key={nanoid()}
        content={content}
        setOptionId={setOptionId}
      />
    );
  });

  return <section>{contents[optionId]}</section>;
}

export default GameScreen;
