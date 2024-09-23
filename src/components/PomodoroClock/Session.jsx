import PropTypes from "prop-types";

const Session = ({ sessionLength, incrementSession, decrementSession }) => {
  return (
    <div className="session controller">
      <div className="controller-display">
        <div id="session-label">Session Length</div>
        <div id="session-length">{sessionLength}</div>
      </div>
      <div className="button-container">
        <button id="session-increment" onClick={incrementSession}>
          INCREMENT
        </button>
        <button id="session-decrement" onClick={decrementSession}>
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
