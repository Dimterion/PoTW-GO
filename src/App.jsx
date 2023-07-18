import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartScreen from "./pages/StartScreen/StartScreen";
import GameScreen from "./pages/GameScreen/GameScreen";
import StoryScreen from "./pages/StoryScreen/StoryScreen";
import AboutScreen from "./pages/AboutScreen/AboutScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/story" element={<StoryScreen />} />
        <Route path="/game" element={<GameScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
