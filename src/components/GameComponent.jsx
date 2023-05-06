/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";

function GameComponent({ content, setOptionId }) {
  const buttons = content.options.map((option) => {
    return (
      <button key={nanoid()} onClick={() => setOptionId(option.nextText)}>
        {option.text}
      </button>
    );
  });

  return (
    <div>
      <p>{content.text}</p>
      <div>{buttons}</div>
    </div>
  );
}

export default GameComponent;
