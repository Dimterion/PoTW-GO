import { Link } from "react-router-dom";

function StoryScreen() {
  return (
    <section>
      <h2>The story so far</h2>
      <p>Additional clarifications about the story.</p>
      <Link to="/game">Jump in</Link>
      <br></br>
      <br></br>
      <Link to="/">Start Screen</Link>
    </section>
  );
}

export default StoryScreen;
