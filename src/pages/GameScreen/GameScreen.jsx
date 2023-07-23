import { useState } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import MenuModal from "../../components/Modals/MenuModal/MenuModal";
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
  const [menu, setMenu] = useState(false);
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

  return (
    <section>
      <button onClick={() => setMenu(true)}>Menu</button>
      <MenuModal title="Menu" openMenu={menu} closeMenu={() => setMenu(false)}>
        <Link to="/">Start Screen</Link>
      </MenuModal>
      {contents[optionId]}
    </section>
  );
}

export default GameScreen;
