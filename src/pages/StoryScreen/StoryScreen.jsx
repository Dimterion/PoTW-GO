import { Link } from "react-router-dom";
import storyScreenImage from "../../assets/images/story_screen_image.jpg";
import "./storyScreen.css";

function StoryScreen() {
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
        <p className="storyScreen-section-article-paragraph">
          You found out that you are not a human being, but a character made
          during one of the Writers Fights some time ago by a poet Deo. He then
          turned you into a free artificial creation browsing zerOne. A digital
          conscious being thinking of itself as of a real person. You had been
          stuck in a loop of taking part in Writers Fights on the second level
          of the Bridge until you found that all out. After that you almost won
          the last Fight, but decided to stop, to break that loop and get out of
          it. Another poet, Arika, who you met shortly before the Fight, got the
          first place. She somehow knew a lot about you and took you away
          somewhere, once the Fight was over. Now this is all you know. You
          don’t have any clear direction or path to follow. Your past is a
          blurry notion which has never been yours, and your future has not yet
          come. Present moment is all you can be sure of. And even that is not
          certain.
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
