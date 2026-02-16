let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const status = document.getElementById("status");

const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

function makeMove(cell, index) {

  if(board[index] !== "" || !gameActive) return;

  board[index] = currentPlayer;
  cell.innerText = currentPlayer;

  if(checkWinner()) {
    status.innerText = `Player ${currentPlayer} Wins!`;
    gameActive = false;
    return;
  }

  if(board.every(c => c !== "")) {
    status.innerText = "Draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  status.innerText = `Player ${currentPlayer} Turn`;
}

function checkWinner() {
  return winPatterns.some(pattern => {
    return pattern.every(index => board[index] === currentPlayer);
  });
}

function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  status.innerText = "Player X Turn";

  document.querySelectorAll(".cell").forEach(cell => {
    cell.innerText = "";
  });
}
