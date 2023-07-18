import { Link } from "react-router-dom";

function StartScreen() {
  return (
    <section className="startScreen-section">
      <ul className="startScreen-section-slides">
        <li className="startScreen-section-slides-slide"></li>
        <li className="startScreen-section-slides-slide"></li>
        <li className="startScreen-section-slides-slide"></li>
      </ul>
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
