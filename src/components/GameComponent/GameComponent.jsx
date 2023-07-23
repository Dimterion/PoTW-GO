import { useState } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import MenuModal from "../../components/Modals/MenuModal/MenuModal";
import "./gameComponent.css";

function GameComponent({ content, setOptionId }) {
  const [menu, setMenu] = useState(false);

  const buttons = content.options.map((option) => {
    return (
      <button
        className="option"
        key={nanoid()}
        onClick={() => setOptionId(option.nextText)}
      >
        {option.text}
      </button>
    );
  });

  return (
    <section className={`gameComponent-container--${content.style}`}>
      <nav>
        <button onClick={() => setMenu(true)}>Menu</button>
        <MenuModal
          title="Menu"
          openMenu={menu}
          closeMenu={() => setMenu(false)}
        >
          <Link to="/">Start Screen</Link>
        </MenuModal>
      </nav>
      {content.subText && <p>{content.subText}</p>}
      <p>{content.text}</p>
      <div>{buttons}</div>
    </section>
  );
}

GameComponent.propTypes = {
  content: PropTypes.object,
  setOptionId: PropTypes.func,
};

export default GameComponent;
