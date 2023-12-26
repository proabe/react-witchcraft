import { useState } from "react";

export default function Player() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [playerName, setPlayerName] = useState(null);

  function handleChange(event) {
    setIsSubmitted(false);
    setPlayerName(event.target.value);
  }

  function handleClick() {
    setIsSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {isSubmitted ? playerName : "unknown entity"}</h2>
      <p>
        <input onChange={handleChange} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
