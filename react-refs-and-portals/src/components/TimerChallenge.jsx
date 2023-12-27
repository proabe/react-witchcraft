import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.modalOpen();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((previousTimeRemaining) => previousTimeRemaining - 10)
    }, 10);
  }

  function handleClick() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStop() {
    dialog.current.modalOpen();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleClick}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
