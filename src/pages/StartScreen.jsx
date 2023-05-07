import { Link } from "react-router-dom";

function StartScreen() {
  return (
    <section>
      <h1>Poets of Tomorrow’s World - gameOn(e)</h1>
      <h2>Interactive Text Adventure</h2>
      <p>Description + reference to the previous story.</p>
      <Link to="/story">Start</Link>
    </section>
  );
}

export default StartScreen;
