import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import "./gameComponent.css";

function GameComponent({ content, setOptionId }) {
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
    <article>
      {content.subText && <p className="subText">{content.subText}</p>}
      <p className="text">{content.text}</p>
      <div className="options">{buttons}</div>
    </article>
  );
}

GameComponent.propTypes = {
  content: PropTypes.object,
  setOptionId: PropTypes.func,
};

export default GameComponent;
