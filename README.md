# Tic Tac Toe React Game

A fully functional Tic Tac Toe game built with React.js using modern hooks and Tailwind CSS with an enhanced, attractive UI.

## Features

- **3x3 Grid**: Classic tic-tac-toe gameplay
- **Two Players**: X and O take turns
- **Winner Detection**: Automatically detects winning combinations
- **Draw Detection**: Identifies when the game ends in a draw
- **Winning Highlight**: Visual highlight of the winning combination with animations
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS
- **Game Reset**: New Game button to restart
- **Enhanced UI**: Light theme with clean design and smooth animations
- **Interactive Elements**: Hover effects, scale animations, and visual feedback
- **Player Indicators**: Dynamic player turn indicators with visual cues
- **Scoreboard**: Tracks wins for both players with reset functionality
- **Winner Celebration**: Animated celebration modal when a player wins
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop

## Project Structure

```
src/
├── App.js          # Main component with game logic
├── Board.js        # 3x3 grid component
├── Square.js       # Individual cell component
└── index.js        # Entry point
```

## Components

### App Component
- Manages game state (board, current player, winner)
- Contains game logic for winner detection
- Handles player moves and game reset

### Board Component
- Renders the 3x3 grid
- Passes click events to parent component
- Highlights winning combinations

### Square Component
- Represents individual cells
- Handles visual states (empty, X, O, winning)
- Prevents clicks on filled squares

## Game Logic

### Winner Detection
Uses predefined winning combinations:
- Rows: [0,1,2], [3,4,5], [6,7,8]
- Columns: [0,3,6], [1,4,7], [2,5,8]
- Diagonals: [0,4,8], [2,4,6]

### Edge Cases Handled
- Clicking filled squares (disabled)
- Game over state (no more moves allowed)
- Draw detection (all squares filled, no winner)

## Installation & Usage

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## UI Enhancements

- **Modern Design**: Gradient backgrounds with glassmorphism effects
- **Smooth Animations**: Scale transforms, hover effects, and transitions
- **Stylish Typography**: Poppins font family for modern look
- **Visual Feedback**: Pulse animations for winning combinations
- **Interactive Elements**: Hover states and active feedback
- **Emoji Integration**: Fun emojis for better user experience
- **Dynamic Styling**: Context-aware styling based on game state

## Technologies Used

- **React 18**: Modern hooks (useState)
- **Tailwind CSS**: Utility-first styling with custom configuration
- **Google Fonts**: Poppins font family
- **ES6+**: Modern JavaScript syntax

## Code Style

- Functional components with hooks
- Clean, readable code with comments
- Modular component structure
- Responsive design principles