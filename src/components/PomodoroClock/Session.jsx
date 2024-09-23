import PropTypes from "prop-types";
import styles from "./PomodoroClock.module.css"; // Importing the CSS Module

const Session = ({ sessionLength, incrementSession, decrementSession }) => {
  return (
    <div className={styles.controller}>
      <div className={styles.controllerDisplay}>
        <div id="session-label">Session Length</div>
        <div id="session-length">{sessionLength}</div>
      </div>
      <div className={styles.buttonContainer}>
        <button
          id="session-increment"
          onClick={incrementSession}
          className={styles.incrementDecrementButton}
        >
          INCREMENT
        </button>
        <button
          id="session-decrement"
          onClick={decrementSession}
          className={styles.incrementDecrementButton}
        >
          DECREMENT
        </button>
      </div>
    </div>
  );
};

Session.propTypes = {
  sessionLength: PropTypes.number.isRequired,
  incrementSession: PropTypes.func.isRequired,
  decrementSession: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Session;
