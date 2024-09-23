import { useState } from "react";
import styles from "./PomodoroClock.module.css"; // Importing the CSS Module
import Session from "./Session.jsx";
import Break from "./Break.jsx";
import Timer from "./Timer";

function PomodoroClock() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [time, setTime] = useState(25);
  const [mode, setMode] = useState("session");
  const [active, setActive] = useState(false);

  const reset = () => {
    setTime(25);
    setSessionLength(25);
    setBreakLength(5);
    setMode("session");
    setActive(false);
  };

  const incrementSession = () => {
    if (sessionLength < 60 && !active) {
      setSessionLength((prev) => prev + 1);
      setTime((prev) => prev + 1);
    }
  };

  const decrementSession = () => {
    if (sessionLength > 1 && !active) {
      const newSessionLength = Math.max(1, sessionLength - 1);
      setSessionLength(newSessionLength);
      setTime((prev) => prev - 1);
    }
  };

  const incrementBreak = () => {
    if (breakLength < 60 && !active) {
      setBreakLength((prev) => prev + 1);
    }
  };

  const decrementBreak = () => {
    if (breakLength > 1 && !active) {
      setBreakLength((prev) => prev - 1);
    }
  };

  const handleTimerEnd = () => {
    if (mode === "session") {
      setMode("break");
      setTime(breakLength);
    } else {
      setMode("session");
      setTime(sessionLength);
    }
  };

  return (
    <div className={styles.container}>
      <Timer
        mode={mode}
        reset={reset}
        active={active}
        setActive={setActive}
        time={time * 60}
        setTime={setTime}
        handleTimerEnd={handleTimerEnd}
      />
      <hr className={styles.hr} />
      <Session
        sessionLength={sessionLength}
        incrementSession={incrementSession}
        decrementSession={decrementSession}
        active={active}
      />
      <hr className={styles.hr} />
      <Break
        breakLength={breakLength}
        incrementBreak={incrementBreak}
        decrementBreak={decrementBreak}
        active={active}
      />
    </div>
  );
}

export default PomodoroClock;
