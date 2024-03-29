import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StoryScreenLoader from "../../components/Loaders/StoryScreenLoader/StoryScreenLoader";
import IntroModal from "../../components/Modals/IntroModal/IntroModal";
import StartGameBtn from "../../components/Buttons/StartGameBtn/StartGameBtn";
import storyScreenImage from "../../assets/images/story_screen_image.jpg";
import { storyScreenIntroText } from "../../utils/additionalTexts";
import { storyScreenMainText } from "../../utils/additionalTexts";
import { storyScreenSubText } from "../../utils/additionalTexts";
import "./storyScreen.css";

function StoryScreen() {
  const [loading, setLoading] = useState(true);

  const [text, setText] = useState({
    introText: false,
    mainText: false,
    subText: false,
  });

  useEffect(() => {
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

  function closeIntro() {
    setText((prevText) => ({
      ...prevText,
      introText: false,
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
    <section className="storyScreen-container">
      {loading ? (
        <StoryScreenLoader />
      ) : (
        <>
          <img
            src={storyScreenImage}
            alt="Futuristic towers"
            className="storyScreen-img"
          />
          <h2 className="storyScreen-title">The story you know so far...</h2>
          <article className="storyScreen-mainContent">
            <button
              className="storyScreen-introTextBtn"
              onClick={() => showText("introText")}
            >
              ✱
            </button>
            <IntroModal
              style="storyScreen-introText"
              openIntro={text.introText}
              closeIntro={closeIntro}
            >
              <button className="storyScreen-xBtn" onClick={closeIntro}>
                ✖
              </button>
              <p>{storyScreenIntroText}</p>
              <p>
                <b>P.S.</b> Previous story is{" "}
                <a
                  href="https://poets-of-tomorrows-world.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="storyScreen-introTextLink"
                >
                  here
                </a>
                . Just saying. No pressure...
              </p>
              <button className="storyScreen-closeBtn" onClick={closeIntro}>
                CLOSE
              </button>
            </IntroModal>
            <button
              className={`storyScreen-mainBtn ${
                text.mainText && "storyScreen-mainBtnActive"
              }`}
              onClick={() => showText("mainText")}
            >
              {text.mainText && "✖"} WORLD STATE
            </button>
            {text.mainText && (
              <p className="storyScreen-text">{storyScreenMainText}</p>
            )}
            <button
              className={`storyScreen-mainBtn ${
                text.subText && "storyScreen-mainBtnActive"
              }`}
              onClick={() => showText("subText")}
            >
              {text.subText && "✖"} WHO YOU ARE
            </button>
            {text.subText && (
              <p className="storyScreen-text">{storyScreenSubText}</p>
            )}
            {(text.mainText || text.subText) && (
              <button className="storyScreen-resetBtn" onClick={resetText}>
                ➤
              </button>
            )}
            <Link className="storyScreen-startScreenLink" to="/">
              ❰❰
            </Link>
          </article>
          <h2 className="storyScreen-title">What will you do now, poet?</h2>
          <StartGameBtn />
        </>
      )}
    </section>
  );
}

export default StoryScreen;
