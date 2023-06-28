import { Link } from "react-router-dom";

function StartScreen() {
  return (
    <section>
      <h1>Poets of Tomorrow’s World - gameOn(e)</h1>
      <h2>Interactive Text Adventure</h2>
      <p>
        The next chapter of the story which began{" "}
        <a
          href="https://poets-of-tomorrows-world.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      <Link to="/story">Start</Link>
    </section>
  );
}

export default StartScreen;
