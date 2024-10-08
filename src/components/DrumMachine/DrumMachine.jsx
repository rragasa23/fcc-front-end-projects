import { useState } from "react";
import styles from "./DrumMachine.module.css"; // Importing the CSS Module
import Drum from "./Drum.jsx";

function DrumMachine() {
  const [sound, setSound] = useState("heater-1");

  const handleDrumTrigger = (trigger) => {
    setSound(trigger);
  };

  return (
    <div className={styles.container} id="drum-machine">
      <div className={styles.instrumentDisplay} id="display">
        <p>Instrument Playing:</p>
        <p>{sound}</p>
      </div>
      <div className={styles.drumPadContainer}>
        <Drum
          instrument={"heater-1"}
          trigger={"Q"}
          audioSrc={
            "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
          }
          onTrigger={handleDrumTrigger}
        />
        <Drum
          instrument={"heater-2"}
          trigger={"W"}
          audioSrc={
            "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
          }
          onTrigger={handleDrumTrigger}
        />
        <Drum
          instrument={"heater-3"}
          trigger={"E"}
          audioSrc={
            "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
          }
          onTrigger={handleDrumTrigger}
        />
        <Drum
          instrument={"heater-4"}
          trigger={"A"}
          audioSrc={
            "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
          }
          onTrigger={handleDrumTrigger}
        />
        <Drum
          instrument={"clap"}
          trigger={"S"}
          audioSrc={
            "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
          }
          onTrigger={handleDrumTrigger}
        />
        <Drum
          instrument={"open-hh"}
          trigger={"D"}
          audioSrc={
            "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
          }
          onTrigger={handleDrumTrigger}
        />
        <Drum
          instrument={"kick-n-hat"}
          trigger={"Z"}
          audioSrc={
            "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
          }
          onTrigger={handleDrumTrigger}
        />
        <Drum
          instrument={"kick"}
          trigger={"X"}
          audioSrc={
            "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
          }
          onTrigger={handleDrumTrigger}
        />
        <Drum
          instrument={"closed-hh"}
          trigger={"C"}
          audioSrc={
            "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
          }
          onTrigger={handleDrumTrigger}
        />
      </div>
    </div>
  );
}

export default DrumMachine;
