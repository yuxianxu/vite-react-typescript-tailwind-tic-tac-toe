import Square from './Square';
import { useState } from 'react';

const INITIAL_GAME_STATE = ['x', 'x', 'o', 'o', '', '', '', '', ''];

function Game() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

  const handleCellClick = () => {
    console.log('cell clicked');
  };

  return (
    <div className="h-full p-8 text-slate-800 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-center text-5xl mb-4 font-display text-white">
        Tic Tac Toe Game page
      </h1>
      <div>
        <div className="grid grid-cols-3 gap-3 mx-auto w-96">
          {gameState.map((player, index) => (
            <Square key={index} onClick={handleCellClick} {...{ player }} />
          ))}
        </div>
      </div>
      <div>Scores Goes Here</div>
    </div>
  );
}

export default Game;
