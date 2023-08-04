import { useState } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import MenuModal from "../../components/Modals/MenuModal/MenuModal";
import "./Styles/gameComponentPrologue.css";
import "./Styles/gameComponentLevelOne.css";

function GameComponent({ content, setOptionId }) {
  const [menu, setMenu] = useState(false);

  const buttons = content.options.map((option) => {
    return (
      <button
        className={
          option.optional
            ? `gameComponent-${option.optional}Btn--${content.style}`
            : option.btnEffect
            ? `gameComponent-${option.btnEffect}Btn--${content.style}`
            : `gameComponent-btn--${content.style}`
        }
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
        {content.subImage && (
          <img
            src={content.subImage}
            alt={content.subImageAlt}
            className={`gameComponent-subImage--${content.style}`}
          />
        )}
        {content.subText && (
          <p className={`gameComponent-subText--${content.style}`}>
            {content.subText}
          </p>
        )}
        {content.characterImage && (
          <img
            src={content.characterImage}
            alt={content.characterImageAlt}
            className={
              content.effect
                ? content.effect
                : `gameComponent-characterImage--${content.style}`
            }
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

/*

Example of multiple optional dialogs implementation.

Need to change gameContents.js objects in the 
following format (to add properties):

subOptions: [
      {
        text: "Text1",
        subOptionText: "Test1",
      },
      {
        text: "Text2",
        subOptionText: "Test2",
      },
      {
        text: "Text3",
        subOptionText: "Test3",
      },
    ],
options: [
  {
    text: `Text`,
    nextText: 0,
  },
],

Then - add optButtons to the GameComponent:

function GameComponent({ content, setOptionId }) {
  const [menu, setMenu] = useState(false);
  const [subOption, setSubOption] = useState();

  const optButtons =
    content.subOptions &&
    content.subOptions.map((subOption) => {
      return (
        <button
          className={`gameComponent-btn--${content.style}`}
          key={nanoid()}
          onClick={() => {
            setSubOption(subOption.subOptionText);
            content.subOptions = content.subOptions.filter(
              (opt) => opt !== subOption
            );
          }}
        >
          {subOption.text}
        </button>
      );
    });

  const buttons = content.options.map((option) => {
    return (
      <button
        className={`gameComponent-btn--${content.style}`}
        key={nanoid()}
        onClick={() => {
          setOptionId(option.nextText);
          setSubOption();
        }}
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
        {content.subImage && (
          <img
            src={content.subImage}
            alt={content.subImageAlt}
            className={`gameComponent-subImage--${content.style}`}
          />
        )}
        {content.subText && (
          <p className={`gameComponent-subText--${content.style}`}>
            {content.subText}
          </p>
        )}
        {content.characterImage && (
          <img
            src={content.characterImage}
            alt={content.characterImageAlt}
            className={
              content.effect
                ? content.effect
                : `gameComponent-characterImage--${content.style}`
            }
          />
        )}
        <p className={`gameComponent-text--${content.style}`}>
          {subOption ? subOption : content.text}
        </p>
      </article>
      <div className={`gameComponent-buttons--${content.style}`}>
        {!content.subOptions || content.subOptions.length === 0
          ? buttons
          : optButtons}
      </div>
    </section>
  );
}

That will make optional dialogs visible if they are present (they will replace the main options). Once they are all clicked, the main options will be shown (to continue the game).

Might not need this mechanic. Leaving as comments for reference.

*/
