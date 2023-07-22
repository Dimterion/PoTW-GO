import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StoryScreenLoader from "../../components/Loaders/StoryScreenLoader/StoryScreenLoader";
import StartGameBtn from "../../components/Buttons/StartGameBtn/StartGameBtn";
import storyScreenImage from "../../assets/images/story_screen_image.jpg";
import { storyScreenIntroText } from "../../utils/additionalTexts";
import { storyScreenMainText } from "../../utils/additionalTexts";
import { storyScreenSubText } from "../../utils/additionalTexts";
import "./storyScreen.css";

function StoryScreen() {
  const [loading, setLoading] = useState(false);

  const [text, setText] = useState({
    introText: false,
    mainText: false,
    subText: false,
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  function showText(e) {
    setText((prevText) => ({
      ...prevText,
      [e]: !text[e],
    }));
  }

  function resetText() {
    setText({
      introText: false,
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
              onClick={() => showText("introText")}
            >
              &#10033;
            </button>
            <dialog
              className="storyScreen-section-article-dialog"
              open={text.introText}
            >
              <button
                className="storyScreen-section-article-dialog-xBtn"
                onClick={() => showText("introText")}
              >
                &#10006;
              </button>
              <p>{storyScreenIntroText}</p>
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
                onClick={() => showText("introText")}
              >
                CLOSE
              </button>
            </dialog>
            <br></br>
            <button
              className={`storyScreen-section-article-menuBtn ${
                text.mainText && "storyScreen-btnActive"
              }`}
              onClick={() => showText("mainText")}
            >
              {text.mainText && "✖"} WORLD STATE
            </button>
            {text.mainText && (
              <p className="storyScreen-section-article-paragraph">
                {storyScreenMainText}
              </p>
            )}
            <br></br>
            <button
              className={`storyScreen-section-article-menuBtn ${
                text.subText && "storyScreen-btnActive"
              }`}
              onClick={() => showText("subText")}
            >
              {text.subText && "✖"} WHO YOU ARE
            </button>
            {text.subText && (
              <p className="storyScreen-section-article-paragraph">
                {storyScreenSubText}
              </p>
            )}
            {(text.mainText || text.subText) && (
              <>
                <br></br>
                <button
                  className="storyScreen-section-article-resetBtn"
                  onClick={resetText}
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
