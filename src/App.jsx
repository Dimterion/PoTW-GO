import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartScreen from "./pages/StartScreen";
import GameScreen from "./pages/GameScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
