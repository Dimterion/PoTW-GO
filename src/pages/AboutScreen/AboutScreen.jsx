import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AboutScreenLoader from "../../components/Loaders/AboutScreenLoader/AboutScreenLoader";
import structureDiagram from "../../assets/PoTW - Game_On(e)-flowchart.pdf";
import aboutScrImg from "../../assets/images/about_screen_image.jpg";
import "./aboutScreen.css";

function AboutScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <section className="aboutScreen-container">
      {loading ? (
        <AboutScreenLoader />
      ) : (
        <>
          <h1 className="aboutScreen-title">Poets of Tomorrow’s World:</h1>
          <h1 className="aboutScreen-subTitle">gameOn(e)</h1>
          <img
            src={aboutScrImg}
            alt="A person looking at the futuristic towers."
            className="aboutScreen-img"
          />
          <h2 className="aboutScreen-additionalTitle">
            Interactive Text Adventure
          </h2>
          <article className="aboutScreen-mainContent">
            <i>Next chapter of Tomorrow’s World story</i>
            <h3 className="aboutScreen-infoTitle">Details</h3>
            <ul className="aboutScreen-links">
              <li>
                <a
                  href="https://poets-of-tomorrows-world.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aboutScreen-link"
                >
                  First chapter of the story
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@dimterion/making-a-text-adventure-game-7e43df823f80"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aboutScreen-link"
                >
                  General description
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@dimterion/using-developer-skills-to-tell-a-story-5cbe9f0b3cca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aboutScreen-link"
                >
                  Tech details
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@dimterion/learning-from-a-personal-project-afbf34e506d0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aboutScreen-link"
                >
                  Additional info
                </a>
              </li>
              <li>To be continued...</li>
            </ul>
            <Link className="aboutScreen-startScreenLink" to="/">
              START SCREEN
            </Link>
          </article>
          <footer className="aboutScreen-footer">
            <a
              href="https://github.com/Dimterion/PoTW-GO"
              target="_blank"
              rel="noopener noreferrer"
              className="aboutScreen-link"
            >
              GitHub Repo
            </a>
            <a
              href={structureDiagram}
              target="_blank"
              rel="noopener noreferrer"
              className="aboutScreen-link"
            >
              Game structure
            </a>
            <a
              href="https://dimterion.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="aboutScreen-link"
            >
              Made by Dimterion
            </a>
            <span className="aboutScreen-versionInfo">Version 1.0</span>
          </footer>
        </>
      )}
    </section>
  );
}

export default AboutScreen;
