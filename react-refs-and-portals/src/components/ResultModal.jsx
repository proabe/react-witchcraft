import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { remainingTime, targetTime, onReset },
  ref
) {

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  const userLost = remainingTime <= 0;

  const userScore = Math.round((1- remainingTime / (targetTime * 1000)) * 100, 2);

  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      modalOpen() {
        dialog.current.showModal();
      }
    }
  })

  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>You Won, Your Score Is: {userScore}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog">
        <button onClick={onReset}>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
