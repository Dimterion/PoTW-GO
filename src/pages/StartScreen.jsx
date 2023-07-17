import { Link } from "react-router-dom";
import startScreenImg from "../assets/images/start_screen_image.jpg";

function StartScreen() {
  return (
    <section className="startScreen-section">
      <img
        src={startScreenImg}
        alt="Futuristic Towers"
        className="startScreen-section-img"
      />
      <h1 className="startScreen-section-title">Poets of Tomorrow’s World:</h1>
      <h1 className="startScreen-section-subTitle">gameOn(e) {"{"}</h1>
      <div className="startScreen-section-buttons">
        <Link className="startScreen-section-buttons-btn" to="/story">
          START
        </Link>
        <Link className="startScreen-section-buttons-btn" to="/about">
          ABOUT
        </Link>
      </div>
      <h1 className="startScreen-section-closingTitle">{"}"}</h1>
    </section>
  );
}

export default StartScreen;
