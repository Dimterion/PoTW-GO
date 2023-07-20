import { Link } from "react-router-dom";
import "./startGameBtn.css";

function StartGameBtn() {
  return (
    <Link className="startGameBtn" to="/game">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Jump in
    </Link>
  );
}

export default StartGameBtn;
