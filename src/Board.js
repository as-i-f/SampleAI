import React from 'react';
import Square from './Square';

// Game board component that renders the 3x3 grid
const Board = ({ squares, onClick, winningLine }) => {
  // Render individual square with winning highlight logic
  const renderSquare = (i) => {
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onClick(i)}
        isWinning={winningLine && winningLine.includes(i)}
      />
    );
  };

  return (
    <div className="grid grid-cols-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl shadow-2xl backdrop-blur-sm border border-white/20" style={{gap: '8px', padding: '12px', boxSizing: 'border-box', width: 'fit-content', height: 'fit-content'}}>
      {Array(9).fill(null).map((_, i) => renderSquare(i))}
    </div>
  );
};

export default Board;