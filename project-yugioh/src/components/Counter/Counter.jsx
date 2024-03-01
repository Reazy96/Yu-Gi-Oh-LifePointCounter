import { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Counter.css";

const Counter = () => {
  let [fullPoints, setFullPoints] = useState(8000);
  const [attack, setAttack] = useState("");
  let [loose, setLoose] = useState("You Loose");

  const { number } = useSpring({
    number: fullPoints,
    from: { number: 8000 },
    config: { duration: 3500 },
  });

  const playAudio = () => {
    const audioElement = new Audio("../../../public/Yu-Gi-Oh Life Points.mp3");
    audioElement.play();
  };

  const handleAttack = (value) => {
    setFullPoints(fullPoints - Number(value));
    playAudio();
  };

  const handleDefend = (value) => {
    setFullPoints(fullPoints + Number(value));
    playAudio();
  };

  return (
    <section>
      <fieldset>
        <legend>Your Points</legend>
        <h2>
          <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>
        </h2>
      </fieldset>

      <input
        type="Number"
        placeholder=""
        onChange={(event) => setAttack(Number(event.target.value))}
        value={attack}
      />
      <div>
        <h3 onClick={() => handleAttack(attack)}>-</h3>
        <h3 onClick={() => handleDefend(attack)}>+</h3>
      </div>
      {fullPoints <= 0 ? <h6> You Loose </h6> : ""}

      <audio controls src="../../../public/Yu-Gi-Oh Life Points.mp3"></audio>
    </section>
  );
};

export default Counter;
