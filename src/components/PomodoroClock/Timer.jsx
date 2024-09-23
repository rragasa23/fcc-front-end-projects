import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

const Timer = ({ reset, active, setActive, time, handleTimerEnd, mode }) => {
  const [countdown, setCountdown] = useState(time);
  const timerId = useRef();
  const audioSrc =
    "https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav";
  const audio = document.getElementById("beep");

  useEffect(() => {
    setCountdown(time);
  }, [time]);

  // Update counter
  useEffect(() => {
    if (active) {
      timerId.current = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(timerId.current); // Pause
    }
    return () => clearInterval(timerId.current);
  }, [active, mode]);

  // When timer ends
  useEffect(() => {
    if (countdown < 0) {
      audio.play();
      clearInterval(timerId.current);
      handleTimerEnd();
      setCountdown(time);
    }
  }, [countdown]);

  const formatTime = (timeLeft) => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return minutes + ":" + seconds;
  };

  const playOrPause = () => {
    setActive((prev) => !prev);
  };

  const handleReset = () => {
    setCountdown(time);
    reset();
    if (audio) {
      audio.pause();
      audio.currentTime = 0; // Rewind the audio to the start
    }
  };

  return (
    <div className="timer">
      <div className="timer-container">
        <div id="timer-label">
          <p>{mode === "session" ? "Session" : "Break"}</p>
        </div>
        <div id="time-left">{formatTime(countdown)}</div>
      </div>
      <div className="timer-controller">
        <button id="start_stop" onClick={playOrPause}>
          Play/Pause
        </button>
        <button id="reset" onClick={handleReset}>
          Reset
        </button>
        <audio className="clip" id="beep" src={audioSrc}></audio>
      </div>
    </div>
  );
};

Timer.propTypes = {
  reset: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  time: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
  handleTimerEnd: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default Timer;
