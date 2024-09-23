import PropTypes from "prop-types";
import { useEffect } from "react";

const Drum = ({ instrument, trigger, audioSrc, onTrigger }) => {
  const handleClick = () => {
    const audio = document.getElementById(trigger);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      console.log("the ", trigger, " pad was just clicked on");
    }
    onTrigger(instrument);
  };

  useEffect(() => {
    const detectPlay = (e) => {
      if (e.key.toUpperCase() === trigger) {
        const audio = document.getElementById(trigger);
        if (audio) {
          audio.currentTime = 0;
          audio.play();
        }
        console.log("Clicked key: ", e.key);
        onTrigger(instrument);
      }
    };

    document.addEventListener("keydown", detectPlay, true);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", detectPlay, true);
    };
  }, [trigger, onTrigger]);

  return (
    <div className="drum-pad" id={instrument} onClick={handleClick}>
      {trigger}
      <audio className="clip" id={trigger} src={audioSrc}></audio>
    </div>
  );
};

Drum.propTypes = {
  instrument: PropTypes.string.isRequired,
  trigger: PropTypes.string.isRequired,
  audioSrc: PropTypes.string.isRequired,
  onTrigger: PropTypes.func.isRequired,
};

export default Drum;
