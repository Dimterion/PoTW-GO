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
    <section className="startScreen-container">
      {loading ? (
        <StartScreenLoader />
      ) : (
        <>
          <ul className="startScreen-slides">
            <li className="startScreen-slide"></li>
            <li className="startScreen-slide"></li>
            <li className="startScreen-slide"></li>
          </ul>
          <h1 className="startScreen-title">Poets of Tomorrow’s World:</h1>
          <h1 className="startScreen-subTitle">gameOn(e) {"{"}</h1>
          <nav className="startScreen-buttons">
            <Link className="startScreen-btn" to="/story">
              START
            </Link>
            <Link className="startScreen-btn" to="/about">
              ABOUT
            </Link>
          </nav>
          <h1 className="startScreen-closingTitle">{"}"}</h1>
        </>
      )}
    </section>
  );
}

export default StartScreen;
