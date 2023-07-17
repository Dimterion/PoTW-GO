import { Link } from "react-router-dom";
import startScreenImg from "../assets/images/start_screen_image.jpg";

function StartScreen() {
  return (
    <section className="startScreen-section">
      <img src={startScreenImg} alt="Futuristic Towers" />
      <h1>
        Poets of Tomorrow’s World:
        <br></br>
        gameOn(e)
      </h1>
      <div className="startScreen-section--buttons">
        <Link to="/story">START</Link>
        <Link to="/about">ABOUT</Link>
      </div>
    </section>
  );
}

export default StartScreen;
