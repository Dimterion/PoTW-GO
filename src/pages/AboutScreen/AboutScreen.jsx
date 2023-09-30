import { Link } from "react-router-dom";
import "./aboutScreen.css";

function AboutScreen() {
  return (
    <section className="aboutScreen-container">
      <h1 className="aboutScreen-title">Poets of Tomorrow’s World:</h1>
      <h1 className="aboutScreen-subTitle">gameOn(e)</h1>
      <h2 className="aboutScreen-additionalTitle">
        Interactive Text Adventure
      </h2>
      <article className="aboutScreen-mainContent">
        <h3>
          The next chapter of the story which began{" "}
          <a
            href="https://poets-of-tomorrows-world.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="aboutScreen-link"
          >
            here
          </a>
          .
        </h3>
        <h3 className="aboutScreen-infoTitle">WORK IN PROGRESS</h3>
        <h4>
          Additional info can be found{" "}
          <a
            href="https://medium.com/@dimterion/using-developer-skills-to-tell-a-story-5cbe9f0b3cca"
            target="_blank"
            rel="noopener noreferrer"
            className="aboutScreen-link"
          >
            here
          </a>{" "}
          and{" "}
          <a
            href="https://medium.com/@dimterion/learning-from-a-personal-project-afbf34e506d0"
            target="_blank"
            rel="noopener noreferrer"
            className="aboutScreen-link"
          >
            here
          </a>
          .
        </h4>
        <Link className="aboutScreen-link" to="/">
          {">>> "}START SCREEN{" <<<"}
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
          href="https://dimterion.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="aboutScreen-link"
        >
          Made by Dimterion
        </a>
      </footer>
    </section>
  );
}

export default AboutScreen;
