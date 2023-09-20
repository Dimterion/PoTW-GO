import PropTypes from "prop-types";
import "./Styles/gameScreenLoaderPrologue.css";
import "./Styles/gameScreenLoaderLevelOneReal.css";
import "./Styles/gameScreenLoaderLevelOneVirtual.css";
import "./Styles/gameScreenLoaderLevelOneLoophole.css";

function GameScreenLoader({ content }) {
  return (
    <section className={`gameScreenLoader-container--${content.style}`}>
      <div className={`gameScreenLoader--${content.style}`}></div>
    </section>
  );
}

GameScreenLoader.propTypes = {
  content: PropTypes.object,
};

export default GameScreenLoader;
