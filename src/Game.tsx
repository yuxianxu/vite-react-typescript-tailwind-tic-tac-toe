import Square from './Square';
import { useEffect, useState } from 'react';

const INITIAL_GAME_STATE = ['', '', '', '', '', '', '', '', ''];
const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Game() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [currentPlayer, setCurrentPlayer] = useState('X');

  useEffect(() => {
    // if (gameState === INITIAL_GAME_STATE) {
    //   return;
    // }

    checkForWinner();
  }, [gameState]);

  const resetBoard = () => setGameState(INITIAL_GAME_STATE);

  const handleWin = () => {
    window.alert(`Congrats player ${currentPlayer}! You are the winner!`);
    resetBoard();
  };

  const handleDraw = () => {
    window.alert('The game ended in a draw');
    resetBoard();
  };

  const checkForWinner = () => {
    let roundWon = false;

    for (const element of WINNING_COMBOS) {
      const winCombo = element;
      let a = gameState[winCombo[0]];
      let b = gameState[winCombo[1]];
      let c = gameState[winCombo[2]];

      if ([a, b, c].includes('')) {
        continue;
      }

      if (a === b && b === c) {
        roundWon = true;
        break;
      }

    }
    if (roundWon) {
      setTimeout(() => handleWin(), 500);
      return;
    }

    if (!gameState.includes('')) {
      setTimeout(() => handleDraw(), 500);
      return;
    }

    changePlayer();
  };

  const changePlayer = () => {
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const handleCellClick = (event: any) => {
    const cellIndex = Number(event.target.getAttribute('data-cell-index'));

    const currentValue = gameState[cellIndex];
    if (currentValue) {
      return;
    }

    const newValues = [...gameState];
    newValues[cellIndex] = currentPlayer;
    setGameState(newValues);
  };

  return (
    <div className="h-full p-8 text-slate-800 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-center text-5xl mb-4 font-display text-white">
        Tic Tac Toe Game page
      </h1>
      <div>
        <div className="grid grid-cols-3 gap-3 mx-auto w-96">
          {gameState.map((player, index) => (
            <Square
              key={index}
              onClick={handleCellClick}
              {...{ index, player }}
            />
          ))}
        </div>
      </div>
      <div>Scores Goes Here</div>
    </div>
  );
}

export default Game;
