import { useState } from "react";
import { Link } from "react-router-dom";
import storyScreenImage from "../../assets/images/story_screen_image.jpg";
import { storyScreenMainText } from "../../utils/additionalTexts";
import { storyScreenDialogText } from "../../utils/additionalTexts";
import "./storyScreen.css";

function StoryScreen() {
  const [dialog, setDialog] = useState(false);

  return (
    <section className="storyScreen-section">
      <img
        src={storyScreenImage}
        alt="Futuristic towers"
        className="storyScreen-section-img"
      />
      <h2 className="storyScreen-section-title">
        The story you know so far...
      </h2>
      <article className="storyScreen-section-article">
        <button
          className="storyScreen-section-article-btn"
          onClick={() => setDialog(!dialog)}
        >
          &#10033;
        </button>
        <dialog className="storyScreen-section-article-dialog" open={dialog}>
          <button
            className="storyScreen-section-article-dialog-xBtn"
            onClick={() => setDialog(false)}
          >
            &#10006;
          </button>
          <p>{storyScreenDialogText}</p>
          <div>
            <b>P.S.</b> Previous story is{" "}
            <a
              href="https://poets-of-tomorrows-world.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="storyScreen-section-article-dialog-div-a"
            >
              here
            </a>
            . Just saying. No pressure...
          </div>
          <button
            className="storyScreen-section-article-dialog-btn"
            onClick={() => setDialog(false)}
          >
            CLOSE
          </button>
        </dialog>
        <p className="storyScreen-section-article-paragraph">
          {storyScreenMainText}
        </p>
      </article>
      <h2 className="storyScreen-section-title">What will you do now, poet?</h2>
      <Link to="/game">Jump in</Link>
      <br></br>
      <br></br>
      <Link to="/">Start Screen</Link>
    </section>
  );
}

export default StoryScreen;
