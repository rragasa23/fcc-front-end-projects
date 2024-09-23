import PropTypes from "prop-types";
import styles from "./PomodoroClock.module.css"; // Importing the CSS Module

const Break = ({ breakLength, incrementBreak, decrementBreak }) => {
  return (
    <div className={styles.controller}>
      <div className={styles.controllerDisplay}>
        <div id="break-label">Break Length</div>
        <div id="break-length">{breakLength}</div>
      </div>
      <div className={styles.buttonContainer}>
        <button
          id="break-increment"
          onClick={incrementBreak}
          className={styles.incrementDecrementButton}
        >
          INCREMENT
        </button>
        <button
          id="break-decrement"
          onClick={decrementBreak}
          className={styles.incrementDecrementButton}
        >
          DECREMENT
        </button>
      </div>
    </div>
  );
};

Break.propTypes = {
  breakLength: PropTypes.number.isRequired,
  incrementBreak: PropTypes.func.isRequired,
  decrementBreak: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Break;
