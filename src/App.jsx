import "./App.css";
import DrumMachine from "./components/DrumMachine/DrumMachine.jsx";
import JavascriptCalculator from "./components/JavaScriptCalculator/JavascriptCalculator.jsx";
import MarkdownPreviewer from "./components/MarkdownPreviewer/MarkdownPreviewer.jsx";
import PomodoroClock from "./components/PomodoroClock/PomodoroClock.jsx";
import RandomQuoteMachine from "./components/RandomQuoteMachine/RandomQuoteMachine.jsx";

function App() {
  return (
    <div className="project-container">
      <RandomQuoteMachine />
    </div>
  );
}

export default App;
