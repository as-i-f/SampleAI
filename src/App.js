import React, { useState, useEffect } from 'react';
import Board from './Board';

// Celebration component for winner announcement
const Celebration = ({ winner, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-3xl p-8 text-center shadow-2xl animate-bounce max-w-sm mx-4">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Congratulations!</h2>
        <p className="text-xl text-gray-600 mb-4">Player {winner} Wins!</p>
        <div className="flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-2xl animate-pulse" style={{animationDelay: `${i * 0.2}s`}}>⭐</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App component containing game logic and state management
const App = () => {
  // Game state: board squares, current player, winner, and winning line
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);
  // Scoreboard state
  const [scores, setScores] = useState({ X: 0, O: 0 });

  // All possible winning combinations in tic-tac-toe
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line };
      }
    }
    return null;
  };

  // Handle square click - main game logic
  const handleClick = (i) => {
    // Prevent moves if game is over or square is filled
    if (winner || squares[i]) return;

    const newSquares = squares.slice();
    newSquares[i] = isXNext ? 'X' : 'O';
    setSquares(newSquares);

    // Check for winner after move
    const result = calculateWinner(newSquares);
    if (result) {
      setWinner(result.winner);
      setWinningLine(result.line);
      setScores(prev => ({ ...prev, [result.winner]: prev[result.winner] + 1 }));
      setShowCelebration(true);
    } else {
      setIsXNext(!isXNext);
    }
  };

  // Reset game to initial state
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinningLine(null);
    setShowCelebration(false);
  };

  // Reset scores
  const resetScores = () => {
    setScores({ X: 0, O: 0 });
  };

  // Check if game is a draw (all squares filled, no winner)
  const isDraw = !winner && squares.every(square => square !== null);

  // Determine game status message
  const getStatus = () => {
    if (winner) return `🎉 Player ${winner} Wins!`;
    if (isDraw) return "🤝 It's a Draw!";
    return `${isXNext ? '❌' : '⭕'} Player ${isXNext ? 'X' : 'O'}'s Turn`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center justify-center p-4 font-poppins">
      {showCelebration && (
        <Celebration 
          winner={winner} 
          onClose={() => setShowCelebration(false)} 
        />
      )}
      
      <div className="w-full mx-auto" style={{width: '360px', maxWidth: '90vw', boxSizing: 'border-box'}}>
        {/* Game title */}
        <h1 className="font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4" style={{fontSize: '28px'}}>
          Tic Tac Toe
        </h1>
        
        {/* Scoreboard */}
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl shadow-lg mb-4 border border-white/20" style={{padding: '8px'}}>
          <div className="flex justify-between items-center mb-1">
            <h2 className="font-semibold text-gray-700" style={{fontSize: '14px'}}>Scoreboard</h2>
            <button 
              onClick={resetScores}
              className="text-gray-500 hover:text-red-500 transition-colors"
              style={{fontSize: '12px'}}
            >
              Reset
            </button>
          </div>
          <div className="flex justify-around">
            <div className="text-center">
              <div style={{fontSize: '18px', marginBottom: '2px'}}>❌</div>
              <div className="font-bold text-red-600" style={{fontSize: '16px'}}>{scores.X}</div>
              <div className="text-gray-600" style={{fontSize: '11px'}}>Player X</div>
            </div>
            <div className="text-center">
              <div style={{fontSize: '18px', marginBottom: '2px'}}>⭕</div>
              <div className="font-bold text-blue-600" style={{fontSize: '16px'}}>{scores.O}</div>
              <div className="text-gray-600" style={{fontSize: '11px'}}>Player O</div>
            </div>
          </div>
        </div>
        
        {/* Game status */}
        <div className={`text-center font-semibold mb-4 rounded-xl backdrop-blur-sm transition-all duration-500 ${
          winner 
            ? 'text-yellow-300 bg-green-500/20 border border-green-400/30 animate-bounce' 
            : isDraw 
              ? 'text-orange-300 bg-orange-500/20 border border-orange-400/30' 
              : 'text-white bg-blue-500/20 border border-blue-400/30'
        }`} style={{fontSize: '16px', padding: '12px'}}>
          {getStatus()}
        </div>

        {/* Game board */}
        <div className="mb-2 flex justify-center">
          <Board 
            squares={squares} 
            onClick={handleClick} 
            winningLine={winningLine}
          />
        </div>

        {/* Control buttons */}
        <div className="flex gap-4 justify-center">
          <button
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{padding: '10px 20px', fontSize: '14px'}}
            onClick={resetGame}
          >
            🎮 New Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;