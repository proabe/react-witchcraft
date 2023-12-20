import { WINNING_COMBINATIONS } from './winning-combinations';
import Player from './components/Player/Player';
import GameBoard from './components/GameBoard/GameBoard';
import { useState } from 'react';
import Log from './components/Log/Log';

function derivedActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurn] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = derivedActivePlayer(gameTurns);
  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((currActivePlayer) =>
    //   currActivePlayer === "X" ? "O" : "X"
    // );
    setGameTurn((previousTurn) => {
      const currentPlayer = derivedActivePlayer(previousTurn);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...previousTurn,
      ];

      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
