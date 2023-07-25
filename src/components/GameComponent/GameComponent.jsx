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
        className={`gameComponent-btn--${content.style}`}
        key={nanoid()}
        onClick={() => setOptionId(option.nextText)}
      >
        {option.text}
      </button>
    );
  });

  return (
    <section className={`gameComponent-container--${content.style}`}>
      <header>
        <button
          className={`gameComponent-menuBtn--${content.style}`}
          onClick={() => setMenu(true)}
        >
          ⚙
        </button>
        <MenuModal
          title="Menu"
          openMenu={menu}
          closeMenu={() => setMenu(false)}
          style={content.style}
        >
          <Link className={`gameComponent-menuLink--${content.style}`} to="/">
            Start Screen
          </Link>
          <Link
            className={`gameComponent-menuLink--${content.style}`}
            to="/about"
          >
            About Screen
          </Link>
          <Link
            className={`gameComponent-menuLink--${content.style}`}
            to="/story"
          >
            Story Screen
          </Link>
        </MenuModal>
      </header>
      {content.mainImage && (
        <img
          src={content.mainImage}
          alt={content.mainImageAlt}
          className={`gameComponent-mainImage--${content.style}`}
        />
      )}
      <article className={`gameComponent-mainContent--${content.style}`}>
        {content.subText && <p>{content.subText}</p>}
        {content.characterImage && (
          <img
            src={content.characterImage}
            alt={content.characterImageAlt}
            className={`gameComponent-characterImage--${content.style}`}
          />
        )}
        <p className={`gameComponent-text--${content.style}`}>{content.text}</p>
      </article>
      <div className={`gameComponent-buttons--${content.style}`}>{buttons}</div>
    </section>
  );
}

GameComponent.propTypes = {
  content: PropTypes.object,
  setOptionId: PropTypes.func,
};

export default GameComponent;
