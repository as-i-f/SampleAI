import React from 'react';

// Individual square component representing each cell in the tic-tac-toe grid
const Square = ({ value, onClick, isWinning }) => {
  return (
    <button
      className={`
        rounded-lg font-bold font-poppins
        transform transition-all duration-300 ease-in-out
        hover:scale-105 hover:shadow-lg active:scale-95
        ${isWinning 
          ? 'bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg animate-pulse' 
          : value 
            ? 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 shadow-md'
            : 'bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-indigo-50 text-gray-700 shadow-md hover:shadow-xl'
        }
        ${value === 'X' ? '!text-red-600' : value === 'O' ? '!text-blue-600' : ''}
        ${value ? 'cursor-default' : 'cursor-pointer'}
        border-2 border-white
      `}
      style={{
        width: '70px',
        height: '70px',
        minWidth: '70px',
        minHeight: '70px',
        maxWidth: '70px',
        maxHeight: '70px',
        fontSize: '28px',
        lineHeight: '1',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={onClick}
      disabled={value !== null}
    >
      <span className={`drop-shadow-sm font-bold ${value === 'X' ? 'text-red-600' : value === 'O' ? 'text-blue-600' : ''}`}>{value}</span>
    </button>
  );
};

export default Square;