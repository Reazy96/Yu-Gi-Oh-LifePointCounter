import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  let [fullPoints, setFullPoints] = useState(8000);
  const [attack, setAttack] = useState("");
  let [loose, setLoose] = useState("You Loose");

  return (
    <section>
      <article>
        <h2>{fullPoints}</h2>
      </article>
      <input
        type="Number"
        placeholder="Punkte"
        onChange={(event) => setAttack(Number(event.target.value))}
        value={attack}
      />
      <div>
        <h3 onClick={() => setFullPoints(fullPoints - Number(attack))}>-</h3>
        <h3 onClick={() => setFullPoints(fullPoints + Number(attack))}>+</h3>
      </div>
      {fullPoints <= 0 ? <h6> You Loose </h6> : ""}
    </section>
  );
};

export default Counter;
