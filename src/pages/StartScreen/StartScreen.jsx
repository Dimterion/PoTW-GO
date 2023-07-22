import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StartScreenLoader from "../../components/Loaders/StartScreenLoader/StartScreenLoader";
import "./startScreen.css";

function StartScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <section className="startScreen-section">
      {loading ? (
        <StartScreenLoader />
      ) : (
        <>
          <ul className="startScreen-section-slides">
            <li className="startScreen-section-slides-slide"></li>
            <li className="startScreen-section-slides-slide"></li>
            <li className="startScreen-section-slides-slide"></li>
          </ul>
          <h1 className="startScreen-section-title">
            Poets of Tomorrow’s World:
          </h1>
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
        </>
      )}
    </section>
  );
}

export default StartScreen;
