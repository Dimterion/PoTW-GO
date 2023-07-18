import { Link } from "react-router-dom";
import "./aboutScreen.css";

function AboutScreen() {
  return (
    <section className="aboutScreen-section">
      <h1 className="aboutScreen-section-title">Poets of Tomorrow’s World:</h1>
      <h1 className="aboutScreen-section-subTitle">gameOn(e)</h1>
      <h2 className="aboutScreen-section-additionalTitle">
        Interactive Text Adventure
      </h2>
      <article className="aboutScreen-section-article">
        <h3>
          The next chapter of the story which began{" "}
          <a
            href="https://poets-of-tomorrows-world.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="aboutScreen-section-article-link"
          >
            here
          </a>
          .
        </h3>
        <h3>WORK IN PROGRESS</h3>
        <Link className="aboutScreen-section-article-link" to="/">
          START SCREEN
        </Link>
      </article>
    </section>
  );
}

export default AboutScreen;
