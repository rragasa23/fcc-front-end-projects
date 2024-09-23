import "./App.css";
import DrumMachine from "./components/DrumMachine/DrumMachine.jsx";
import JavascriptCalculator from "./components/JavaScriptCalculator/JavascriptCalculator.jsx";
import MarkdownPreviewer from "./components/MarkdownPreviewer/MarkdownPreviewer.jsx";
import PomodoroClock from "./components/PomodoroClock/PomodoroClock.jsx";
import RandomQuoteMachine from "./components/RandomQuoteMachine/RandomQuoteMachine.jsx";
import { useState } from "react";

function App() {
  const [activeProject, setActiveProject] = useState("none");

  const renderProject = () => {
    switch (activeProject) {
      case "drum-machine":
        return <DrumMachine />;
      case "javascript-calculator":
        return <JavascriptCalculator />;
      case "markdown-previewer":
        return <MarkdownPreviewer />;
      case "pomodoro-clock":
        return <PomodoroClock />;
      case "random-quote-machine":
        return <RandomQuoteMachine />;
      default:
        return <h2>Select a project from the sidebar</h2>;
    }
  };

  return (
    <>
      <nav className="sidebar">
        <button onClick={() => setActiveProject("random-quote-machine")}>
          Random Quote Machine
        </button>
        <button onClick={() => setActiveProject("markdown-previewer")}>
          Markdown Previewer
        </button>
        <button onClick={() => setActiveProject("drum-machine")}>
          Drum Machine
        </button>
        <button onClick={() => setActiveProject("javascript-calculator")}>
          Javascript Calculator
        </button>
        <button onClick={() => setActiveProject("pomodoro-clock")}>
          Pomodoro Clock
        </button>
      </nav>
      <div className="project-container">{renderProject()}</div>
    </>
  );
}

export default App;
