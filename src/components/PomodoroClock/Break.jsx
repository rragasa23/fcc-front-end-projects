import PropTypes from "prop-types";

const Break = ({ breakLength, incrementBreak, decrementBreak }) => {
  return (
    <div className="break controller">
      <div className="controller-display">
        <div id="break-label">Break Length</div>
        <div id="break-length">{breakLength}</div>
      </div>
      <div className="button-container">
        <button id="break-increment" onClick={incrementBreak}>
          INCREMENT
        </button>
        <button id="break-decrement" onClick={decrementBreak}>
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
