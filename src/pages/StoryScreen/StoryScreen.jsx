import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StoryScreenLoader from "../../components/Loaders/StoryScreenLoader/StoryScreenLoader";
import StartGameBtn from "../../components/Buttons/StartGameBtn/StartGameBtn";
import storyScreenImage from "../../assets/images/story_screen_image.jpg";
import { storyScreenMainText } from "../../utils/additionalTexts";
import { storyScreenSubText } from "../../utils/additionalTexts";
import { storyScreenDialogText } from "../../utils/additionalTexts";
import "./storyScreen.css";

function StoryScreen() {
  const [loading, setLoading] = useState(true);

  const [state, setState] = useState({
    dialog: false,
    mainText: false,
    subText: false,
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  function dialog() {
    setState((prevState) => ({
      ...prevState,
      dialog: !state.dialog,
    }));
  }

  function mainText() {
    setState((prevState) => ({
      ...prevState,
      mainText: !state.mainText,
    }));
  }

  function subText() {
    setState((prevState) => ({
      ...prevState,
      subText: !state.subText,
    }));
  }

  function reset() {
    setState({
      dialog: false,
      mainText: false,
      subText: false,
    });
  }

  return (
    <section className="storyScreen-section">
      {loading ? (
        <StoryScreenLoader />
      ) : (
        <>
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
              onClick={dialog}
            >
              &#10033;
            </button>
            <dialog
              className="storyScreen-section-article-dialog"
              open={state.dialog}
            >
              <button
                className="storyScreen-section-article-dialog-xBtn"
                onClick={dialog}
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
                onClick={dialog}
              >
                CLOSE
              </button>
            </dialog>
            <br></br>
            <button
              className={`storyScreen-section-article-menuBtn ${
                state.mainText && "storyScreen-btnActive"
              }`}
              onClick={mainText}
            >
              {state.mainText && "✖"} WORLD STATE
            </button>
            {state.mainText && (
              <p className="storyScreen-section-article-paragraph">
                {storyScreenMainText}
              </p>
            )}
            <br></br>
            <button
              className={`storyScreen-section-article-menuBtn ${
                state.subText && "storyScreen-btnActive"
              }`}
              onClick={subText}
            >
              {state.subText && "✖"} WHO YOU ARE
            </button>
            {state.subText && (
              <p className="storyScreen-section-article-paragraph">
                {storyScreenSubText}
              </p>
            )}
            {(state.mainText || state.subText) && (
              <>
                <br></br>
                <button
                  className="storyScreen-section-article-resetBtn"
                  onClick={reset}
                >
                  &#10148;
                </button>
              </>
            )}
            <br></br>
            <Link
              className="storyScreen-section-article-startScreenLink"
              to="/"
            >
              &#10094;&#10094;
            </Link>
            <br></br>
            <br></br>
          </article>
          <h2 className="storyScreen-section-title">
            What will you do now, poet?
          </h2>
          <StartGameBtn />
        </>
      )}
    </section>
  );
}

export default StoryScreen;
